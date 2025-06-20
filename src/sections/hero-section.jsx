import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TextAnimateBlur } from "@/components/animation/text-animate-blur";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const HeroSection = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    if (form?.formState?.errors?.email?.message) {
      toast?.error(form?.formState?.errors?.email?.message);
    }
  }, [form?.formState?.errors]);

  function onSubmit(values) {
    form?.clearErrors();
    form?.reset();
    toast.success("Form Submitted Successfully");
  }
  return (
    <div className="relative  min-h-[70vh] [sm:min-h-screen flex">
      {/* Left: Content */}
      <div className="w-full sm:w-1/2 relative flex flex-col gap-4 justify-center px-6 py-24 md:py-8 sm:px-12 z-10">
        <Typography className={"w-full md:w-[60%]"} type="h1">
          <TextAnimateBlur animation="blurInUp" by="word" duration={1}>
            Lorem ipsum dolor sit amet
          </TextAnimateBlur>
        </Typography>
        <Typography>
          <TextAnimateBlur animation="blurInDown" by="word" duration={1}>
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
            elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
            morbi libero imperdiet neque. Justo suspendisse tristique posuere
            quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
          </TextAnimateBlur>
        </Typography>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-1 md:space-y-2 flex items-starts gap-2 max-w-md"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className={"w-full"}>
                  <FormControl>
                    <Input
                      className={"!w-full !bg-white border"}
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className={"h-11"}>
              Submit
              <ArrowRight />
            </Button>
          </form>
        </Form>

        <div className="mt-4 flex items-center gap-2 font-[400] text-[16px]">
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="29" rx="14.5" fill="#155ADA" />
            <path d="M9 13.5L14 18.5L21 10.5" stroke="white" strokeWidth="2" />
          </svg>

          <span>No credit card required!</span>
        </div>
      </div>

      {/* Right: Diagonal Image */}
      <div
        className="hidden sm:block sm:w-1/2 relative overflow-hidden border-none"
        style={{
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <Image
          src={`/images/hero-bg.png`}
          alt="hero-image"
          className="w-full h-full object-cover"
          width={"500"}
          height={"500"}
          priority
        />
        <div className="absolute bottom-0 left-0 w-full h-10 bg-[linear-gradient(180deg,rgba(255,255,255,0)_5.84%,#ffffff_30.19%)] pointer-events-none" />
      </div>
    </div>
  );
};

export default HeroSection;
