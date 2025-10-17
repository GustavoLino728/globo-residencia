import Image from "next/image";

interface BackgroundImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function BackgroundImage({ src, alt, priority = false }: BackgroundImageProps) {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
