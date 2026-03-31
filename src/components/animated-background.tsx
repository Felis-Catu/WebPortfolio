"use client";

import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [blobs, setBlobs] = useState<
    { id: number; x: number; y: number; size: number; delay: number; color: string }[]
  >([]);

  useEffect(() => {
    const blobColors = [
      "rgba(232, 165, 152, 0.12)",
      "rgba(184, 197, 176, 0.10)",
      "rgba(212, 197, 185, 0.10)",
      "rgba(255, 212, 196, 0.12)",
      "rgba(232, 165, 152, 0.08)",
      "rgba(184, 197, 176, 0.08)",
    ];
    const generatedBlobs = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 300 + 200,
      delay: Math.random() * 8,
      color: blobColors[i % blobColors.length],
    }));
    setBlobs(generatedBlobs);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Morphing blobs */}
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className="absolute"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: blob.size,
            height: blob.size,
            background: blob.color,
            filter: "blur(60px)",
            animation: `blob-morph ${10 + blob.delay}s ${blob.delay}s ease-in-out infinite`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Subtle gradient overlay at top and bottom */}
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
