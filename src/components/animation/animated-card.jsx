import {
  bottomCardVariants,
  leftCardVariants,
  rightCardVariants,
  topCardVariants,
} from "@/common/animation-variants";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn, generateRandomKey } from "@/lib/utils";

const getVariant = (position) => {
  switch (position) {
    case "left":
      return leftCardVariants;
    case "right":
      return rightCardVariants;
    case "top":
      return topCardVariants;
    case "bottom":
      return bottomCardVariants;
    default:
      return rightCardVariants; // fallback
  }
};

const AnimatedCard = ({
  position = "right",
  index = 0,
  className,
  children,
  delayStep = 0.2,
  once = false,
  ...rest
}) => {
  const selectedPosition = getVariant(position);

  return (
    <AnimatePresence>
      <motion.div
        key={generateRandomKey()}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once, amount: 0.3 }}
        variants={selectedPosition}
        transition={{
          delay: index * delayStep,
        }}
        className={cn("w-full h-full", className)}
        {...rest}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedCard;
