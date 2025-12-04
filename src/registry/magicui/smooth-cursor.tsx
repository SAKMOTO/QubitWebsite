import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SmoothCursor() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(window.innerWidth / 2);
  const y = useMotionValue(window.innerHeight / 2);

  const smoothX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.3 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.3 });

  useEffect(() => {
    const handleMove = (event: MouseEvent | TouchEvent) => {
      let clientX: number;
      let clientY: number;

      if (event instanceof MouseEvent) {
        clientX = event.clientX;
        clientY = event.clientY;
      } else {
        const touch = event.touches[0];
        if (!touch) return;
        clientX = touch.clientX;
        clientY = touch.clientY;
      }

      x.set(clientX);
      y.set(clientY);
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchstart", handleMove);
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchstart", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[70] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60 bg-primary/20 shadow-[0_0_25px_hsl(var(--primary)/0.6)] mix-blend-screen"
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        className="pointer-events-none fixed z-[69] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 bg-primary/5 blur-sm"
        style={{ x: smoothX, y: smoothY }}
      />
    </>
  );
}
