import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import { SectionTitle } from "@/components/SectionTitle";

type Cta = { href: string; label: string; variant?: "primary" | "ghost" };

type Props = {
  variant?: "light" | "dark";
  imagePosition?: "left" | "right";
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  image: { src: string; alt: string; width?: number; height?: number; background?: boolean };
  ctas?: Cta[];
  className?: string;
};

export default function FeatureSlice({
  variant = "light",
  imagePosition = "right",
  eyebrow,
  title,
  description,
  bullets,
  image,
  ctas = [],
  className = "",
}: Props) {
  const panelClasses =
    variant === "light"
      ? "rounded-2xl border border-white/10 bg-white/5"
      : "rounded-2xl border border-white/10 bg-neutral-900/40";

  const ImageEl = (
    <Reveal>
      <div className={`w-full ${image.background ? 'bg-white rounded-2xl p-6 shadow-lg' : ''}`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width ?? 960}
          height={image.height ?? 720}
          className="w-full h-auto object-contain"
          priority={false}
        />
      </div>
    </Reveal>
  );

  const CopyEl = (
    <Reveal>
      <div>
        {eyebrow && <div className="text-xs uppercase tracking-wide text-neutral-400">{eyebrow}</div>}
        <SectionTitle as="h2" className="mt-1 md:text-3xl">
          {title}
        </SectionTitle>
        <p className="mt-3 text-neutral-300 max-w-prose">{description}</p>
        {bullets && bullets.length > 0 && (
          <ul className="mt-4 space-y-2 text-neutral-200">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {ctas.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {ctas.map((c) => (
              <Link key={c.href + c.label} href={c.href} aria-label={c.label}>
                <Button variant={c.variant === "ghost" ? "ghost" : "primary"} className="h-11 px-5">
                  {c.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );

  return (
    <div className={`${panelClasses} ${className}`}>
      <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12 p-6 md:p-10">
        {imagePosition === "left" ? (
          <>
            {ImageEl}
            {CopyEl}
          </>
        ) : (
          <>
            {CopyEl}
            {ImageEl}
          </>
        )}
      </div>
    </div>
  );
}


