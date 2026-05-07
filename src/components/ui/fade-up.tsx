import { motion } from "motion/react";
import { ReactNode } from "react";

const easeFluid: any = [0.22, 1, 0.36, 1];
const durationFluid = 1.0;

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: durationFluid, ease: easeFluid } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export function FadeUp({ children, className, delay = 0, stagger = false }: { children: ReactNode, className?: string, delay?: number, stagger?: boolean }) {
  if (stagger) {
    return (
      <motion.div
        className={className}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: durationFluid, ease: easeFluid, delay } }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}

export function FadeUpItem({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div className={className} variants={fadeUpVariant}>
      {children}
    </motion.div>
  );
}
