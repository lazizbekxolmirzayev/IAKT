"use client";

import { useRef, useState } from "react";

// Tugma sichqonchaga yengil "tortiladi" (magnit effekti).
export default function Magnetic({ children, className = "", strength = 0.35 }) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const [snap, setSnap] = useState(false);

  const move = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    setSnap(false);
    setT({ x, y });
  };

  const leave = () => {
    setSnap(true);
    setT({ x: 0, y: 0 });
  };

  return (
    <span
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={className}
      style={{
        display: "inline-block",
        transform: `translate3d(${t.x.toFixed(2)}px, ${t.y.toFixed(2)}px, 0)`,
        transition: snap
          ? "transform 0.5s cubic-bezier(0.22,1,0.36,1)"
          : "transform 0.12s ease-out",
      }}
    >
      {children}
    </span>
  );
}
