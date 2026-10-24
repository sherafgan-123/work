import type { PhotoKey } from "../data/types";

const files = import.meta.glob("../assets/photos/*.webp", { eager: true, query: "?url", import: "default" }) as Record<string, string>;

const url = (key: PhotoKey, width: 640 | 1200) => files[`../assets/photos/${key}-${width}.webp`] ?? "";

interface PhotoProps {
  name: PhotoKey;
  alt: string;
  sizes?: string;
  className?: string;
  eager?: boolean;
}

// Stock photograph (Pexels) with a navy and teal wash from the .photo class. Never a client image.
export function Photo({ name, alt, sizes = "(max-width: 900px) 100vw, 600px", className = "", eager = false }: PhotoProps) {
  return (
    <div className={`photo ${className}`}>
      <img
        src={url(name, 1200)}
        srcSet={`${url(name, 640)} 640w, ${url(name, 1200)} 1200w`}
        sizes={sizes}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
}
