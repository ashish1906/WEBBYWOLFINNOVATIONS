import React from "react";

import { Button } from "@/components/ui/button";
import Gradient from "@/components/ui/gradient";
import { Typography } from "@/components/ui/typography";
import { Phone } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import AnimatedListItem from "@/components/animation/animated-list-item";
import AnimatedCard from "@/components/animation/animated-card";
import { TextAnimateBlur } from "@/components/animation/text-animate-blur";

const features = [
  {
    Image: "https://webbywolf-frontend.vercel.app/images/thumb-1.png",
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
    alt: "BikeFeatureSection-1",
  },
  {
    Image: "https://webbywolf-frontend.vercel.app/images/thumb-2.png",
    text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
    alt: "BikeFeatureSection-2",
  },
  {
    Image: "https://webbywolf-frontend.vercel.app/images/thumb-3.png",
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
    alt: "BikeFeatureSection-3",
  },
];

const BikeFeatureSection = () => {
  return (
    // <AnimatedCard position="left">
    <div
      className="my-5 sm:20 lg:my-30 p-0 md:ml-22 bg-white border"
      style={{ boxShadow: "0px 4px 25px 0px #00000026" }}
    >
      <section className="bg-white shadow-custom md:mx-10 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Content */}
          <div className="flex flex-col justify-between p-6 md:p-8">
            <div className="space-y-4">
              <Typography type="h5" className={"text-primary"}>
                Lorem ipsum dolor sit
              </Typography>
              <Typography type="h1">
                <TextAnimateBlur animation="blurInUp" by="word" duration={1}>
                  Lorem ipsum dolor sit amet
                </TextAnimateBlur>
              </Typography>
              <Typography type="label">
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
                facilisis donec dui. Mi porttitor ut aliquam mattis maecenas
                eget integer in nam. Non nisl iaculis at felis aliquet.
                Hendrerit tellus at purus lectus.
              </Typography>

              {/* Features List */}
              <div className="space-y-4 my-4">
                {features.map((item, idx) => (
                  <AnimatePresence key={idx + item.text}>
                    <AnimatedListItem
                      position="left"
                      index={idx}
                      className="flex flex-col md:flex-row gap-4 items-start md:items-center"
                    >
                      <Image
                        src={item.Image}
                        alt={item.alt || "feature Image"}
                        width={146}
                        height={146}
                        className="object-cover"
                        priority
                      />
                      <Typography type="label">{item.text}</Typography>
                    </AnimatedListItem>
                  </AnimatePresence>
                ))}
              </div>
            </div>

            {/* Bottom CTA
              <div className="flex items-center gap-6 mt-6">
                <Button>Lorem Ipsum</Button>
                <Button
                  variant={"outline"}
                  className={"text-primary border-none"}
                >
                  <Phone /> 123456789
                </Button>
              </div> */}
          </div>

          {/* Right Image */}
          <AnimatedListItem
            position="right"
            index={2}
            className="flex flex-col md:flex-row gap-4 items-start md:items-center"
          >
            <div className="w-full h-full md:pr-4">
              <Image
                src={`https://webbywolf-frontend.vercel.app/images/bike.png`}
                alt="Motorbike-rights"
                className="w-full h-full object-cover"
                width={"500"}
                height={"500"}
                priority
              />
            </div>
          </AnimatedListItem>
        </div>
        {/* Bottom CTA */}
        <div className="flex items-center gap-6 mt-6 p-6">
          <Button>Lorem Ipsum</Button>
          <Button variant={"outline"} className={"text-primary border-none"}>
            <Phone /> 123456789
          </Button>
        </div>
        {/* Gradient Footer Line */}
      </section>
      <div className="w-full md:w-[96%] mt-8">
        <Gradient />
      </div>
    </div>
    // </AnimatedCard>
  );
};

export default BikeFeatureSection;
