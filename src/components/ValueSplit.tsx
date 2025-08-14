type Props = {
  claim: string; // large numeral or short claim, e.g., "2–3×"
  title: string; // supporting line, e.g., "faster hiring cycles"
  bullets: { title: string; body?: string }[]; // two short bullets
  caption?: string; // small caption under bullets
  className?: string;
};

export default function ValueSplit({ claim, title, bullets, caption, className = "" }: Props) {
  return (
    <div className={"grid md:grid-cols-2 items-start gap-10 " + className}>
      <div>
        <div className="text-6xl md:text-7xl font-semibold tracking-tight">{claim}</div>
        <h2 className="mt-2 text-subhero text-neutral-300 font-semibold">{title}</h2>
      </div>
      <div className="space-y-4">
        <ul className="space-y-3">
          {bullets.map((b) => (
            <li key={b.title} className="text-neutral-200">
              <div className="font-medium">{b.title}</div>
              {b.body && <div className="text-sm text-neutral-300 mt-1">{b.body}</div>}
            </li>
          ))}
        </ul>
        {caption && <p className="text-xs text-neutral-400">{caption}</p>}
      </div>
    </div>
  );
}


