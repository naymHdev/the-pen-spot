import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllUsersQuery } from "@/redux/features/auth/authApi";

interface TUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  address?: string;
  status: string;
}

export interface UsersResponse {
  result: TUser[];
}

const ManageUsers = () => {
  const { data: userData } = useGetAllUsersQuery<UsersResponse>(undefined);
  // console.log("allUsers", userData?.data);

  return (
    <>
      <div>
        <h2 className="text-2xl px-1 font-black text-primary-text dark:text-white">
          Manage Users
        </h2>
        <div className="mt-10">
          <Table>
            <TableHeader>
              <TableRow className=" border-neutral-400 text-primary-text font-semibold text-xl">
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userData?.data?.map((user: TUser) => (
                <TableRow
                  key={user._id}
                  className=" border-neutral-400 text-primary-text"
                >
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.status}</TableCell>
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
