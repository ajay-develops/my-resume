import { NextRequest, NextResponse } from "next/server";
import puppeteerCore from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { accessSync } from "fs";

export async function GET(request: NextRequest) {
  try {
    // Get the base URL from various sources
    const protocol = request.headers.get("x-forwarded-proto") || 
                     (request.url.startsWith("https") ? "https" : "http");
    const host = request.headers.get("host") || "localhost:3000";
    
    // Determine base URL - prioritize VERCEL_URL for production
    let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) {
      if (process.env.VERCEL_URL) {
        baseUrl = `https://${process.env.VERCEL_URL}`;
      } else {
        baseUrl = `${protocol}://${host}`;
      }
    }
    
    // Launch browser with appropriate configuration
    const isProduction = process.env.NODE_ENV === "production" || process.env.VERCEL;
    
    let browser;
    if (isProduction) {
      // Production/Vercel: Use bundled Chromium
      browser = await puppeteerCore.launch({
        args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: { width: 1920, height: 1080 },
        executablePath: await chromium.executablePath(),
        headless: true,
      });
    } else {
      // Development: Try to use system Chrome or fallback to bundled
      const executablePaths = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
        "/usr/bin/google-chrome",
        "/usr/bin/chromium",
        "/usr/bin/chromium-browser",
      ];
      
      let executablePath: string | undefined;
      for (const path of executablePaths) {
        try {
          accessSync(path);
          executablePath = path;
          break;
        } catch {
          // Continue to next path
        }
      }
      
      browser = await puppeteerCore.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: true,
        executablePath: executablePath || await chromium.executablePath(),
      });
    }

    const page = await browser.newPage();
    
    // Navigate to the resume page
    const url = `${baseUrl}/`;
    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Generate PDF with preserved links
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "0.5in",
        right: "0.5in",
        bottom: "0.5in",
        left: "0.5in",
      },
      displayHeaderFooter: false,
      preferCSSPageSize: true,
    });

    await browser.close();

    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=Ajay_Kumar_Resume.pdf",
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}

