"use client";

import { useCallback, useRef, useState } from "react";

// Sichqoncha pozitsiyasini kuzatib, kartani haqiqiy 3D qilib buradi
// va ustida yorug'lik (glare) siljitadi.
export default function Tilt3D({
  children,
  className = "",
  onClick,
  max = 11,
  scale = 1.035,
  glare = true,
}) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");
  const [transition, setTransition] = useState(
    "transform 0.5s cubic-bezier(0.22,1,0.36,1)"
  );
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    background:
      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6), transparent 60%)",
  });

  const handleMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * max * 2;
      const ry = (px - 0.5) * max * 2;
      setTransition("transform 0.09s linear");
      setTransform(
        `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(
          2
        )}deg) scale3d(${scale},${scale},${scale})`
      );
      setGlareStyle({
        opacity: 0.35,
        background: `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.6), transparent 62%)`,
      });
    },
    [max, scale]
  );

  const handleLeave = useCallback(() => {
    setTransition("transform 0.55s cubic-bezier(0.22,1,0.36,1)");
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
    setGlareStyle((g) => ({ ...g, opacity: 0 }));
  }, []);

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transform, transition, transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
      {glare && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 mix-blend-soft-light"
          style={glareStyle}
        />
      )}
    </div>
  );
}
