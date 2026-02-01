import Image from "next/image";

export function ImageHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      {/* Image with proper aspect ratio handling */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/Group of 2 IMG.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      {/* Enhanced overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-linen)]/60 via-[var(--color-linen)]/35 to-[var(--color-linen)]/60"></div>
      {/* Additional overlay for text clarity */}
      <div className="absolute inset-0 bg-[var(--color-linen)]/25"></div>
    </div>
  );
}
