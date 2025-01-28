import TPButton from "../buttons/TPButton";

const Footer = () => {
  return (
    <>
      <div className="bg-primary-bg">
        <div className=" container mx-auto">
          <div className="py-6 lg:flex items-center justify-between">
            <div className=" lg:w-1/2">
              <h2 className=" text-2xl font-semibold text-primary-text">
                Stay Inspired with Our Stationery Updates
              </h2>
              <p className=" font-medium text-sm text-foreground mt-2">
                Join our newsletter and get the latest updates on premium
                stationery, exclusive discounts, and creative inspiration
                delivered to your inbox. Be the first to explore new arrivals
                and elevate your workspace with stylish essentials!
              </p>
            </div>
            <div className=" relative">
              <form>
                <input
                  className="bg-white rounded-full w-[500px] px-4 py-2 border border-primary-text focus:outline-none"
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
          <footer></footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
