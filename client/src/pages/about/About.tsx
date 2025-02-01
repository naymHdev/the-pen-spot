import { CalendarRange, FolderKanban, UserRoundCheck } from "lucide-react";
import logo from "../../assets/images/logo.svg";

import about1 from "../../assets/images/a1.webp";
import about2 from "../../assets/images/a4.jpeg";
import about3 from "../../assets/images/a2.jpeg";
import about4 from "../../assets/images/a3.jpeg";

const About = () => {
  return (
    <>
      <div>
        <div className="mt-10 container mx-auto">
          <div className="grid md:flex justify-between p-6">
            <div>
              <img src={logo} alt="The Pen Spot Logo" />
              <h1 className="mt-4 text-4xl font-bold text-primary-text">
                About The Pen Spot
              </h1>
              <p className=" text-primary-text mt-4 lg:w-1/2 font-medium">
                We prioritize quality, affordability, and customer satisfaction.
                Shop with us for the perfect stationery that makes every idea
                come to life!
              </p>
              <div className="mt-10 flex items-center">
                <div className="space-y-2 border-r border-neutral-200 px-6">
                  <div className=" h-12 w-12 rounded-full bg-primary-bg text-primary-text flex items-center justify-center border-none">
                    <CalendarRange />
                  </div>
                  <p className="font-medium text-sm text-foreground">
                    Monthly unique visit
                  </p>
                  <h2 className="font-semibold text-primary-text text-xl">
                    50,150,450
                  </h2>
                </div>
                <div className="space-y-2 border-r border-neutral-200 px-6">
                  <div className=" h-12 w-12 rounded-full bg-primary-bg text-primary-text flex items-center justify-center border-none">
                    <UserRoundCheck />
                  </div>
                  <p className="font-medium text-sm text-foreground">
                    Active customers
                  </p>
                  <h2 className="font-semibold text-primary-text text-xl">
                    100 Trillion
                  </h2>
                </div>
                <div className="space-y-2 border-r border-neutral-200 px-6">
                  <div className=" h-12 w-12 rounded-full bg-primary-bg text-primary-text flex items-center justify-center border-none">
                    <FolderKanban />
                  </div>
                  <p className="font-medium text-sm text-foreground">
                    Products for any need
                  </p>
                  <h2 className="font-semibold text-primary-text text-xl">
                    1 Billions
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-2 p-6 relative">
                {/* Top Left - Small Square */}
                <img
                  src={about1}
                  alt="Abstract Art"
                  className="w-full h-32 object-cover rounded-tr-4xl rounded-b-4xl"
                />

                {/* Top Middle - Portrait */}
                <img
                  src={about2}
                  alt="Man Working"
                  className="w-full h-32 object-cover rounded-b-4xl rounded-tl-4xl col-span-2"
                />

                {/* Bottom Left - Large Image */}
                <img
                  src={about4}
                  alt="Dancer with Colors"
                  className="w-full h-64 object-cover rounded-4xl col-span-2"
                />

                {/* Bottom Right - Portrait */}
                <img
                  src={about3}
                  alt="Woman Taking Photo"
                  className="w-full h-64 object-cover rounded-tl-4xl rounded-br-4xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
