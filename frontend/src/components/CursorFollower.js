/**
 * CursorFollower — Drone cursor
 *
 * Default : top-view quadcopter, propellers idle-spinning
 * Hover   : scales up, props spin fast, dashed crosshair ring appears
 * Click   : drone dips + pulse ring, simulates "deploy"
 *
 * Injects cursor:none globally on mount, removes on unmount.
 * Skips render on touch / coarse-pointer devices.
 */

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import PropTypes from "prop-types";

/* ── cursor hide injection ──────────────────────────────────────────────── */
const STYLE_ID = "hn-cursor-hide";
function injectHide() {
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = "*, *::before, *::after { cursor: none !important; }";
  document.head.appendChild(s);
}
function removeHide() {
  document.getElementById(STYLE_ID)?.remove();
}

/* ── top-view drone SVG ─────────────────────────────────────────────────── */
function DroneSVG({ variant }) {
  const isHover = variant === "hover";
  const isClick = variant === "click";

  let propDur = 0.75;
  if (isHover) propDur = 0.15;
  if (isClick) propDur = 0.1;
  const bodyStroke = isHover || isClick ? "#93c5fd" : "#cbd5e1";
  const propFill = isHover || isClick ? "#dbeafe" : "#94a3b8";
  const hubFill = isHover || isClick ? "#60a5fa" : "#64748b";

  const motors = [
    { cx: 10, cy: 10, dir: 1 },
    { cx: 38, cy: 10, dir: -1 },
    { cx: 10, cy: 38, dir: -1 },
    { cx: 38, cy: 38, dir: 1 },
  ];
  const center = 24;
  const armInset = 4.5;

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      {/* Arms */}
      {motors.map((m) => (
        <line
          key={`arm-${m.cx}-${m.cy}`}
          x1={center + Math.sign(m.cx - center) * armInset}
          y1={center + Math.sign(m.cy - center) * armInset}
          x2={m.cx}
          y2={m.cy}
          stroke={bodyStroke}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ))}

      {/* Motor hubs */}
      {motors.map((m) => (
        <circle
          key={`hub-${m.cx}-${m.cy}`}
          cx={m.cx}
          cy={m.cy}
          r="2.8"
          fill={hubFill}
        />
      ))}

      {/* Spinning propellers */}
      {motors.map((m) => (
        <motion.g
          key={`prop-${m.cx}-${m.cy}`}
          style={{ transformOrigin: `${m.cx}px ${m.cy}px` }}
          animate={{ rotate: m.dir * 360 }}
          transition={{ duration: propDur, repeat: Infinity, ease: "linear" }}
        >
          <ellipse
            cx={m.cx}
            cy={m.cy - 5.5}
            rx="1.5"
            ry="5"
            fill={propFill}
            opacity="0.9"
          />
          <ellipse
            cx={m.cx}
            cy={m.cy + 5.5}
            rx="1.5"
            ry="5"
            fill={propFill}
            opacity="0.9"
          />
          <ellipse
            cx={m.cx - 5.5}
            cy={m.cy}
            rx="5"
            ry="1.5"
            fill={propFill}
            opacity="0.9"
          />
          <ellipse
            cx={m.cx + 5.5}
            cy={m.cy}
            rx="5"
            ry="1.5"
            fill={propFill}
            opacity="0.9"
          />
        </motion.g>
      ))}

      {/* Body */}
      <rect
        x="19.5"
        y="19.5"
        width="9"
        height="9"
        rx="2"
        fill={isHover || isClick ? "#1e3a5f" : "#0f172a"}
        stroke={bodyStroke}
        strokeWidth="1"
      />

      {/* Camera lens */}
      <circle cx="24" cy="24" r="2" fill={hubFill} />
      <circle
        cx="24"
        cy="24"
        r="0.8"
        fill={isHover || isClick ? "#bfdbfe" : "#e2e8f0"}
      />

      {/* Hover — rotating dashed crosshair ring */}
      <AnimatePresence>
        {isHover && (
          <motion.circle
            cx="24"
            cy="24"
            r="21"
            stroke="#3b82f6"
            strokeWidth="0.7"
            strokeDasharray="3.5 3"
            fill="none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.55, scale: 1, rotate: 360 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{
              opacity: { duration: 0.2 },
              scale: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
              rotate: { duration: 9, repeat: Infinity, ease: "linear" },
            }}
            style={{ originX: "24px", originY: "24px" }}
          />
        )}
      </AnimatePresence>

      {/* Click — expanding pulse ring */}
      <AnimatePresence>
        {isClick && (
          <motion.circle
            cx="24"
            cy="24"
            r="22"
            stroke="#93c5fd"
            strokeWidth="1.2"
            fill="none"
            initial={{ opacity: 0.9, scale: 0.65 }}
            animate={{ opacity: 0, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            style={{ originX: "24px", originY: "24px" }}
          />
        )}
      </AnimatePresence>
    </svg>
  );
}

DroneSVG.propTypes = {
  variant: PropTypes.oneOf(["default", "hover", "click"]).isRequired,
};

/* ── main export ────────────────────────────────────────────────────────── */
export default function CursorFollower() {
  if (globalThis.window?.matchMedia("(pointer: coarse)").matches) return null;

  return <CursorInner />;
}

function CursorInner() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const [variant, setVariant] = useState("default");
  const vRef = useRef("default");

  // Tight spring for the drone itself
  const spring = { damping: 22, stiffness: 280, mass: 0.4 };
  const x = useSpring(cursorX, spring);
  const y = useSpring(cursorY, spring);

  // Slower trailing glow
  const gSpring = { damping: 36, stiffness: 100, mass: 1.1 };
  const gx = useSpring(cursorX, gSpring);
  const gy = useSpring(cursorY, gSpring);

  useEffect(() => {
    injectHide();
    return () => removeHide();
  }, []);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const over = (e) => {
      if (!(e.target instanceof Element)) return;
      if (e.target.closest('a, button, [data-cursor="hover"]')) {
        vRef.current = "hover";
        setVariant("hover");
      }
    };

    const out = () => {
      vRef.current = "default";
      setVariant("default");
    };
    const down = () => {
      vRef.current = "click";
      setVariant("click");
    };
    const up = () => {
      const next = vRef.current === "click" ? "default" : vRef.current;
      vRef.current = next;
      setVariant(next);
    };

    globalThis.window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    return () => {
      globalThis.window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
    };
  }, [cursorX, cursorY]);

  const isHover = variant === "hover";
  const isClick = variant === "click";
  let droneScale = 1;
  if (isHover) droneScale = 1.3;
  if (isClick) droneScale = 0.82;

  return (
    <>
      {/* Trailing atmospheric glow */}
      <motion.div
        style={{ x: gx, y: gy }}
        className="pointer-events-none fixed z-[9997] -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          width: isHover ? 80 : 44,
          height: isHover ? 80 : 44,
          opacity: isHover ? 0.14 : 0.07,
          backgroundColor: "#3b82f6",
          filter: "blur(20px)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Drone */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: droneScale,
          opacity: isClick ? 0.75 : 1,
        }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <DroneSVG variant={variant} />
      </motion.div>
    </>
  );
}
