// components/HostGallery.tsx
import Image from "next/image";

interface GalleryImage {
  src: string;
  height: string;
  alt?: string;
}

interface GalleryColumn {
  images: GalleryImage[];
  align: string;
}

export default function HostGallery() {
  // Moved data outside component to prevent recreation on every render
  const galleryData: GalleryColumn[] = [
    {
      images: [
        { src: "/host/host-1.png", height: "h-[220px]", alt: "Host image 1" },
        { src: "/host/host-2.png", height: "h-[220px]", alt: "Host image 2" },
        { src: "/host/host-3.png", height: "h-[100px]", alt: "Host image 3" },
      ],
      align: "items-start",
    },
    {
      images: [
        { src: "/host/host-4.png", height: "h-[250px]", alt: "Host image 4" },
        { src: "/host/host-5.png", height: "h-[180px]", alt: "Host image 5" },
      ],
      align: "items-start mt-40 md:mt-40 lg:mt-40",
    },
    {
      images: [
        { src: "/host/host-6.png", height: "h-[250px]", alt: "Host image 6" },
        { src: "/host/host-7.png", height: "h-[120px]", alt: "Host image 7" },
      ],
      align: "items-start mt-64 md:mt-64 lg:mt-64",
    },
    {
      images: [
        { src: "/host/host-8.png", height: "h-[250px]", alt: "Host image 8" },
        { src: "/host/host-9.png", height: "h-[180px]", alt: "Host image 9" },
      ],
      align: "items-start mt-64 md:mt-64 lg:mt-64",
    },
    {
      images: [
        { src: "/host/host-1.png", height: "h-[250px]", alt: "Host image 10" },
        { src: "/host/host-2.png", height: "h-[180px]", alt: "Host image 11" },
      ],
      align: "items-start mt-40 md:mt-40 lg:mt-40",
    },
    {
      images: [
        { src: "/host/host-3.png", height: "h-[250px]", alt: "Host image 12" },
        { src: "/host/host-4.png", height: "h-[180px]", alt: "Host image 13" },
        { src: "/host/host-5.png", height: "h-[100px]", alt: "Host image 14" },
      ],
      align: "items-start",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-4 overflow-hidden" aria-label="Host Gallery">
      <div className="max-w-7xl mx-auto">
        {/* Bengali Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center  text-gray-900">
          হোস্ট গ্যালারি
        </h2>

        {/* The Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {galleryData.map((col, colIndex) => (
            <div
              key={`column-${colIndex}`}
              className={`flex flex-col gap-4 md:gap-5 ${col.align}`}
            >
              {col.images.map((img, imgIndex) => (
                <div
                  key={`image-${colIndex}-${imgIndex}`}
                  className={`relative w-full ${img.height} overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt || `Gallery image ${colIndex}-${imgIndex}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 15vw"
                    quality={85}
                    loading={colIndex < 2 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhQJ/wb4YtQAAAABJRU5ErkJggg=="
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}