import { motion, useReducedMotion, type TargetAndTransition, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "up" | "left" | "right" | "zoom";

/** En pantallas angostas el desplazamiento lateral se reduce para no rebasar el margen de la página. */
function hiddenBy(variant: Variant): TargetAndTransition {
  const dx = typeof window !== "undefined" && window.innerWidth < 640 ? 14 : 56;
  switch (variant) {
    case "left":
      return { opacity: 0, x: -dx, filter: "blur(6px)" };
    case "right":
      return { opacity: 0, x: dx, filter: "blur(6px)" };
    case "zoom":
      return { opacity: 0, scale: 0.9, filter: "blur(6px)" };
    default:
      return { opacity: 0, y: 40, filter: "blur(6px)" };
  }
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: hiddenBy(variant),
    visible: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
