import Image from "next/image";

export type LogoItem = {
  src: string;
  alt: string;
};

type LogoStripProps = {
  logos: LogoItem[];
  className?: string;
};

export default function LogoStrip({ logos, className = "" }: LogoStripProps) {
  return (
    <div className={"" + className}>
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {logos.map((logo) => (
          <li key={logo.src} className="shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={240}
              height={80}
              className="h-8 sm:h-10 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
              aria-hidden
            />
          </li>
        ))}
      </ul>
    </div>
  );
}


