interface TagBubblesProps {
  tags: string[];
  className?: string;
}

export default function TagBubbles({ tags, className = "" }: TagBubblesProps) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-2 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
