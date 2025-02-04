import Skeleton from "@/components/Skeletons/Skeleton";
import { Badge } from "@/components/ui/badge";
import { useGetOrdersQuery } from "@/redux/features/order/orderApi.ts";
export interface Transaction {
  id: string;
  transactionStatus: string | null;
  bank_status: string;
  date_time: string;
  method: string;
  sp_code: string;
  sp_message: string;
}

export interface Product {
  product: string;
  quantity: number;
  _id: string;
}

export interface Order {
  transaction: Transaction;
  _id: string;
  user: string;
  products: Product[];
  totalPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function OrderDetails() {
  const { isLoading, data } = useGetOrdersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const orderData: Order[] = data?.data;

  return isLoading ? (
    <Skeleton />
  ) : (
    <>
      <div className=" text-primary-text font-black text-2xl px-1">
        My Orders
      </div>
      <div className="mx-auto columns-1">
        {orderData
          ?.slice()
          .reverse()
          .map((order) => (
            <div
              key={order._id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 my-6 border border-neutral-300 rounded-2xl"
            >
              <div>
                <h3 className="font-semibold text-primary-text">
                  Customer Information
                </h3>
                <p>User ID: {order?.user}</p>
                <p>Order Date: {new Date(order?.createdAt).toLocaleString()}</p>
                <p>
                  Last Updated: {new Date(order?.updatedAt).toLocaleString()}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-text">
                  Order Summary
                </h3>
                <p>Total Price: ${order?.totalPrice?.toFixed(2)}</p>
                <p>
                  Status:{" "}
                  <Badge
                    variant={
                      order?.status === "Pending" ? "outline" : "default"
                    }
                  >
                    {order?.status}
                  </Badge>
                </p>
              </div>
              <div className="">
                <h3 className="font-semibold text-primary-text">Products</h3>
                <ul>
                  {order?.products?.map((product, i) => (
                    <li key={i}>
                      Product ID: {product?.product}, Quantity:{" "}
                      {product?.quantity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
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
