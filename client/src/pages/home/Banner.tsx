const Banner = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/images/h5_Bg_slider.jpg)] lg:h-[80vh] bg-cover bg-center bg-no-repeat bg-banner flex items-center">
        <div className="container mx-auto flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-5 items-center justify-center w-full">
            <div className="col-span-1 lg:col-span-5">
              <div className="bg-[url(/src/assets/images/h5_banner1.jpg)] bg-center bg-no-repeat bg-cover h-[70vh] w-full"></div>
            </div>
            <div className="col-span-1 lg:col-span-2 bg-[url(/src/assets/images/h5_Bg_slider.jpg)]">
              <div className=" flex flex-col gap-5">
                <div className="bg-[url(/src/assets/images/h5_banner2.jpg)] bg-center bg-no-repeat bg-cover h-[245px]"></div>
                <div className="bg-[url(/src/assets/images/h5_banner3.jpg)] bg-center bg-no-repeat bg-cover h-[245px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
