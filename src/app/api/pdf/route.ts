import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { ResumePDF } from "@/components/ResumePDF";

export async function GET() {
  try {
    // Generate PDF using @react-pdf/renderer
    const pdfBuffer = await renderToBuffer(React.createElement(ResumePDF));

    return new NextResponse(Buffer.from(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=Ajay_Kumar_Resume.pdf",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
