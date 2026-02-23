"use client";

import { useEffect, useState } from "react";

// How long each word stays visible (ms)
const ROTATION_INTERVAL = 3200;
// Duration of the fade + slide transition (ms)
const FADE_MS = 380;

// Three-phase state machine:
//   "shown"   — word is fully visible (opacity 1, translateY 0), transition ON
//   "exiting" — word fades up and out  (opacity 0, translateY -8px), transition ON
//   "entering"— next word is positioned below (opacity 0, translateY 8px), transition OFF
//               → immediately transitions to "shown" via rAF to trigger the enter animation
type Phase = "shown" | "exiting" | "entering";

interface RotatingTextProps {
  words: string[];
}

export default function RotatingText({ words }: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("shown");
  const [reduced, setReduced] = useState(false);

  // Detect and track prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // When the "entering" phase is set, kick off the enter animation on the next paint
  useEffect(() => {
    if (phase !== "entering") return;
    // Two rAFs: first ensures the browser has applied the "no-transition" entering styles,
    // second triggers the transition to "shown"
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setPhase("shown"))
    );
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  // Main rotation loop
  useEffect(() => {
    if (reduced) return;

    let swapTimeout: ReturnType<typeof setTimeout>;

    const intervalId = setInterval(() => {
      // 1. Fade current word out
      setPhase("exiting");

      // 2. After the exit transition, swap the word and set entering position
      swapTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setPhase("entering");
      }, FADE_MS);
    }, ROTATION_INTERVAL);

    return () => {
      clearInterval(intervalId);
      clearTimeout(swapTimeout);
    };
  }, [reduced, words.length]);

  // prefers-reduced-motion: show first word statically, no animation
  if (reduced) {
    return (
      <span className="italic text-neutral-300">{words[0]}</span>
    );
  }

  const style: React.CSSProperties = {
    display: "inline-block",
    opacity: phase === "shown" ? 1 : 0,
    transform:
      phase === "exiting"
        ? "translateY(-8px)"
        : phase === "entering"
        ? "translateY(8px)"
        : "translateY(0)",
    // No transition when resetting position to the "entering" start point
    transition:
      phase === "entering"
        ? "none"
        : `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
  };

  return (
    <>
      {/* Visually hidden hint for screen readers */}
      <span className="sr-only" id="rotating-word-hint">
        automaticky se měnící text
      </span>

      <span
        aria-live="polite"
        aria-atomic="true"
        aria-describedby="rotating-word-hint"
        className="italic text-neutral-300"
        style={style}
      >
        {words[index]}
      </span>
    </>
  );
}
