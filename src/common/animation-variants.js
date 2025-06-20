export const cardVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -80 },
};

export const leftListItemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 40 },
};

export const rightListItemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export const rightCardVariants = {
  hidden: { opacity: 0, x: 200, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  },
  exit: { opacity: 0, x: -200, scale: 0.95 },
};

export const leftCardVariants = {
  hidden: { opacity: 0, x: -200, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  },
  exit: { opacity: 0, x: 200, scale: 0.95 },
};

export const topCardVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const bottomCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
    },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

