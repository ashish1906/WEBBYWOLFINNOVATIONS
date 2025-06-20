import { Typography } from "@/components/ui/typography";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedCard from "@/components/animation/animated-card";
import { TextAnimateBlur } from "@/components/animation/text-animate-blur";

const FeatureToggleSection = () => {
  const [value, setValue] = useState("research");
  return (
    <AnimatedCard position="top">
      <div className="py-10 md:py-40 bg-white space-y-4">
        <section className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left  */}
            <div className="flex flex-col justify-between items-start pb-20 pt-8 md:pb-40 md:pt-12 px-8 md:px-12 space-y-8">
              <Typography type="h2">Lorem ipsum dolor sit amet </Typography>
              <ToggleGroup
                type="single"
                value={value}
                variant={"outline"}
                onValueChange={(val) => {
                  console.log("🚀 ~ FeatureToggleSection ~ val:", val);
                  setValue(val);
                }}
                className={"border border-[#CBD5E1]"}
              >
                <ToggleGroupItem
                  className={"px-6 md:px-10 border-r border-r-[#CBD5E1]"}
                  value="research"
                >
                  Research
                </ToggleGroupItem>
                <ToggleGroupItem
                  className={"px-6 md:px-10 border-r border-r-[#CBD5E1]"}
                  value="plan"
                >
                  Plan
                </ToggleGroupItem>
                <ToggleGroupItem className={"px-6 md:px-10"} value="design">
                  Design
                </ToggleGroupItem>
              </ToggleGroup>
              <div>
                <Typography>
                  <TextAnimateBlur animation="blurInUp" by="word" duration={1}>
                    Egestas fringilla aliquam leo, habitasse arcu varius lorem
                    elit. Neque pellentesque donec et tellus ac varius tortor,
                    bibendum. Nulla felis ac turpis at amet. Purus malesuada
                    placerat arcu at enim elit in accumsan.
                  </TextAnimateBlur>
                </Typography>
              </div>
              <Button
                variant="outline"
                className={"text-primary border-none w-auto"}
              >
                Check Tools <ArrowRight />
              </Button>
            </div>
            {/* Right Content */}
            <div className="w-full h-full p-0 md:p-10">
              <AnimatedCard position="bottom">
                <Image
                  src={
                    "https://webbywolf-frontend.vercel.app/images/hand-shake.png"
                  }
                  alt="hand-shake"
                  className="w-full h-[400px] object-cover"
                  width={500}
                  height={500}
                  priority
                />
              </AnimatedCard>
            </div>
          </div>
        </section>
      </div>
    </AnimatedCard>
  );
};

export default FeatureToggleSection;
