import { ImageResponse } from "next/og";
import { getIconImageData } from "@/lib/icon-utils";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/jpeg";

export default async function AppleIcon() {
  const base64Image = getIconImageData();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={base64Image}
          alt=""
          width={180}
          height={180}
          style={{ borderRadius: "20px", objectFit: "cover" }}
        />
      </div>
    ),
    { ...size }
  );
}

