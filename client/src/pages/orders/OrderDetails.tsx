import Skeleton from "@/components/Skeletons/Skeleton";
import { Badge } from "@/components/ui/badge";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { useGetOrdersQuery } from "@/redux/features/order/orderApi.ts";
import { Order } from "@/types/orderDetails.types";
import clsx from "clsx";

export default function OrderDetails() {
  const { data: userInfo } = useGetMeQuery(undefined);
  const { isLoading, data } = useGetOrdersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const orderData: Order[] = data?.data;
  const userId = userInfo?.data?._id;

  const userBaseOrders = orderData?.filter((itm) => itm.user === userId);

  if (!userBaseOrders?.length) {
    return (
      <div>
        <p className="text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-lg">
          You don’t have any orders yet. Start shopping now!
        </p>
      </div>
    );
  }
  return isLoading ? (
    <Skeleton />
  ) : (
    <>
      <div className=" text-primary-text font-black text-2xl px-1">
        My Orders
      </div>
      <div className="mx-auto columns-1">
        {userBaseOrders
          ?.slice()
          .reverse()
          .map((order) => (
            <div
              key={order._id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 my-6 border border-neutral-300 rounded-2xl"
            >
              <div className=" space-y-2">
                <h3 className="font-semibold text-primary-text">
                  Customer Information
                </h3>
                <p>User ID: {order?.user}</p>
                <p>Order Date: {new Date(order?.createdAt).toLocaleString()}</p>
                <p>
                  Last Updated: {new Date(order?.updatedAt).toLocaleString()}
                </p>
              </div>
              <div className=" space-y-2">
                <h3 className="font-semibold text-primary-text">
                  Order Summary
                </h3>
                <p>Total Price: ${order?.totalPrice?.toFixed(2)}</p>
                <div className=" flex items-center gap-2">
                  Status:
                  <Badge
                    className={clsx(
                      "px-3 py-1 text-sm font-medium",
                      order?.status === "Pending"
                        ? " bg-secondary text-white"
                        : order?.status === "Paid"
                        ? "border bg-green-500 text-white"
                        : "border border-gray-500 text-gray-500"
                    )}
                    variant={
                      order?.status === "Pending" ? "outline" : "default"
                    }
                  >
                    {order?.status}
                  </Badge>
                </div>
              </div>
              <div className=" space-y-2">
                <h3 className="font-semibold text-primary-text">Products</h3>
                <ul className=" space-y-1">
                  {order?.products?.map((product, i) => (
                    <li key={i}>
                      Product ID: {product?.product}, Quantity:
                      {product?.quantity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" space-y-2">
                <h3 className="font-semibold text-primary-text">
                  Transaction Details
                </h3>
                <p>Transaction ID: {order?.transaction?.id}</p>
                <p>Payment Method: {order?.transaction?.method}</p>
                <p>Transaction Date: {order?.transaction?.date_time}</p>
                <p>Transaction Status: {order?.transaction?.bank_status}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
