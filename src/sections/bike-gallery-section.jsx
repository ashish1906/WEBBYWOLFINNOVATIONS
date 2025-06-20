import AnimatedCard from "@/components/animation/animated-card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";

const BikeGallerySection = () => {
  return (
    <section className="md:overflow-hidden h-full md:h-[900px] bg-[#F5F8FE] px-6 my-20 md:my-30 py-16 pb-0 md:px-20 flex flex-col lg:flex-row items-start gap-4">
      {/* Left Section */}
      <div className="w-full relative md:pt-40">
        <div className="w-full md:absolute top-0 space-y-6">
          <Typography type="h5" className={"text-primary"}>
            No Limits
          </Typography>

          <Typography type="h2">Lorem Ipsum Dolor Sit Amet</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
            porttitor pharetra tempor quis arcu. Ipsum nullam.
          </Typography>

          <Button>Lorem Ipsum →</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          <div className="h-full w-full col-span-1" />
          <div className="h-full w-full col-span-1" />

          <div className="h-full w-full col-span-1">
            <AnimatedCard once={true} position="top" index={0}>
              <Image
                src="https://webbywolf-frontend.vercel.app/images/gallery-thumb-1.png"
                height={200}
                width={200}
                className="w-full h-full object-cover"
                alt="bike1"
                priority
              />
            </AnimatedCard>
          </div>

          <div className="h-full w-full col-span-1">
            <AnimatedCard once={true} position="top" index={1}>
              <Image
                src="https://webbywolf-frontend.vercel.app/images/gallery-thumb-2.png"
                height={200}
                width={200}
                className="w-full h-full object-cover"
                alt="bike2"
                priority
              />
            </AnimatedCard>
          </div>
          <div className="h-full w-full col-span-2">
            <AnimatedCard once={true} position="bottom" index={2}>
              <Image
                src="https://webbywolf-frontend.vercel.app/images/gallery-thumb-3.png"
                height={200}
                width={200}
                className="w-full h-full object-cover"
                alt="bike3"
                priority
              />
            </AnimatedCard>
          </div>
        </div>
      </div>

      {/* Right Section: Responsive Grid of Individual Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        <div className="h-full w-full col-span-1 md:pt-6">
          <AnimatedCard once={true} position="bottom" index={3}>
            <Image
              src="https://webbywolf-frontend.vercel.app/images/gallery-thumb-4.png"
              height={200}
              width={200}
              className="w-full h-full object-cover"
              alt="bike4"
              priority
            />
          </AnimatedCard>
        </div>
        <div className="h-full w-full col-span-3">
          <AnimatedCard once={true} position="top" index={3}>
            <Image
              src="https://webbywolf-frontend.vercel.app/images/gallery-thumb-5.png"
              height={200}
              width={200}
              className="w-full h-[240px] object-cover"
              alt="bike5"
              priority
            />
          </AnimatedCard>
        </div>
        <div className="h-full w-full col-span-4">
          <AnimatedCard once={true} position="right" index={3}>
            <Image
              src="https://webbywolf-frontend.vercel.app/images/gallery-thumb-6.png"
              height={400}
              width={400}
              className="w-full h-full object-cover"
              alt="bike6"
              priority
            />
          </AnimatedCard>
        </div>
        <div className="h-full w-full col-span-1">
          <AnimatedCard once={true} position="bottom" index={3}>
            <Image
              src="https://webbywolf-frontend.vercel.app/images/gallery-thumb-7.png"
              height={200}
              width={200}
              className="w-full h-full object-cover"
              alt="bike7"
              priority
            />
          </AnimatedCard>
        </div>
        <div className="h-full w-full col-span-3">
          <AnimatedCard once={true} position="left" index={3}>
            <Image
              src="https://webbywolf-frontend.vercel.app/images/gallery-thumb-2.png"
              height={200}
              width={200}
              className="w-full h-full object-cover"
              alt="bike8"
              priority
            />
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default BikeGallerySection;
