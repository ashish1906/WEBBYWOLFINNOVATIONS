import { TextAnimateBlur } from "@/components/animation/text-animate-blur";
import { Button } from "@/components/ui/button";
import Gradient from "@/components/ui/gradient";
import { Typography } from "@/components/ui/typography";
import { ArrowRight, PinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const TwoPersonSection = () => {
  return (
    <div className="py-10 md:py-40 bg-white shadow-custom space-y-4">
      <section className="bg-[#F8F8F8]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left  */}
          <div className="flex flex-col justify-between pb-20 pt-8 md:pb-40 md:pt-12 px-6 md:px-12 relative">
            <div className="space-y-6">
              <Typography type="h2" className={"text-primary"}>
                <TextAnimateBlur animation="blurInUp" by="word" duration={1}>
                  Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
                </TextAnimateBlur>
              </Typography>
              <Typography className={"font-[400]"}>
                Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi
                blandit laoreet urna sapien quam pulvinar. Dolor aliquet est
                tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis
                porta nisl felis. Massa in facilisis semper libero eget eu
                quisque bibendum platea. Tortor fames.
              </Typography>

              <Button className={"my-4"}>
                Lorem Ipsum <ArrowRight />
              </Button>
            </div>
            <div className="md:absolute md:-bottom-40 md:left-12 bg-white py-4 px-6 md:py-6 md:px-10 shadow-md w-full md:w-auto md:max-w-[80%]">
              <div className="flex justify-between items-center py-4">
                <Typography className={"font-[700]"}>
                  Lorem ipsum dolor sit
                </Typography>
                <PinIcon className="text-red-500" />
              </div>

              <div className="space-y-6">
                <Typography>
                  Lorem ipsum dolor sit amet consectetur. Habitant vestibulum
                  vitae amet habitasse semper.
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur. Egestas congue mattis
                  ut placerat vitae amet suspendisse fermentum velit. Nibh dolor
                  nunc id tristique sit.
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur. Hac netus consectetur
                  amet quisque scelerisque facilisi. Ultrices lectus viverra
                  pharetra commodo.
                </Typography>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="w-full h-full relative">
            <Image
              src={
                "https://webbywolf-frontend.vercel.app/images/two-person.png"
              }
              alt="2-person"
              className="w-[550px] h-full object-cover md:h-full md:absolute md:-top-15 md:right-2"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>

        {/* Gradient Footer Line */}
        <div className="w-full mt-8 flex justify-start">
          <Gradient className="w-full md:w-[94%]" />
        </div>
      </section>
    </div>
  );
};

export default TwoPersonSection;
