import { ImageResponse } from "next/og";
import { getIconImageData } from "@/lib/icon-utils";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/jpeg";

export default async function Icon() {
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
          width={32}
          height={32}
          style={{ borderRadius: "4px", objectFit: "cover" }}
        />
      </div>
    ),
    { ...size }
  );
}

