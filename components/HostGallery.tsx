// components/HostGallery.tsx
import Image from "next/image";

interface GalleryImage {
  src: string;
  mobileHeight: string;
  desktopHeight: string;
  alt?: string;
}

export default function HostGallery() {
  // All images array - total 13 images
  const allImages: GalleryImage[] = [
    { src: "/host/host-1.png", mobileHeight: "h-[200px]", desktopHeight: "h-[220px]", alt: "Host image 1" },
    { src: "/host/host-2.png", mobileHeight: "h-[200px]", desktopHeight: "h-[220px]", alt: "Host image 2" },
    { src: "/host/host-3.png", mobileHeight: "h-[120px]", desktopHeight: "h-[100px]", alt: "Host image 3" },
    { src: "/host/host-4.png", mobileHeight: "h-[220px]", desktopHeight: "h-[250px]", alt: "Host image 4" },
    { src: "/host/host-5.png", mobileHeight: "h-[180px]", desktopHeight: "h-[180px]", alt: "Host image 5" },
    { src: "/host/host-6.png", mobileHeight: "h-[220px]", desktopHeight: "h-[250px]", alt: "Host image 6" },
    { src: "/host/host-7.png", mobileHeight: "h-[140px]", desktopHeight: "h-[120px]", alt: "Host image 7" },
    { src: "/host/host-8.png", mobileHeight: "h-[220px]", desktopHeight: "h-[250px]", alt: "Host image 8" },
    { src: "/host/host-9.png", mobileHeight: "h-[180px]", desktopHeight: "h-[180px]", alt: "Host image 9" },
    { src: "/host/host-1.png", mobileHeight: "h-[220px]", desktopHeight: "h-[250px]", alt: "Host image 10" },
    { src: "/host/host-2.png", mobileHeight: "h-[180px]", desktopHeight: "h-[180px]", alt: "Host image 11" },
    { src: "/host/host-3.png", mobileHeight: "h-[220px]", desktopHeight: "h-[250px]", alt: "Host image 12" },
    { src: "/host/host-4.png", mobileHeight: "h-[180px]", desktopHeight: "h-[180px]", alt: "Host image 13" },
    { src: "/host/host-5.png", mobileHeight: "h-[120px]", desktopHeight: "h-[100px]", alt: "Host image 14" },
  ];

  // Group images for mobile (2 columns)
  const mobileColumns: GalleryImage[][] = [[], []];
  allImages.forEach((image, index) => {
    mobileColumns[index % 2].push(image);
  });

  // Group images for desktop (6 columns with masonry layout)
  const desktopColumns = [
    {
      images: allImages.slice(0, 3),
      align: "items-start",
    },
    {
      images: allImages.slice(3, 5),
      align: "items-start mt-40",
    },
    {
      images: allImages.slice(5, 7),
      align: "items-start mt-64",
    },
    {
      images: allImages.slice(7, 9),
      align: "items-start mt-64",
    },
    {
      images: allImages.slice(9, 11),
      align: "items-start mt-40",
    },
    {
      images: allImages.slice(11, 14),
      align: "items-start",
    },
  ];

  return (
    <section className="bg-[#fdfaf7] py-8 md:py-20 px-4 overflow-hidden" aria-label="Host Gallery">
      <div className="max-w-7xl mx-auto">
        {/* Bengali Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
          হোস্ট গ্যালারি
        </h2>

        {/* Mobile Layout (2 columns, all images) */}
        <div className="sm:hidden grid grid-cols-2 gap-3">
          {mobileColumns.map((column, colIndex) => (
            <div
              key={`mobile-col-${colIndex}`}
              className="flex flex-col gap-3"
            >
              {column.map((img, imgIndex) => (
                <div
                  key={`mobile-img-${colIndex}-${imgIndex}`}
                  className={`relative w-full ${img.mobileHeight} overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt || `Gallery image`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="45vw"
                    quality={85}
                    loading={colIndex === 0 && imgIndex === 0 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhQJ/wb4YtQAAAABJRU5ErkJggg=="
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop Layout (6 columns with masonry) */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {desktopColumns.map((col, colIndex) => (
            <div
              key={`desktop-col-${colIndex}`}
              className={`flex flex-col gap-4 md:gap-5 ${col.align}`}
            >
              {col.images.map((img, imgIndex) => (
                <div
                  key={`desktop-img-${colIndex}-${imgIndex}`}
                  className={`relative w-full ${img.desktopHeight} overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt || `Gallery image`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 30vw, 15vw"
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