import type { ReactNode } from "react";

type Props = {
  as?: "h1" | "h2";
  className?: string;
  children: ReactNode;
};

export function GradientHeading({
  as: Tag = "h2",
  className = "",
  children,
}: Props) {
  return (
    <Tag
      className={`bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text font-bold text-transparent ${className}`}
    >
      {children}
    </Tag>
  );
}
