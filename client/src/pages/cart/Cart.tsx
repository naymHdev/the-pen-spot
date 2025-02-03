import {
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/features/order/orderApi.ts";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Minus, Plus, ShieldCheck } from "lucide-react";
import moment from "moment";
import { useEffect } from "react";
import { toast } from "sonner";

const Cart = () => {
  const dispatch = useAppDispatch();
  const [createOrder, { isLoading, isSuccess, data, isError, error }] =
    useCreateOrderMutation();
  const cartData = useAppSelector((state) => state.cart);
  const cartProducts = cartData.items || [];

  //   console.log("cartData", cartProducts);

  const deliveryDate = moment().add(7, "days").format("ddd MMM D");

  const handlePlacedOrder = async () => {
    const res = await createOrder({ products: cartProducts });
    console.log("order_res", res.data);
  };

  const toastId = "cart";
  useEffect(() => {
    if (isLoading) toast.loading("Processing...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);

  return (
    <>
      <div className=" mt-2">
        <div className=" container mx-auto">
          <div className=" grid grid-cols-1 lg:grid-cols-8 gap-4">
            <div className=" col-span-1 lg:col-span-5 border rounded-md shadow border-primary-bg ">
              <div className=" h-screen overflow-auto hide-scrollbar">
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
                      <div className=" col-span-1 lg:col-span-3 relative">
                        <div>
                          <h2 className=" font-medium text-primary-text text-lg">
                            {product.name}
                          </h2>
                          <p className="mt-6 font-semibold text-primary-text text-lg">
                            TK {product.price}
                          </p>
                        </div>
                        <div className=" absolute bottom-0">
                          <button
                            onClick={() =>
                              dispatch(removeFromCart(product.product))
                            }
                            className=" uppercase font-semibold text-primary-text hover:text-secondary hover:cursor-pointer"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                      <div className="text-sm col-span-1 lg:col-span-2">
                        <div>
                          <h4 className=" font-medium text-primary-text">
                            Delivery by <span>{deliveryDate}</span>
                          </h4>
                          <p className="mt-1 font-medium text-primary-text">
                            Up to{" "}
                            <span className=" text-gray-500 line-through">
                              Tk40
                            </span>
                            <span className=" text-secondary px-1">Free</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" col-span-1 lg:col-span-3">
              <div className="border rounded-md shadow border-primary-bg">
                <div className=" border-b border-neutral-200 p-4">
                  <h2 className=" text-xl font-semibold text-primary-text">
                    Price Details
                  </h2>
                </div>
                <div className=" p-4 space-y-4">
                  <div className=" flex items-center justify-between font-medium text-primary-text text-lg">
                    <p>Price ({cartProducts.length} items)</p>
                    <p>Tk {cartData.totalPrice}</p>
                  </div>
                  <div className=" flex items-center justify-between font-medium text-primary-text text-lg">
                    <p>Delivery Charges</p>
                    <p className="mt-1 font-medium text-primary-text">
                      <span className=" text-gray-500 line-through">
                        Tk {cartProducts.length * 60}
                      </span>
                      <span className=" text-secondary px-1">Free</span>
                    </p>
                  </div>
                </div>
                <div className=" p-4">
                  <div className=" border-b border-t border-dashed border-neutral-200 py-4 flex items-center justify-between font-semibold text-primary-text text-lg">
                    <p>Total Amount ({cartProducts.length} items)</p>
                    <p>Tk {cartData.totalPrice}</p>
                  </div>
                  <div className=" mt-6 flex text-slate-500 gap-2 items-center">
                    <ShieldCheck size={35} />
                    <h3 className=" font-bold text-sm">
                      Safe and Secure Payments.Easy returns.100% Authentic
                      products.
                    </h3>
                  </div>

                  <button
                    onClick={handlePlacedOrder}
                    className="mt-6 hover:cursor-pointer w-full rounded uppercase text-lg font-medium bg-secondary text-primary-bg px-14 py-3"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
