import Skeleton from "@/components/Skeletons/Skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useVerifyOrderQuery } from "@/redux/features/order/orderApi.ts";
import { OrderData } from "@/types/order.type";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router";

export default function OrderVerification() {
  const [searchParams] = useSearchParams();

  const { isLoading, data } = useVerifyOrderQuery(
    searchParams.get("order_id"),
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const orderData: OrderData = data?.data?.[0];

  console.log("orderData", orderData);

  return isLoading ? (
    <Skeleton />
  ) : (
    <div className="container mx-auto p-4 mt-8">
      <h1 className="text-3xl font-bold mb-6 text-primary-text">
        Order Verification
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className=" border-neutral-300">
          <CardHeader>
            <CardTitle className="text-primary-text">Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-2">
              <dt className="font-semibold text-primary-text">Order ID:</dt>
              <dd>{orderData?.order_id}</dd>
              <dt className="font-semibold text-primary-text">Amount:</dt>
              <dd>
                {orderData?.currency} {orderData?.amount?.toFixed(2)}
              </dd>
              <dt className="font-semibold text-primary-text">Status:</dt>
              <dd>
                <Badge
                  variant={
                    orderData?.bank_status === "Success"
                      ? "default"
                      : "destructive"
                  }
                >
                  {orderData?.bank_status}
                </Badge>
              </dd>
              <dt className="font-semibold text-primary-text">Date:</dt>
              <dd>{new Date(orderData?.date_time)?.toLocaleString()}</dd>
            </dl>
          </CardContent>
        </Card>

        <Card className=" border-neutral-300">
          <CardHeader>
            <CardTitle className="text-primary-text">
              Payment Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-2">
              <dt className="font-semibold text-primary-text">Method:</dt>
              <dd>{orderData?.method}</dd>
              <dt className="font-semibold text-primary-text">
                Transaction ID:
              </dt>
              <dd>{orderData?.bank_trx_id}</dd>
              <dt className="font-semibold text-primary-text">Invoice No:</dt>
              <dd>{orderData?.invoice_no}</dd>
              <dt className="font-semibold text-primary-text">SP Code:</dt>
              <dd>{orderData?.sp_code}</dd>
              <dt className="font-semibold text-primary-text">SP Message:</dt>
              <dd>{orderData?.sp_message}</dd>
            </dl>
          </CardContent>
        </Card>

        <Card className=" border-neutral-300">
          <CardHeader>
            <CardTitle className="text-primary-text">
              Customer Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-2">
              <dt className="font-semibold text-primary-text">Name:</dt>
              <dd>{orderData?.name}</dd>
              <dt className="font-semibold text-primary-text">Email:</dt>
              <dd>{orderData?.email}</dd>
              <dt className="font-semibold text-primary-text">Phone:</dt>
              <dd>{orderData?.phone_no}</dd>
              <dt className="font-semibold text-primary-text">Address:</dt>
              <dd>{orderData?.address}</dd>
              <dt className="font-semibold text-primary-text">City:</dt>
              <dd>{orderData?.city}</dd>
            </dl>
          </CardContent>
        </Card>

        <Card className=" border-neutral-300 relative">
          <CardHeader>
            <CardTitle className="text-primary-text">
              Verification Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              {orderData?.is_verify === 1 ? (
                <>
                  <CheckCircle className="text-green-500" />
                  <span>Verified</span>
                </>
              ) : (
                <>
                  <AlertCircle className="text-yellow-500" />
                  <span>Not Verified</span>
                </>
              )}
            </div>
          </CardContent>
          <CardFooter className=" absolute bottom-0">
            <Link to="/dashboard/order-details">
              <Button className="w-full bg-secondary text-white hover:cursor-pointer font-medium">
                View Order
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
