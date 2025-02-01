import { updateQuantity } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Minus, Plus } from "lucide-react";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartData = useAppSelector((state) => state.cart);

  const cartProducts = cartData.items || [];

  console.log("cartData", cartProducts);

  return (
    <>
      <div className=" mt-2">
        <div className=" container mx-auto">
          <div className=" grid grid-cols-1 lg:grid-cols-8 gap-4">
            <div className=" col-span-1 lg:col-span-5 border rounded-md shadow border-primary-bg ">
              <div>
                {cartProducts?.map((product) => (
                  <div
                    key={product.product}
                    className=" border-b border-neutral-200 py-4"
                  >
                    <div className=" grid grid-cols-1 lg:grid-cols-7 gap-2">
                      <div className=" col-span-1 lg:col-span-2">
                        <div className=" flex items-center justify-center">
                          <img
                            className=" w-[150px] h-full"
                            src={product.image}
                            alt={product.name}
                          />
                        </div>
                        <div className="mt-6 flex items-center justify-evenly">
                          <div
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: product.product,
                                  quantity: Math.max(product.quantity - 1, 1),
                                })
                              )
                            }
                            className=" border border-neutral-400 rounded-full w-7 h-7 flex items-center justify-center hover:cursor-pointer"
                          >
                            <Minus size={15} />
                          </div>
                          <div className=" border border-neutral-400 px-6 py-1">
                            {product.quantity}
                          </div>
                          <div
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: product.product,
                                  quantity: Math.min(
                                    product.quantity + 1,
                                    product.stock
                                  ),
                                })
                              )
                            }
                            className=" border border-neutral-400 rounded-full w-7 h-7 flex items-center justify-center hover:cursor-pointer"
                          >
                            <Plus size={15} />
                          </div>
                        </div>
                      </div>
                      <div className=" col-span-1 lg:col-span-4"></div>
                      <div className=" col-span-1 lg:col-span-1"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" col-span-1 lg:col-span-3 border rounded-md shadow border-primary-bg p-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
