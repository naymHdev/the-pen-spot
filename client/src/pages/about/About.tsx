import { CalendarRange, FolderKanban, UserRoundCheck } from "lucide-react";
import { MessageCircle, Shield, MapPin, Phone } from "lucide-react";
import logo from "/assets/images/logo.svg";
import about1 from "/assets/images/a1.webp";
import about2 from "/assets/images/a4.jpeg";
import about3 from "/assets/images/a2.jpeg";
import about4 from "/assets/images/a3.jpeg";
import MultiMarque from "@/components/MultiMarque";
import innovation from "/assets/images/technology-image.png";
import TPButton from "@/components/buttons/TPButton";
import { toast } from "sonner";
import globalMap from "/assets/images/global-map.png";
import Container from "@/components/layouts/Container";

const contacts = [
  {
    icon: <MessageCircle size={24} className=" text-primary-text" />,
    title: "Chat to sales",
    description: "Speak to our friendly team.",
    buttonText: "sales@untitledui.com",
    buttonStyle:
      "border border-neutral-300 text-primary-text hover:bg-secondary hover:text-white hover:cursor-pointer",
  },
  {
    icon: <Shield size={24} className=" text-primary-text" />,
    title: "Chat to support",
    description: "We’re here to help.",
    buttonText: "support@untitledui.com",
    buttonStyle:
      " border border-neutral-300 text-primary-text hover:bg-secondary hover:text-white hover:cursor-pointer",
  },
  {
    icon: <MapPin size={24} className=" text-primary-text" />,
    title: "Visit us",
    description: "Visit our office HQ.",
    buttonText: "View on Google Maps",
    buttonStyle:
      " border border-neutral-300 text-primary-text hover:bg-secondary hover:text-white hover:cursor-pointer",
  },
  {
    icon: <Phone size={24} className=" text-primary-text" />,
    title: "Call us",
    description: "Mon-Fri from 8am to 5pm.",
    buttonText: "+1 (555) 000-0000",
    buttonStyle:
      " border border-neutral-300 text-primary-text hover:bg-secondary hover:text-white hover:cursor-pointer",
  },
];

const About = () => {
  return (
    <>
      <div className="">
        <Container className="mt-10">
          <div className="grid md:flex justify-between p-6">
            <div className=" mt-10 lg:mt-0">
              <img src={logo} alt="The Pen Spot Logo" />
              <h1 className="mt-4 text-2xl md:text-4xl font-bold text-primary-text">
                About The Pen Spot
              </h1>
              <p className=" text-primary-text mt-4 lg:w-1/2 font-medium">
                We prioritize quality, affordability, and customer satisfaction.
                Shop with us for the perfect stationery that makes every idea
                come to life!
              </p>
              <div className="mt-10 flex items-center">
                <div className="space-y-2 border-r border-neutral-200 px-1 lg:px-6">
                  <div className=" h-12 w-12 rounded-full bg-primary-bg text-primary-text flex items-center justify-center border-none">
                    <CalendarRange />
                  </div>
                  <p className="font-medium text-sm text-foreground">
                    Monthly unique visit
                  </p>
                  <h2 className="font-semibold text-primary-text text-sm md:text-xl">
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
                  <h2 className="font-semibold text-primary-text text-sm md:text-xl">
                    10 Trillion
                  </h2>
                </div>
                <div className="space-y-2 border-r border-neutral-200 px-6">
                  <div className=" h-12 w-12 rounded-full bg-primary-bg text-primary-text flex items-center justify-center border-none">
                    <FolderKanban />
                  </div>
                  <p className="font-medium text-sm text-foreground">
                    Products for any need
                  </p>
                  <h2 className="font-semibold text-primary-text text-sm md:text-xl">
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
          {/* Slider */}
        </Container>
        <div className=" mt-20">
          <MultiMarque />
        </div>
        <Container className="mt-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between">
            <div>
              <img className="" src={innovation} alt="Technical Innovation" />
            </div>
            <div className=" space-y-4">
              <h2 className=" text-primary-text uppercase text-xl md:text-2xl font-bold">
                Technology at Flipkart
              </h2>
              <h1 className=" font-black text-primary-text text-3xl md:text-6xl uppercase">
                Innovation
              </h1>
              <p>
                Flipkart technology drives path-breaking, customer-focused
                innovation that makes high quality products accessible to Indian
                shoppers, besides making the online shopping experience
                convenient, intuitive and seamless.
              </p>
              <TPButton
                onClick={() =>
                  toast.warning("This page is under construction!")
                }
                className=" bg-secondary text-primary-bg px-8 py-3 rounded-sm text-lg font-medium"
                text="Read More"
              />
            </div>
          </div>
          <div className="mt-20">
            <div className=" text-center space-y-3">
              <p className=" font-black text-secondary">Contact us</p>
              <h2 className=" font-semibold text-2xl md:text-4xl">
                Get in touch with our team
              </h2>
              <p className=" text-sm font-medium text-primary-text">
                We have the team and know how to help you scale 10X faster.
              </p>
            </div>
            <img className="" src={globalMap} alt="" />
            <div className="w-[90%] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {contacts?.map((contact, index) => (
                  <div
                    key={index}
                    className="p-6 border border-neutral-300 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-start"
                  >
                    <div className="mb-4">{contact.icon}</div>
                    <h3 className="text-lg font-semibold">{contact.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {contact.description}
                    </p>
                    <button
                      className={`w-full py-2 rounded-lg ${contact.buttonStyle}`}
                    >
                      {contact.buttonText}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
