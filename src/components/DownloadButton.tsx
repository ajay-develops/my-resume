"use client";

import { useState } from "react";
import { FaDownload } from "react-icons/fa";

export default function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch("/api/pdf");
      if (!response.ok) {
        throw new Error("Failed to generate PDF");
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Ajay_Kumar_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Failed to download PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="fixed top-6 right-6 md:top-8 md:right-8 bg-accent-blue hover:bg-accent-blue-dark text-white font-bold py-4 px-6 rounded-xl shadow-2xl transition-all duration-200 flex items-center gap-3 no-print disabled:opacity-70 disabled:cursor-not-allowed z-50 border-2 border-white/20 backdrop-blur-sm text-base min-w-[180px] justify-center hover:scale-105 active:scale-95"
      style={{
        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
      }}
    >
      <FaDownload className={isDownloading ? "animate-spin" : ""} size={18} />
      <span>{isDownloading ? "Generating PDF..." : "Download Resume"}</span>
    </button>
  );
}

