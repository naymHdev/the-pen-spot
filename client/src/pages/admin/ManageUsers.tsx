/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUserStatusUpdateMutation } from "@/redux/features/admin/adminApi";
import { useGetAllUsersQuery } from "@/redux/features/auth/authApi";
import { TUser } from "@/types/user.types";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import Loading from "@/components/Loading";

const ManageUsers = () => {
  const {
    data: userData,
    isLoading,
    isFetching,
  } = useGetAllUsersQuery(undefined);
  const usersInfo = userData?.data || [];

  const [updateStatus] = useUserStatusUpdateMutation();
  const [loadingUserId, setLoadingUserId] = useState<string | null>(null);

  const handleStatusChange = async (
    userId: string,
    currentStatus: string,
    newStatus: "active" | "blocked"
  ) => {
    if (currentStatus === newStatus) return;

    setLoadingUserId(userId);
    try {
      const res = await updateStatus({ userId }).unwrap();
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error.data.message);
    } finally {
      setLoadingUserId(null);
    }
  };

  if (isFetching && isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <h2 className="text-2xl px-1 font-black text-primary-text dark:text-white">
          Manage Users
        </h2>
        <div className="mt-10">
          <Table>
            <TableHeader>
              <TableRow className="border-neutral-400 text-primary-text font-semibold text-xl">
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersInfo?.map((user: TUser) => (
                <TableRow
                  key={user._id}
                  className="border-neutral-400 text-primary-text"
                >
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell
                    className={clsx(
                      "flex items-center gap-2",
                      user.status === "active" && "text-green-500",
                      user.status === "blocked" && "text-secondary"
                    )}
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          className=" border-neutral-300"
                          size="sm"
                          disabled={loadingUserId === user._id}
                        >
                          {loadingUserId === user._id
                            ? "Updating..."
                            : user.status}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className=" bg-primary-bg border-neutral-300">
                        <DropdownMenuItem
                          onClick={() =>
                            handleStatusChange(
                              user._id as string,
                              user.status,
                              "active"
                            )
                          }
                        >
                          Active
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleStatusChange(
                              user._id as string,
                              user.status,
                              "blocked"
                            )
                          }
                        >
                          Blocked
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
