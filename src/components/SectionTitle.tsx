import React from "react";

type SectionTitleProps<T extends React.ElementType = "h2"> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function SectionTitle<T extends React.ElementType = "h2">({
  as,
  className = "",
  children,
  ...rest
}: SectionTitleProps<T>) {
  const Tag = (as || "h2") as React.ElementType;
  return (
    <Tag className={`text-2xl sm:text-3xl font-semibold tracking-tight ${className}`} {...rest}>
      {children}
    </Tag>
  );
}


