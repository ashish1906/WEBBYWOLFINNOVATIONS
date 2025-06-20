import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

// Add Inter font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Add Roboto Condensed font
const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "webbywolf",
  description: "App Create By Adil Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoCondensed.variable} font-inter antialiased`}
      >
        <Header />
        {children}
        <Toaster position="top-center" richColors={true} />
        <Footer />
      </body>
    </html>
  );
}
