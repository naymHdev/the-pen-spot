import { CalendarRange, FolderKanban, UserRoundCheck } from "lucide-react";
import logo from "../../assets/images/logo.svg";
const About = () => {
  return (
    <>
      <div>
        <div className="mt-10 container mx-auto">
          <div className=" flex justify-between p-6">
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
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
