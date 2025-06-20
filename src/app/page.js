"use client";

import AnimatedCard from "@/components/animation/animated-card";
import BackgroundCard from "@/components/ui/background-card";
import { Card } from "@/components/ui/card";
import GraphicBackgroundWrapper from "@/components/ui/graphic-background-wrapper";
import { Typography } from "@/components/ui/typography";
import BikeFeatureSection from "@/sections/bike-feature-section";
import BikeGallerySection from "@/sections/bike-gallery-section";
import BlogSection from "@/sections/blog-section";
import DownloadAppSection from "@/sections/download-app-section";
import FAQSection from "@/sections/faq-section";
import FeatureSection from "@/sections/feature-section";
import FeatureToggleSection from "@/sections/feature-toggle-section";
import HeroCarousel from "@/sections/hero-carousel";
import HeroSection from "@/sections/hero-section";
import Customers from "@/sections/our-customers";
import SubmitRequestForm from "@/sections/submit-request-form";
import TestimonialSection from "@/sections/testimonials-section";
import TwoBikersSection from "@/sections/two-bikers-section";
import TwoPersonSection from "@/sections/two-person";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      <GraphicBackgroundWrapper bgClassName={"bg-[position:70%_24%]"}>

        <BikeFeatureSection />

        <FeatureSection />

      </GraphicBackgroundWrapper>

      <AnimatedCard position="top">

        <BackgroundCard
          imageSrc={"bike-background.png"}
          heading="Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi."
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.",
            "Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.",
          ]}
        />

      </AnimatedCard>

      <Customers />

      <GraphicBackgroundWrapper bgClassName={"bg-center scale-x-[1]"}>
        
        <BlogSection />

      </GraphicBackgroundWrapper>

      <AnimatedCard position="right">
        <BackgroundCard
          imageSrc={"music-background.png"}
          heading="dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing"
        />
      </AnimatedCard>

      <SubmitRequestForm />

      <GraphicBackgroundWrapper bgClassName={"bg-center scale-x-[1]"}>
        
        <DownloadAppSection />

        <BikeGallerySection />

        <TwoBikersSection />

      </GraphicBackgroundWrapper>

      <TestimonialSection />

      <FeatureToggleSection />

      <TwoPersonSection />

      <HeroCarousel />

      <FAQSection />
    </div>
  );
}
