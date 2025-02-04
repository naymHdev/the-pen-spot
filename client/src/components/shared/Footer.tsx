import TPButton from "../buttons/TPButton";
import logo from "/assets/images/logo.svg";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-primary-bg mt-16">
        <div className=" container mx-auto">
          <div className="py-6 lg:flex items-center justify-between">
            <div className=" lg:w-1/2">
              <h2 className=" text-2xl font-semibold text-primary-text">
                Stay Inspired with Our Stationery Updates
              </h2>
              <p className=" font-medium text-sm text-primary-text mt-2">
                Join our newsletter and get the latest updates on premium
                stationery, exclusive discounts, and creative inspiration
                delivered to your inbox. Be the first to explore new arrivals
                and elevate your workspace with stylish essentials!
              </p>
            </div>
            <div className=" relative">
              <form>
                <input
                  className="bg-white rounded-full lg:w-[500px] px-4 py-2 border border-primary-text focus:outline-none"
                  type="email"
                  placeholder="Enter your email"
                />

                <TPButton
                  className=" absolute top-[1px] right-0 bg-secondary text-white"
                  text="Subscribe"
                  type="submit"
                />
              </form>
            </div>
          </div>
          <footer className="mt-10 pb-6 grid grid-cols-1 lg:grid-cols-8 gap-10">
            <div className=" col-span-1 lg:col-span-3">
              <img src={logo} alt="Website Logo" />
              <p className=" text-primary-text font-medium mt-6">
                Discover premium stationery that inspires creativity and
                elevates your workspace. Stay organized and stylish with our
                curated collection.
              </p>
            </div>
            <div className=" col-span-1 lg:col-span-5">
              <div className=" grid grid-cols-1 lg:grid-cols-7 gap-10 justify-between">
                <div className=" col-span-1 lg:col-span-2">
                  <h2 className=" text-lg font-semibold text-primary-text">
                    Help
                  </h2>
                  <ul className="mt-4 font-medium text-primary-text space-y-3">
                    <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                      Track My Order
                    </li>
                    <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                      Contact Information
                    </li>
                    <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                      Privacy Policy
                    </li>
                    <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                      Return & Refund Policy
                    </li>
                    <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                      Shipping Policy
                    </li>
                    <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                      Terms of Service
                    </li>
                  </ul>
                </div>
                <div className=" col-span-1 lg:col-span-2">
                  <h2 className=" text-lg font-semibold text-primary-text">
                    Shop
                  </h2>
                  <ul className="mt-4 font-medium text-primary-text space-y-3">
                    <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                      Home
                    </li>
                    <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                      Books
                    </li>
                    <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                      Trending
                    </li>
                    <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                      Best Sell
                    </li>
                    <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                      All Products
                    </li>
                  </ul>
                </div>
                <div className=" col-span-1 lg:col-span-3">
                  <h2 className=" text-lg font-semibold text-primary-text">
                    About
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-6 items-center">
                    <a className=" text-3xl text-sky-400" href="">
                      <Facebook size={40} />
                    </a>
                    <a className=" text-3xl text-orange-700" href="">
                      <Instagram size={40} />
                    </a>
                    <a className=" text-3xl text-red-700" href="">
                      <Youtube size={40} />
                    </a>
                    <a className=" text-3xl text-sky-400" href="">
                      <Twitter size={40} />
                    </a>
                    <a className=" text-3xl text-sky-400" href="">
                      <Linkedin size={40} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div className="bg-primary-text">
          <div className=" py-4 container mx-auto">
            <p className="text-center font-medium text-white">
              © {currentYear} The Pen Spot. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
