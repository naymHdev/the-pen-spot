import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import clsx from "clsx";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hooks";
import { TResponse } from "@/types/globalTypes";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "admin@gmail.com",
      password: "admin1234",
    },
  });

  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging in...");
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = (await login(userInfo).unwrap()) as TResponse<any>;
      // console.log("result", res);

      const user = verifyToken(res?.data.token) as TUser;
      dispatch(setUser({ user: user, token: res?.data.token }));

      if (res.data) {
        toast.success(res.message, { id: toastId });
        return navigate("/");
      } else if (res?.error) {
        toast.error(res.error.data.message, { id: toastId });
        return navigate("/login");
      } else {
        toast.error("Something went wrong", { id: toastId });
      }
    } catch {
      toast.error("Something went wrong", { id: toastId });
      return navigate("/login");
    }
  };

  return (
    <div
      className={clsx("flex justify-center items-center h-screen bg-gray-50")}
    >
      <Card className="w-full max-w-md shadow-md p-6 rounded-2xl">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4">
              <Label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={clsx(
                  errors.email && "border-red-500 focus:ring-red-500"
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.email?.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <Label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </Label>
              <Input
                id="password"
                type="text"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                className={clsx(
                  errors.password && "border-red-500 focus:ring-red-500"
                )}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
      <div>
        <Link to="/register">
          <Button>Signup</Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
