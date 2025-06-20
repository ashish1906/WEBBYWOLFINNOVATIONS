import AnimatedCard from "@/components/animation/animated-card";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";

const blogPosts = [
  {
    id: 1,
    image: "https://webbywolf-frontend.vercel.app/images/city.png",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    link: "#",
  },
  {
    id: 2,
    image: "https://webbywolf-frontend.vercel.app/images/monk.png",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    link: "#",
  },
  {
    id: 3,
    image: "https://webbywolf-frontend.vercel.app/images/girl.png",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    link: "#",
  },
  {
    id: 4,
    image: "https://webbywolf-frontend.vercel.app/images/orange.png",
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-15 lg:px-20 py-6 sm:py-10 md:py-15 lg:py-20 container">
      <div className="space-y-4 my-4">
        <Typography type="h5" className={"text-primary"}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography type="h2">LOREM IPSUM DOLOR SIT</Typography>

        <Typography className="text-gray-900 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sodales facilisis
          donec dui. Mi porttitor ut id diam in mattis maecenas eget integer in
          nam. Non nisl faucibus et felis aliquet. Hendrerit felis ut purus
          lectus.
        </Typography>
      </div>

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 px-0 sm:px-5 md:px-10 lg:px-20 py-5 sm:py-5 md:py-10 lg:py-15">
        {blogPosts.map((post, idx) => {
          return (
            <AnimatedCard
              position={idx % 2 === 0 ? "left" : "right"}
              index={idx}
            >
              <div
                key={post.id}
                className={`bg-white border rounded-lg transition-all duration-300`}
              >
                <Image
                  height={200}
                  width={200}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[205px] object-cover rounded-md mb-4"
                  priority
                />
                <div className="p-4 pb-20">
                  <Typography className="text-lg font-semibold mb-2">
                    {post.title}
                  </Typography>
                  <Typography className="text-sm text-gray-600 mb-3">
                    {post.description}
                  </Typography>

                  <a
                    href={post.link}
                    className="text-sm text-link font-medium hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </AnimatedCard>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;
