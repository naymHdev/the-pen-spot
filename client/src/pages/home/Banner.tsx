import TPButton from "@/components/buttons/TPButton";

const Banner = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/images/h5_Bg_slider.jpg)] lg:h-[80vh] bg-cover bg-center bg-no-repeat bg-banner flex items-center">
        <div className="container mx-auto flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-5 items-center justify-center w-full">
            <div className="col-span-1 lg:col-span-5">
              <div className="bg-[url(/src/assets/images/h5_banner1.jpg)] bg-center bg-no-repeat bg-cover h-[70vh] w-full relative">
                <div className=" absolute top-24 left-20 lg:w-1/2">
                  <h4 className=" font-medium text-3xl text-primary-text">
                    Mix & Match
                  </h4>
                  <h2 className=" mt-8 text-6xl font-semibold text-primary-text leading-16">
                    With Our 3 For 2 Stationery
                  </h2>
                  <div className=" mt-14">
                    <TPButton
                      className=" bg-primary-text border-none text-white hover:bg-secondary py-4 px-9"
                      text="Shop Now"
                      iconPosition="right"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2 bg-[url(/src/assets/images/h5_Bg_slider.jpg)]">
              <div className=" flex flex-col gap-5">
                <div className="bg-[url(/src/assets/images/h5_banner2.jpg)] bg-center bg-no-repeat bg-cover h-[245px] relative">
                  <div className=" absolute top-10 left-10">
                    <h4 className=" text-white">Office / Home</h4>
                    <h2 className=" mt-3 text-4xl font-medium text-white">
                      Metal Pens
                    </h2>
                    <p className=" text-white mt-2 text-xl">15% Off</p>
                    <div className=" mt-8">
                      <TPButton
                        className=" text-white border border-white hover:bg-secondary hover:border-none px-6"
                        text="Shop Now"
                        iconPosition="right"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-[url(/src/assets/images/h5_banner3.jpg)] bg-center bg-no-repeat bg-cover h-[245px] relative">
                  <div className=" absolute top-10 left-10">
                    <h4 className=" text-white">Office Adhesive</h4>
                    <h2 className=" mt-3 text-4xl font-medium text-white">
                      Tape
                    </h2>
                    <p className=" text-white mt-2 text-xl">From $19.99</p>
                    <div className=" mt-8">
                      <TPButton
                        className=" text-white border border-white hover:bg-secondary hover:border-none px-6"
                        text="Shop Now"
                        iconPosition="right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
