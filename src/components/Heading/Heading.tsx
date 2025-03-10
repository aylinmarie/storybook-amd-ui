import React from "react";
import "./Heading.css";

interface HeadingProps {
  /** Defines the semantic heading level (h1 to h6) */
  level: 1 | 2 | 3 | 4 | 5 | 6;

  /** Defines the visual appearance, independent of the level */
  as?: 1 | 2 | 3 | 4 | 5 | 6;

  /** Text content of the heading */
  children: React.ReactNode;

  /** Additional class names for styling */
  className?: string;
}

/**
 * A flexible Heading component that allows semantic and visual separation.
 */
const Heading: React.FC<HeadingProps> = ({
  level,
  as = level,
  children,
  className = "",
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const visualClass = `heading-${as}`;

  return (
    <Tag className={`heading ${visualClass} ${className}`}>{children}</Tag>
  );
};

export default Heading;
