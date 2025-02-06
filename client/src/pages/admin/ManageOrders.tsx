/* eslint-disable @typescript-eslint/no-explicit-any */
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUpdateOrderStatusMutation } from "@/redux/features/admin/adminApi";
import { useState } from "react";
import { toast } from "sonner";
import Loading from "@/components/Loading";
import clsx from "clsx";

const ManageOrders = () => {
  const [loadingOrderId, setLoadingOrderId] = useState<string | null>(null);
  const [updateOrderStatus] = useUpdateOrderStatusMutation();
  const {
    data: allOrders,
    isFetching,
    isLoading,
  } = useGetOrdersQuery(undefined);

  // console.log("allOrders", allOrders);

  const handleStatusChange = async (
    orderId: string,
    currentStatus: string,
    newStatus: "Shipped"
  ) => {
    if (currentStatus === newStatus) return;

    setLoadingOrderId(orderId);
    try {
      const res = await updateOrderStatus({
        orderId,
        status: newStatus,
      }).unwrap();
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error.data.message);
    } finally {
      setLoadingOrderId(null);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <h2 className="text-2xl px-1 font-black text-primary-text dark:text-white">
          Manage Orders
        </h2>
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
                  ?.map((order) => (
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
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              className={clsx(
                                order.status === "Pending" && "text-secondary",
                                order.status === "Paid" && "text-green-500",
                                order.status === "Shipped" && "text-blue-500",
                                order.status === "Completed" && "text-gray-500",
                                order.status === "Cancelled" && "text-red-500"
                              )}
                              size="sm"
                              disabled={loadingOrderId === order._id}
                            >
                              {loadingOrderId === order._id
                                ? "Updating..."
                                : order.status}
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-primary-bg border-neutral-300">
                            <DropdownMenuItem
                              onClick={() =>
                                handleStatusChange(
                                  order._id,
                                  order.status,
                                  "Shipped"
                                )
                              }
                            >
                              Shipped
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
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
