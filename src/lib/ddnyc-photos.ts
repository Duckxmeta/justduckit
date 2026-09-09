import fs from "fs";
import path from "path";

export interface DDNYCPhoto {
  id: string;
  src: string;
  filename: string;
  title: string;
}

export function getDDNYCPhotos(): DDNYCPhoto[] {
  const photosDir = path.join(process.cwd(), "public/media/ddnyc-photos");
  
  if (!fs.existsSync(photosDir)) {
    return [];
  }

  const files = fs.readdirSync(photosDir);
  const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"];

  const photoFiles = files.filter((file) =>
    imageExtensions.some((ext) => file.endsWith(ext))
  );

  // Sort photos predictably
  photoFiles.sort((a, b) => {
    // If files have numbers like DDNYC717 vs DDNYC609, sort by DDNYC number if possible
    const matchA = a.match(/DDNYC(\d+)/i);
    const matchB = b.match(/DDNYC(\d+)/i);
    if (matchA && matchB) {
      return parseInt(matchA[1], 10) - parseInt(matchB[1], 10);
    }
    return a.localeCompare(b);
  });

  return photoFiles.map((filename, index) => {
    const match = filename.match(/DDNYC(\d+)/i);
    const photoNumber = match ? `DDNYC #${match[1]}` : `Photo ${index + 1}`;
    
    return {
      id: `photo-${index}`,
      src: `/media/ddnyc-photos/${filename}`,
      filename,
      title: photoNumber,
    };
  });
}
