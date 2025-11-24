import Resume from "@/components/Resume";
import DownloadButton from "@/components/DownloadButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 print:py-0">
      <DownloadButton />
      <Resume />
    </div>
  );
}
