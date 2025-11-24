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
      className="fixed top-6 right-6 md:top-8 md:right-8 bg-white hover:bg-gray-50 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2 no-print disabled:opacity-70 disabled:cursor-not-allowed z-50 border-2 border-black hover:border-gray-800 text-sm"
      title={isDownloading ? "Generating PDF..." : "Download Resume as PDF"}
    >
      <FaDownload className={isDownloading ? "animate-spin" : ""} size={16} />
      <span>{isDownloading ? "Generating..." : "Download"}</span>
    </button>
  );
}

