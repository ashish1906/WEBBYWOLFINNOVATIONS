import { cn } from "@/lib/utils";
import React from "react";

const Gradient = ({ className = "" }) => {
  return (
    <div
      className={cn(
        "h-[20px] w-full bg-linear-[90deg,#043898,#079902,#170041]",
        className
      )}
    />
  );
};

export default Gradient;
