import { cn } from "@/lib/utils";

const textVariants = {
  default: "text-sm font-medium text-text-color",
  p: "text-sm font-medium text-text-color",
  text: "text-sm font-medium text-text-color",
  h1: "text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl font-roboto-condensed",
  h2: "text-3xl font-bold leading-none tracking-tight md:text-4xl lg:text-5xl font-roboto-condensed",
  h3: "text-2xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl font-roboto-condensed",
  h4: "text-xl font-semibold leading-none tracking-tight md:text-2xl lg:text-3xl font-roboto-condensed",
  h5: "text-lg font-semibold leading-none tracking-tight md:text-xl lg:text-2xl font-roboto-condensed",
  h6: "text-md font-semibold tracking-none md:text-lg lg:text-xl text-primary font-roboto-condensed",
  span: "text-sm",
  blockquote: "border-l-4 border-gray-300 pl-4 italic text-text-color",
  code: "font-mono text-sm bg-gray-100 px-1 rounded text-text-color",
  caption: "text-xs text-text-color",
  label: "text-sm font-medium text-text-color",
  button: "text-sm font-medium uppercase tracking-tight",
};

const variantToTag = {
  default: "p",
  p: "p",
  text: "p",
  subtitle: "subtitle",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  span: "span",
  blockquote: "blockquote",
  code: "code",
  caption: "figcaption",
  label: "label",
  button: "button",
};

const Typography = ({ type = "p", children, className }) => {
  const Component = variantToTag[type] || "p";

  return (
    <Component
      className={cn(textVariants[type] || textVariants.default, className)}
    >
      {children}
    </Component>
  );
};

export { Typography, textVariants };
