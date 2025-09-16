"use client";
import { useRef, useState } from "react";

export default function MetalicText({ text, className = "" }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative inline-block select-none cursor-default transition-all duration-200 ease-out ${className}`}
      style={{
        backgroundImage: `linear-gradient(
          -45deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.5) 50%,
          rgba(255, 255, 255, 0.1) 100%
        )`,
        backgroundSize: "200% 200%",
        backgroundPosition: `${pos.x}% ${pos.y}%`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: `
          0 1px 1px rgba(255,255,255,0.2),
          0 2px 6px rgba(0,0,0,0.4),
          0 0 4px rgba(255,255,255,0.05)
        `,
      }}
    >
      {text}
    </div>
  );
}
