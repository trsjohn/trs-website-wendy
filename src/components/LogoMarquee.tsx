import Image from "next/image";

export type LogoItem = {
  src: string;
  alt: string;
};

type LogoMarqueeProps = {
  logos: LogoItem[];
  /** Duration in seconds for one full scroll. Defaults to 30. */
  durationSeconds?: number;
  className?: string;
};

export default function LogoMarquee({
  logos,
  durationSeconds = 30,
  className,
}: LogoMarqueeProps) {
  // Triple the logos for better seamless looping, especially on mobile
  const duplicated = [...logos, ...logos, ...logos];

  return (
    <div className={"group relative " + (className ?? "")}>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="overflow-hidden">
        <ul
          className="flex items-center py-4 animate-marquee [animation-play-state:running] group-hover:[animation-play-state:paused]"
          style={{
            // @ts-expect-error CSS custom property is fine
            "--marquee-duration": `${durationSeconds}s`,
          }}
        >
          {duplicated.map((logo, index) => (
            <li key={`${logo.src}-${index}`} className="flex-none px-4 sm:px-8">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={240}
                height={96}
                className="h-12 sm:h-16 md:h-20 w-auto object-contain"
                aria-hidden
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


