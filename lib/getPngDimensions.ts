import fs from "fs";

export interface Dimensions {
  width: number;
  height: number;
}

// Reads a PNG's width/height straight from its IHDR chunk (bytes 16-23).
export function getPngDimensions(absolutePath: string): Dimensions | null {
  try {
    const fd = fs.openSync(absolutePath, "r");
    const buffer = Buffer.alloc(24);
    fs.readSync(fd, buffer, 0, 24, 0);
    fs.closeSync(fd);

    const isPng = buffer.readUInt32BE(0) === 0x89504e47;
    if (!isPng) return null;

    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  } catch {
    return null;
  }
}
