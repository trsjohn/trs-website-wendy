import React from "react";

export type TileItem = {
  Icon: React.ElementType;
  title: string;
  description: string;
};

type TilesGridProps = {
  items: TileItem[];
  className?: string;
};

export default function TilesGrid({ items, className = "" }: TilesGridProps) {
  return (
    <div className={"grid gap-6 sm:grid-cols-2 lg:grid-cols-3 " + className}>
      {items.map(({ Icon, title, description }, i) => (
        <div
          key={`${title}-${i}`}
          className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft transition-transform duration-200 ease-out hover:-translate-y-1"
        >
          <Icon className="h-6 w-6 text-red-500" aria-hidden />
          <h3 className="mt-3 text-lg font-semibold text-neutral-100">{title}</h3>
          <p className="mt-2 text-neutral-300 text-sm leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  );
}


