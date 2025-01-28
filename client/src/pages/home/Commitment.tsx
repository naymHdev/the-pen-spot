const Commitment = () => {
  return (
    <>
      <div className=" bg-primary-bg">
        <div className=" container mx-auto py-8">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center">
            <div className=" flex items-center gap-5 pl-8">
              <div>
                <img
                  className=" w-16 h-full"
                  src="/src/assets/icons/delivery-truck.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className=" text-xl font-semibold text-primary-text">
                  Fast Delivery
                </h2>
                <p className=" font-medium text-sm text-foreground mt-1">
                  For all orders over $120
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-5 lg:border-l border-foreground pl-8">
              <div>
                <img
                  className=" w-16 h-full"
                  src="/src/assets/icons/credit-card.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className=" text-xl font-semibold text-primary-text">
                  safe Payments
                </h2>
                <p className=" font-medium text-sm text-foreground mt-1">
                  100% secure payment
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-5 lg:border-l border-foreground pl-8">
              <div>
                <img
                  className=" w-16 h-full"
                  src="/src/assets/icons/gift-cards.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className=" text-xl font-semibold text-primary-text">
                  Discount Coupons
                </h2>
                <p className=" font-medium text-sm text-foreground mt-1">
                  Enjoy Huge Promotions
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-5 lg:border-l border-foreground pl-8">
              <div>
                <img
                  className=" w-16 h-full"
                  src="/src/assets/icons/online-chat.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className=" text-xl font-semibold text-primary-text">
                  Quality Support
                </h2>
                <p className=" font-medium text-sm text-foreground mt-1">
                  Dedicated 24/7 support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commitment;
