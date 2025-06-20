"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowUpFromDotIcon, ChevronDownIcon, Menu, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Typography } from "./ui/typography";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const navLinks = [
  {
    label: "Features",
    href: "/features",
    items: [
      { label: "Feature", href: "/features" },
      { label: "Feature", href: "/features" },
    ],
  },
  {
    label: "Testimonials",
    href: "/testimonials",
    items: [
      { label: "Testimonials", href: "/testimonials" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
    items: [],
  },
  // {
  //   label: "Contact",
  //   href: "/contact",
  //   items: [{ label: "Features", href: "/features" }],
  // },
];
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        // className="fixed top-0 inset-x-0 z-50 w-full md:w-full bg-white md:bg-transparent border-b md:border-none shadow-lg md:shadow-none"
        className={clsx(
          "fixed top-0 inset-x-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white shadow-xl rounded-full md:rounded-full fixed top-2 md:top-6 !w-[90%] mx-auto "
            : "bg-transparent md:bg-transparent border-none shadow-none"
        )}
      >
        <div className="container flex h-16 items-center justify-between p-2 md:p-4 lgp-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 p-2">
            <span className="text-xl font-bold">Ashish</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-link">
            {navLinks.map((link) =>
              Array.isArray(link?.items) && link?.items.length > 0 ? (
                // <div
                //   key={link.href}
                //   className="flex items-center gap-2 hover:underline"
                // >
                //   <Typography type="p" className={"text-link"}>
                //     {link.label}
                //   </Typography>
                //   <ChevronDownIcon className="size-4" />
                // </div>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <Typography type="p" className={"text-link"}>
                          {link.label}
                        </Typography>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {Array.isArray(link?.items) &&
                          link?.items?.map((subItem) => {
                            return (
                              <NavigationMenuLink>
                                {subItem?.label}
                              </NavigationMenuLink>
                            );
                          })}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <Typography type="p" className={"text-link"}>
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </Typography>
              )
            )}
          </nav>

          {/* Auth & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className={"border-none"}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-4 mt-4 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium hover:underline underline-offset-4 border-l p-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Button className="w-full">Get Started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      {scrolled && (
        <div className="fixed right-[10px] bottom-[10px] md:right-[30px] md:bottom-[30px] z-50 transition-all duration-300">
          <Button
            className={
              "border rounded-full transition-all duration-300 h-10 w-10 shadow-[0px_4px_40px_0px_#fff]"
            }
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <ArrowUpFromDotIcon />
          </Button>
        </div>
      )}
    </>
  );
}
