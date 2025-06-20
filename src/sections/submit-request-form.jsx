"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { toast } from "sonner";
import { TextAnimateBlur } from "@/components/animation/text-animate-blur";
import { useEffect } from "react";
// import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  timeframe: z.string().min(1, {
    message: "Please select a time frame.",
  }),
  size: z.string().min(1, {
    message: "Please select a size.",
  }),
  quantity: z.string().min(1, {
    message: "Please select a quantity.",
  }),
  projectType: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const SubmitRequestForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      timeframe: "",
      size: "",
      quantity: "",
      projectType: "",
    },
  });

  useEffect(() => {
    if (form?.formState?.errors) {
      let errorsObj = form?.formState?.errors;
      let errorsKeys = Object?.keys(form?.formState?.errors);
      toast?.error(errorsObj[errorsKeys?.[0]]?.message);
      // errorsKeys.forEach((element) => {
      //   toast?.error(form?.formState?.errors[element]?.message);
      // });
    }
  }, [form?.formState?.errors]);

  function onSubmit(values) {
    console.log(values);
    // Handle form submission
    toast.success("Form Submitted Successfully");
    form?.reset();
  }

  return (
    <div className="max-w-5xl mx-auto p-6 py-20">
      <Typography
        type="h3"
        className={"text-center text-[#22222] my-10 md:my-15 lg:my-20"}
      >
        <TextAnimateBlur animation="slideUp" by="word" duration={1}>
          REQUEST A QUOTE
        </TextAnimateBlur>
      </Typography>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" space-y-1 md:space-y-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 py-2 md:py-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className={"gap-0 md:gap-2 gap-4"}>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className={"gap-0 md:gap-2 gap-4"}>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="E-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 py-2 md:py-3">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className={"gap-0 md:gap-2 gap-4"}>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeframe"
              render={({ field }) => (
                <FormItem className={"gap-0 md:gap-2 gap-4"}>
                  <FormLabel className={"gap-0"}>
                    {" "}
                    <>
                      Time Frame
                      <span className="text-destructive p-0 m-0">*</span>
                    </>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                    onBlur={field.onBlur}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose Time Frame" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                      <SelectItem value="standard">
                        Standard (3-4 weeks)
                      </SelectItem>
                      <SelectItem value="flexible">
                        Flexible (5+ weeks)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 py-2 md:py-3">
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem className={"gap-0 md:gap-2 gap-4"}>
                  <FormLabel className={"gap-0"}>
                    <>
                      Size<span className="text-destructive p-0 m-0">*</span>
                    </>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                    onBlur={field.onBlur}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose Size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className={"gap-0 md:gap-2 gap-4"}>
                  <FormLabel className={"gap-0"}>
                    <>
                      Quantity
                      <span className="text-destructive p-0 m-0">*</span>
                    </>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                    onBlur={field.onBlur}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose Quantity" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2-5">2-5</SelectItem>
                      <SelectItem value="5-10">5-10</SelectItem>
                      <SelectItem value="10+">10+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem className={"gap-0 md:gap-2 gap-4"}>
                <FormLabel className={"gap-0"}>
                  <>
                    Please Describe Your Project
                    <span className="text-destructive p-0 m-0">*</span>
                  </>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about your project"
                    className="resize-none h-40"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Typography className={"text-center my-5 sm:my-15"}>
            By submitting this form you agree to our
            <span className="text-link px-2 underline cursor-pointer">
              Terms of Service
            </span>
            and
            <span className="text-link px-2 underline cursor-pointer">
              Privacy Policy.
            </span>
          </Typography>

          <div className="flex justify-center items-center pt-4">
            <Button type="submit">Lectrum Ipsum →</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SubmitRequestForm;
