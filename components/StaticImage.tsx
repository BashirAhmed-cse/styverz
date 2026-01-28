interface StaticImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export const StaticImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false 
}: StaticImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
};