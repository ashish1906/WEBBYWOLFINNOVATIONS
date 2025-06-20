"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

export default function Footer() {
  return (
    <footer className={cn("bg-[#171E2B] w-full border-t py-12 md:py-20")}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Typography type="h3" className="font-medium text-white">
                Logo
              </Typography>
            </div>

            <Typography className="text-sm text-white">
             Lorem ipsum dolor sit amet consectetur
            </Typography>
            <div className="flex gap-4">
              {[
                { name: "Twitter", href: "#", icon: <Twitter /> },
                { name: "Facebook", href: "#", icon: <Facebook /> },
                { name: "Instagram", href: "#", icon: <Instagram /> },
                { name: "Linkedin", href: "#", icon: <Linkedin /> },
              ].map((socialMedia, i) => (
                <Link
                  target="_blank"
                  key={i}
                  href={socialMedia?.href}
                  className="text-white"
                >
                  {socialMedia?.icon}
                  <span className="sr-only">{socialMedia.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <FooterColumn
            title="Product"
            columnsData={[
              { name: "Features", href: "#" },
              { name: "Pricing", href: "#" },
              { name: "Integrations", href: "#" },
              { name: "Changelog", href: "#" },
            ]}
          />
          <FooterColumn
            title="Resources"
            columnsData={[
              { name: "Documentation", href: "#" },
              { name: "Guides", href: "#" },
              { name: "Support", href: "#" },
              { name: "API", href: "#" },
            ]}
          />
          <FooterColumn
            title="Company"
            columnsData={[
              { name: "About", href: "#" },
              { name: "Blog", href: "#" },
              { name: "Careers", href: "#" },
              { name: "Contact", href: "#" },
            ]}
          />
        </div>

       
      </div>
    </footer>
  );
}

function FooterColumn({ title, columnsData }) {
  return (
    <div className="space-y-4">
      <Typography type="h6" className="text-sm font-medium text-white">
        {title}
      </Typography>
      <ul className="space-y-4 text-sm">
        {columnsData.map((item, i) => (
          <li key={i}>
            <Link
              href={item.href}
              className="text-[#ffff]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
