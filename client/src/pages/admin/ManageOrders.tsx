import { useGetOrdersQuery } from "@/redux/features/order/orderApi.ts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export interface IOrder {
  _id: string;
  order: string;
  totalPrice: number;
  status: string;
  transaction?: {
    bank_status?: string;
    id?: string;
    sp_code?: string;
    method?: string;
  };
}

const ManageOrders = () => {
  const {
    data: allOrders,
    isFetching,
    isLoading,
  } = useGetOrdersQuery(undefined);

  return (
    <>
      <div>
        <h2 className="text-2xl px-1 font-black text-primary-text dark:text-white">
          Manage Orders
        </h2>

        {/* ✅ Show Loading State */}
        {isLoading ? (
          <div className="mt-10 space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-10 w-full" />
            ))}
          </div>
        ) : (
          <div className="mt-10">
            {isFetching && (
              <p className="text-sm text-red-800">Refreshing...</p>
            )}
            <Table>
              <TableHeader>
                <TableRow className="border-neutral-400 text-primary-text font-semibold text-xl">
                  <TableHead>User</TableHead>
                  <TableHead>Total Cost</TableHead>
                  <TableHead>Bank Status</TableHead>
                  <TableHead>Order Id</TableHead>
                  <TableHead>Order Code</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>Payment Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allOrders?.data
                  ?.slice()
                  ?.reverse()
                  ?.map((order: IOrder) => (
                    <TableRow
                      key={order._id}
                      className="border-neutral-400 text-primary-text"
                    >
                      <TableCell>{order.order}</TableCell>
                      <TableCell>{order.totalPrice}</TableCell>
                      <TableCell>{order?.transaction?.bank_status}</TableCell>
                      <TableCell>{order?.transaction?.id}</TableCell>
                      <TableCell>{order?.transaction?.sp_code}</TableCell>
                      <TableCell>{order?.transaction?.method}</TableCell>
                      <TableCell>{order.status}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageOrders;
