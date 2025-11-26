import { readFileSync } from "fs";
import { join } from "path";

/**
 * Shared utility to load pic.jpeg from public folder
 * Used by both icon.tsx and apple-icon.tsx to avoid duplication
 */
export function getIconImageData(): string {
  const imagePath = join(process.cwd(), "public", "pic.jpeg");
  const imageBuffer = readFileSync(imagePath);
  return `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;
}

