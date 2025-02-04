/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import google from "../../../public/icons/google.png";
import facebook from "../../../public/icons/facebook.png";
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

  // const location = useLocation();

  // const from = location.state?.from?.pathname || "/";

  /* 
  email: "admin@gmail.com",
  password: "admin1234",
  */

  const { register, handleSubmit } = useForm({
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

      const user = verifyToken(res?.data.token) as unknown as TUser;
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
    <>
      <div className=" relative">
        <div className=" flex items-center justify-center h-[100vh]">
          <div>
            <div>
              <h2 className=" text-4xl font-semibold text-primary-text">
                Sign in
              </h2>
              <p className=" text-primary-text font-medium mt-8">
                Sign in with Social account
              </p>
              <div className=" flex items-center justify-center gap-6 mt-4">
                <button className=" flex items-center gap-3 rounded-lg px-12 py-2 font-semibold text-primary-text bg-primary-bg shadow-md hover:border hover:border-secondary">
                  <img className=" w-6 h-full" src={google} alt="Google Icon" />
                  Google
                </button>
                <button className=" flex items-center gap-3 rounded-lg px-12 py-2 font-semibold text-primary-text bg-primary-bg shadow-md hover:border hover:border-secondary">
                  <img
                    className=" w-6 h-full"
                    src={facebook}
                    alt="Google Icon"
                  />
                  Facebook
                </button>
              </div>
            </div>
            <div className="border opacity-10 my-10" />
            <div className="">
              <h3 className=" text-primary-text font-medium text-lg">
                Or continue with email address
              </h3>
              <form className=" mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className=" flex flex-col space-y-4">
                  <input
                    className=" w-full px-4 py-3 bg-primary-bg rounded-lg focus:outline-none border-none"
                    placeholder="123example@gmail.com"
                    {...register("email")}
                  />
                  <input
                    className=" w-full px-4 py-3 bg-primary-bg rounded-lg focus:outline-none border-none"
                    placeholder="password***"
                    {...register("password")}
                  />
                </div>
                <button
                  className=" hover:cursor-pointer w-full mt-6 bg-secondary text-white py-2 rounded-full"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className=" absolute top-6 right-10">
          <div className=" flex items-center gap-2">
            <h3 className=" font-medium text-primary-text">
              You don't have an account?
            </h3>
            <Link
              className=" text-lg underline font-medium text-secondary"
              to="/register"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
