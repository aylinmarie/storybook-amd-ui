import React from "react";
import "./Badge.css";

interface BadgeProps {
  label: string;
  variant?: "clay" | "stone" | "sand" | "graphite";
}

const Badge: React.FC<BadgeProps> = ({ label, variant = "clay" }) => {
  return <span className={`badge badge-${variant}`}>{label}</span>;
};

export default Badge;
