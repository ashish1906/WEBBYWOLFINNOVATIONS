import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { TextAnimateBlur } from "@/components/animation/text-animate-blur";

const testimonials = [
  {
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.6667 32L24 45.3333H40L33.3333 58.6667"
          stroke="#0546D2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M53.3332 46.9525C57.3164 45.3919 61.3332 41.8367 61.3332 34.6663C61.3332 23.9997 52.4444 21.333 47.9998 21.333C47.9998 15.9997 47.9998 5.33301 31.9998 5.33301C15.9998 5.33301 15.9998 15.9997 15.9998 21.333C11.5554 21.333 2.6665 23.9997 2.6665 34.6663C2.6665 41.8367 6.68325 45.3919 10.6665 46.9525"
          stroke="#0546D2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    name: "Jane Cooper",
    image: "https://webbywolf-frontend.vercel.app/images/jane.jpg",
  },
  {
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.36 38.4403L15.1307 32.5656C15.4864 31.8115 16.5139 31.8115 16.8696 32.5656L19.6403 38.4403L25.8364 39.3883C26.6314 39.5099 26.9482 40.5325 26.3727 41.1195L21.89 45.6891L22.9479 52.1448C23.0838 52.9739 22.2523 53.6059 21.541 53.2144L16.0002 50.1648L10.4593 53.2144C9.748 53.6059 8.91651 52.9739 9.05237 52.1448L10.1103 45.6891L5.62763 41.1195C5.05208 40.5325 5.36893 39.5099 6.16392 39.3883L12.36 38.4403Z"
          stroke="#155ADA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44.3599 38.4403L47.1308 32.5656C47.4863 31.8115 48.514 31.8115 48.8695 32.5656L51.6404 38.4403L57.8364 39.3883C58.6313 39.5099 58.9481 40.5325 58.3727 41.1195L53.89 45.6891L54.9479 52.1448C55.0839 52.9739 54.2524 53.6059 53.5409 53.2144L48.0001 50.1648L42.4593 53.2144C41.7479 53.6059 40.9164 52.9739 41.0524 52.1448L42.1103 45.6891L37.6276 41.1195C37.0521 40.5325 37.3689 39.5099 38.1639 39.3883L44.3599 38.4403Z"
          stroke="#155ADA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.3599 14.4404L31.1308 8.56562C31.4863 7.81146 32.514 7.81146 32.8695 8.56562L35.6404 14.4404L41.8364 15.3883C42.6314 15.5099 42.9482 16.5326 42.3727 17.1194L37.89 21.689L38.9479 28.1448C39.0839 28.9739 38.2524 29.6059 37.541 29.2144L32.0002 26.1647L26.4593 29.2144C25.748 29.6059 24.9165 28.9739 25.0524 28.1448L26.1103 21.689L21.6276 17.1194C21.0521 16.5326 21.3689 15.5099 22.1639 15.3883L28.3599 14.4404Z"
          stroke="#155ADA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    name: "Ralph Edwards",
    image: "https://webbywolf-frontend.vercel.app/images/ralph.jpg",
  },
  {
    icon: (
      <svg
        width="50"
        height="56"
        viewBox="0 0 50 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.3333 54.6663H11.6667C8.72115 54.6663 6.33333 52.2786 6.33333 49.333V25.8175C6.33333 25.5015 6.23984 25.1927 6.06461 24.9298L1.26872 17.7361C1.09349 17.4732 1 17.1644 1 16.8486V2.93301C1 2.04935 1.71635 1.33301 2.6 1.33301H7.4C8.28365 1.33301 9 2.04935 9 2.93301V7.73301C9 8.61666 9.71635 9.33301 10.6 9.33301H18.0667C18.9503 9.33301 19.6667 8.61666 19.6667 7.73301V2.93301C19.6667 2.04935 20.3829 1.33301 21.2667 1.33301H28.7333C29.6171 1.33301 30.3333 2.04935 30.3333 2.93301V7.73301C30.3333 8.61666 31.0496 9.33301 31.9333 9.33301H39.4C40.2837 9.33301 41 8.61666 41 7.73301V2.93301C41 2.04935 41.7163 1.33301 42.6 1.33301H47.4C48.2837 1.33301 49 2.04935 49 2.93301V16.8486C49 17.1644 48.9064 17.4732 48.7312 17.7361L43.9355 24.9298C43.7603 25.1927 43.6667 25.5015 43.6667 25.8175V49.333C43.6667 52.2786 41.2789 54.6663 38.3333 54.6663Z"
          stroke="#155ADA"
          strokeWidth="1.5"
        />
      </svg>
    ),
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    name: "Courtney Henry",
    image: "https://webbywolf-frontend.vercel.app/images/courtney.jpg",
  },
  {
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 5.33301H40"
          stroke="#155ADA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 26.667V37.3337"
          stroke="#155ADA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.9998 58.6667C43.782 58.6667 53.3332 49.1155 53.3332 37.3333C53.3332 25.5513 43.782 16 31.9998 16C20.2178 16 10.6665 25.5513 10.6665 37.3333C10.6665 49.1155 20.2178 58.6667 31.9998 58.6667Z"
          stroke="#155ADA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Hendrerit augue ut nunc, quis integer netus. Diam rhoncus magnis habitant. Egestas amet habitasse tellus ornare. Hendrerit augue ut nunc, quis integer netus. Egestas amet habitasse tellus ornare.",
    name: "Cameron Williamson",
    image: "https://webbywolf-frontend.vercel.app/images/cameron.jpg",
  },
  {
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.6667 32L24 45.3333H40L33.3333 58.6667"
          stroke="#0546D2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M53.3332 46.9525C57.3164 45.3919 61.3332 41.8367 61.3332 34.6663C61.3332 23.9997 52.4444 21.333 47.9998 21.333C47.9998 15.9997 47.9998 5.33301 31.9998 5.33301C15.9998 5.33301 15.9998 15.9997 15.9998 21.333C11.5554 21.333 2.6665 23.9997 2.6665 34.6663C2.6665 41.8367 6.68325 45.3919 10.6665 46.9525"
          stroke="#0546D2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Hendrerit augue ut nunc, quis integer netus. Diam rhoncus magnis habitant. Egestas amet habitasse tellus ornare. Hendrerit augue ut nunc, quis integer netus. Egestas amet habitasse tellus ornare.",
    name: "Cameron Williamson",
    image: "https://webbywolf-frontend.vercel.app/images/cameron.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-left text-white flex justify-between flex-col gap-2 md:flex-row">
        <div className="">
          <Typography type="h6" className={"text-white font-[400] mb-4"}>
            Join other Sun harvesters
          </Typography>
          <Typography type="h3" className="mb-4">
            <TextAnimateBlur animation="blurInUp" by="word" duration={1}>
              LOREM IPSUM DOLOR SIT AMET
            </TextAnimateBlur>
          </Typography>
          <Typography className="font-[300] mb-4 text-white max-w-xl">
            Dui euismod iaculis libero, aliquet vitae et elementumorttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </Typography>
        </div>
        <div className="md:px-10">
          <Button variant="outline" className="mb-10 text-text-color px-10">
            Lorem Ipsum
          </Button>
        </div>
      </div>

      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className={"gap-0 p-2"}>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/4 rounded-lg"
            >
              <div className="h-full rounded-2xl shadow-lg bg-white">
                <div className="p-6">
                  <div className="text-2xl mb-4">{testimonial.icon}</div>
                  <Typography className="text-gray-700 text-sm mb-4">
                    {testimonial.text}
                  </Typography>
                  <div className="flex items-center gap-3 mt-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full h-[60px] w-[60px] object-cover"
                      priority
                    />
                    <Typography className="text-black font-medium text-sm">
                      {testimonial.name}
                    </Typography>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="relative w-full h-full py-4">
          <div className="absolute top-1/2 left-2 flex items-center justify-center">
            <CarouselPrevious className="relative left-0 translate-x-0 hover:translate-x-0 bg-transparent" />
          </div>
          <div className="absolute top-1/2 left-14 flex items-center justify-center">
            <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 bg-transparent" />
          </div>
        </div>
      </Carousel>
    </section>
  );
};
export default TestimonialSection;
