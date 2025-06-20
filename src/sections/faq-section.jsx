"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { TextAnimateBlur } from "@/components/animation/text-animate-blur";
import AnimatedListItem from "@/components/animation/animated-list-item";

export const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
];

const FAQSection = () => {
  const [value, setValue] = useState(`question-1`);
  return (
    <div className="flex items-center justify-center p-6 md:p-20">
      <div className="w-full">
        <Typography type="h2" className={"my-10"}>
          <TextAnimateBlur animation="blurInUp" by="line" duration={1}>
            FREQUENTLY ASKED QUESTIONS (FAQs)
          </TextAnimateBlur>
        </Typography>
        <div className="mt-6 w-full grid md:grid-cols-1 gap-x-10">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={value}
            onValueChange={setValue}
          >
            {faqs?.map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index}`}>
                <AccordionPrimitive.Header className="flex">
                  <AnimatedListItem
                    index={index}
                    transitionDuration={0.6}
                    delayStep={0.6}
                  >
                    <AccordionPrimitive.Trigger
                      className={cn(
                        "flex flex-1 items-center justify-between py-6 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                        "text-start text-md hover:cursor-pointer"
                      )}
                    >
                      <Typography className={"font-semibold"}>
                        {question}
                      </Typography>
                      <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                    </AccordionPrimitive.Trigger>
                  </AnimatedListItem>
                </AccordionPrimitive.Header>
                <AccordionContent className="py-3">
                  <Typography className={"max-w-4xl"}>{answer}</Typography>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
