import { List, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <>
      <div>
        <div className=" container mx-auto">
          <div className="hidden lg:grid grid-cols-5 items-center py-5">
            <div className=" col-span-1">
              <div className=" flex items-center gap-3">
                <List />
                <h3 className=" text-primary-text text-md font-semibold">
                  Browse Categories
                </h3>
              </div>
            </div>
            <div className=" col-span-3">
              <div>
                <ul className=" flex items-center gap-8 text-primary-text font-medium">
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                  <Link to="/about">
                    <li>About</li>
                  </Link>
                  <Link to="/all-products">
                    <li>All Products</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className=" col-span-1">
              <div className="text-sm font-medium flex items-center gap-3 justify-end">
                <Sparkles />
                <p className="">
                  Summer sale discount
                  <span className=" text-secondary px-1">50% off.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;
