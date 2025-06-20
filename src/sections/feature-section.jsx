import React from "react";
import { AnimatePresence } from "motion/react";
import Gradient from "@/components/ui/gradient";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import AnimatedCard from "@/components/animation/animated-card";
import AnimatedListItem from "@/components/animation/animated-list-item";
import { TextAnimateBlur } from "@/components/animation/text-animate-blur";

const features = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    alt: "FeatureSection-1",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    alt: "FeatureSection-2",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    alt: "FeatureSection-3",
  },
];

const FeatureSection = () => {
  return (
    // <AnimatedCard position="right">
    <div className="my-6 sm:my-20 lg:my-30">
      <section className="bg-white shadow-custom ml-0 md:ml-20 space-y-4">
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
              <div className="space-y-10 my-4 ">
                {features.map((item, idx) => (
                  <AnimatePresence key={idx + item.text}>
                    <AnimatedListItem position="right" index={idx}>
                      <div key={idx} className="flex gap-4 items-center">
                        <Image
                          src={
                            "https://webbywolf-frontend.vercel.app/images/icon.png"
                          }
                          alt={item.alt || "feature Image"}
                          width={36}
                          height={36}
                          className="object-cover"
                          priority
                        />
                        <div>
                          <Typography className="font-[600]">
                            {item.title}
                          </Typography>
                          <Typography className={"font-[400]"}>
                            {item.description}
                          </Typography>
                        </div>
                      </div>
                    </AnimatedListItem>
                  </AnimatePresence>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <AnimatedListItem
            position="right"
            index={2}
            className="flex flex-col md:flex-row gap-4 items-start md:items-center"
          >
            <div className="w-full h-full">
              <Image
                src={"https://webbywolf-frontend.vercel.app/images/person.png"}
                alt="Motorbike-2"
                className="w-full h-full object-contain"
                width={"500"}
                height={"500"}
                priority
              />
            </div>
          </AnimatedListItem>
        </div>

        {/* Gradient Footer Line */}
        <div className="w-full mt-8 flex justify-end">
          <Gradient className="w-full md:w-[94%]" />
        </div>
      </section>
    </div>
    // </AnimatedCard>
  );
};

export default FeatureSection;
