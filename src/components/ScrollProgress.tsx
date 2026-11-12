import { motion, useScroll, useSpring } from "framer-motion";

/** Barra de progreso de lectura en el borde superior. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.2 });
  return <motion.div aria-hidden="true" style={{ scaleX }} className="fixed inset-x-0 top-0 z-[130] h-[3px] origin-left bg-gradient-to-r from-red via-gold to-gold-soft" />;
}
