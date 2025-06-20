import AnimatedCard from "@/components/animation/animated-card";
import { Button } from "@/components/ui/button";
import Gradient from "@/components/ui/gradient";
import { Typography } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Lorem ipsum",
  },
  {
    title: "Lorem ipsum",
  },
  {
    title: "Lorem ipsum",
  },
  {
    title: "Lorem ipsum",
  },
  {
    title: "Lorem ipsum",
  },
  {
    title: "Lorem ipsum",
  },
];
const TwoBikersSection = () => {
  return (
    <AnimatedCard position="bottom">
      <div className="py-10 md:py-40 bg-white shadow-custom space-y-4 ">
        <section className="bg-[#F8F8F8] mr-0 md:mr-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Image */}
            <div className="w-full h-full relative">
              <AnimatedCard index={2}>
                <Image
                  src={
                    "https://webbywolf-frontend.vercel.app/images/two-bikers.png"
                  }
                  alt="bikers"
                  className="w-full h-full object-cover md:h-[500px] md:absolute md:-top-15 md:right-0"
                  width={500}
                  height={500}
                  priority
                />
              </AnimatedCard>
            </div>
            {/* Right Content */}
            <div className="flex flex-col justify-between p-6 md:p-8">
              <div className="space-y-4">
                <Typography type="h5" className={"text-primary"}>
                  Lorem ipsum dolor sit
                </Typography>
                <Typography type="h2">
                  <span className="text-primary pr-3">Lorem ipsum</span>
                  dolor sit amet consectetur. Enim donec.
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
                  facilisis donec dui. Mi porttitor ut aliquam mattis maecenas
                  eget integer in nam. Non nisl iaculis at felis aliquet.
                  Hendrerit tellus at purus lectus.
                </Typography>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 my-4 ">
                  {features.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center">
                      <div>
                        <Typography className="font-[700]">
                          {item.title}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className={"my-4"}>
                  Lorem Ipsum <ArrowRight />
                </Button>
              </div>
            </div>
          </div>

          {/* Gradient Footer Line */}
          <div className="w-full mt-8 flex justify-start">
            <Gradient className="w-full md:w-[94%]" />
          </div>
        </section>
      </div>
    </AnimatedCard>
  );
};

export default TwoBikersSection;
