import React, { useEffect, useState } from 'react';

/**
 * CursorGlow Component
 * Subtle, high-performance radial blue glow following the mouse on desktop devices only.
 * Strictly non-interactive (pointer-events-none) to never interfere with text selection or clicking.
 * Automatically disabled on touch screens and when prefers-reduced-motion is active.
 */
export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -300, y: -300 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch device or preference for reduced motion
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 768;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    let rafId = null;

    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-10 transition-opacity duration-300 ease-out hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(59, 130, 246, 0.03) 45%, transparent 70%)',
      }}
    />
  );
}
