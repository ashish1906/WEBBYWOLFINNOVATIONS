import AnimatedCard from "@/components/animation/animated-card";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

const brands = [
  { image: "hero.png", name: "HERO", category: "Hero" },
  { image: "honda.png", name: "HONDA", category: null },
  { image: "bajaj.png", name: "BAJAJ", category: null },
  { image: "tvs.png", name: "TVS", category: null },
  { image: "royal-enfield.png", name: "ROYAL ENFIELD", category: "Hero" },
  { image: "yamaha.png", name: "YAMAHA", category: null },
  { image: "ktm.png", name: "KTM", category: null },
  { image: "ather.jpg", name: "ATHER", category: "NOTORS" },
  { image: "ola-electric.png", name: "OLA ELECTRIC", category: "Hero" },
  { image: "revolt.png", name: "REVOLT", category: null },
  { image: "ultraviolette.jpg", name: "KLA4", category: null },
  { image: "tork.jpg", name: "TORK", category: "NOTORS" },
];
const Customers = () => {
  return (
    <div className="min-h-screen py-4 px-6 sm:px-6 lg:px-8">
      <Card className="mx-auto max-w-4xl bg-white p-8 sm:p-12 border-0 shadow-none">
        <div className="space-y-10">
          {/* Header */}
          <div className="text-center space-y-2">
            <Typography type="h2" className="uppercase">
              Lorem ipsum dolor sit amet consectetur. Commodo leo amet.
            </Typography>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-6 grid-items-center">
            {brands.map((brand, index) => (
              <div key={index} className="group relative">
                <AnimatedCard
                  index={index}
                  position={index % 2 === 0 ? "bottom" : "top"}
                >
                  <Image
                    src={`/images/${brand?.image}`}
                    width={130}
                    height={130}
                    className="object-contain"
                    priority
                    alt={`customers-${index}`}
                  />
                </AnimatedCard>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Customers;
