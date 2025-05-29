import React, { useEffect, useRef, useState } from "react";

const MouseFollower = () => {
  const mousePos = useRef({ x: 0, y: 0 });
  const trailRef = useRef(Array(8).fill({ x: 0, y: 0 }));
  const animationRef = useRef();
  const [, setTick] = useState(0);
  const [isActive, setIsActive] = useState(false); // Track if animation should run

  // Only enable on md and up (Tailwind: md = 768px)
  useEffect(() => {
    const updateStatus = () => {
      setIsActive(window.innerWidth >= 768);
    };

    updateStatus(); // Initial check
    window.addEventListener("resize", updateStatus);

    return () => window.removeEventListener("resize", updateStatus);
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const lerp = (start, end, amt) => start + (end - start) * amt;

    const animate = () => {
      const newTrail = [...trailRef.current];
      newTrail.forEach((pos, i) => {
        const target = i === 0 ? mousePos.current : newTrail[i - 1];
        newTrail[i] = {
          x: lerp(pos.x, target.x, 0.2),
          y: lerp(pos.y, target.y, 0.2),
        };
      });
      trailRef.current = newTrail;
      setTick((t) => t + 1);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isActive]);

  if (!isActive) return null; // Don’t render anything if inactive

  return (
    <>
      {/* Mouse Trail */}
      {trailRef.current.map((pos, index) => (
        <div
          key={index}
          style={{
            left: pos.x - (12 - index * 1.5),
            top: pos.y - (12 - index * 1.5),
            width: `${24 - index * 3}px`,
            height: `${24 - index * 3}px`,
            backgroundColor: `rgba(225, 255, 255, ${0.8 - index * 0.1})`,
            borderRadius: "9999px",
            transform: `scale(${1 - index * 0.1})`,
            position: "fixed",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />
      ))}

      {/* Main dot */}
      <div
        style={{
          left: trailRef.current[0]?.x - 12,
          top: trailRef.current[0]?.y - 12,
          width: "24px",
          height: "24px",
          backgroundColor: "white",
          borderRadius: "9999px",
          boxShadow: "0 0 20px 2px rgba(255, 255, 255, 0.6)",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Glass Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 20,
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          background: "rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          pointerEvents: "none",
        }}
      />
    </>
  );
};

export default MouseFollower;
