"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils"; // optional helper for conditional styling
import AnimatedCard from "@/components/animation/animated-card";
import { TextAnimateBlur } from "@/components/animation/text-animate-blur";

const slides = [
  {
    image:
      "https://webbywolf-frontend.vercel.app/images/hero-carousel-thumb-1.png",
    title: "Artist & Investor",
    description:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
  },
  {
    image:
      "https://webbywolf-frontend.vercel.app/images/hero-carousel-thumb-1.png",
    title: "Traveler & Adventurer",
    description:
      "Vitae lectus nec, rhoncus massa blandit. Tempus malesuada ac porta adipiscing amet, in habitant quam. Integer justo nulla blandit amet facilisis.",
  },
  {
    image:
      "https://webbywolf-frontend.vercel.app/images/hero-carousel-thumb-1.jpg",
    title: "Visionary Explorer",
    description:
      "Orci pulvinar suscipit sit vestibulum lectus. Mi viverra id sit at adipiscing. Euismod lorem pellentesque commodo justo, vel nullam vitae eget.",
  },
];
const HeroCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full px-6 py-6 md:px-12 md:py-12">
      <div className="max-w-6xl mx-auto space-y-4 py-10">
        <Typography type="h2" className="text-gray-900 text-center">
          <TextAnimateBlur animation="blurInUp" by="word" duration={1}>
            LOREM IPSUM DOLOR SIT AMET
          </TextAnimateBlur>
        </Typography>
        <Typography className="text-base text-center font-[400]">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
          Ormare faucibus quis velit fringilla aliquam ultricies. Malesuada at
          aliquam at ac est nisi, interdum etiam dignissim.
        </Typography>
      </div>

      <Carousel
        opts={{ loop: true }}
        className="relative w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1200}
                  height={500}
                  className="w-full md:w-[60%] h-[400px] object-cover"
                  priority
                />

                <div className="bg-white relative md:absolute md:top-4 md:top-20 right-1/2 md:right-8 translate-x-1/2 md:translate-x-0 w-full md:w-[46%] shadow-xl">
                  <div className="p-6 text-left w-full">
                    <p className="text-md font-semibold text-gray-700">
                      {slide.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {slide.description}
                    </p>
                    <Button variant="link" className="text-blue-600 px-0 mt-2">
                      Read Full Story →
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Dot indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full bg-gray-300 cursor-pointer",
                current === index && "bg-blue-600 w-8 transition-all duration-200"
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
