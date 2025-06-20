import { cn } from "@/lib/utils";
import React from "react";

const GraphicBackgroundWrapper = ({ className, children, bgClassName }) => {
  return (
    <div className={cn("relative min-h-screen", className)}>
      <div
        className={cn(
          "absolute inset-0 bg-[url('/images/bg-graphic.png')] bg-cover bg-[position:30%_24%] bg-no-repeat scale-x-[-1] z-0",
          bgClassName
        )}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GraphicBackgroundWrapper;
