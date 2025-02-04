import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import google from "../../../public/assets/icons/google.png";
import facebook from "../../../public/assets/icons/facebook.png";
import bigSale from "../../../public/assets/images/registration-big-sale.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const Register = () => {
  const [signUp] = useRegisterMutation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Sign in...");
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await signUp(userData);

      if (res.data) {
        toast.success(res.data.message, { id: toastId });
        return navigate("/login");
      } else if (res?.error) {
        toast.error(res.error.toString(), { id: toastId });
        return navigate("/register");
      } else {
        toast.error("Sign in failed!", { id: toastId });
      }
    } catch {
      toast.error("Sign in failed!", { id: toastId });
      return navigate("/register");
    }
  };

  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className=" grid grid-cols-1 lg:grid-cols-7 p-8 items-center justify-center">
            <div className=" col-span-1 lg:col-span-3 bg-primary-bg rounded-3xl">
              <img
                className=" w-full h-full rounded-3xl"
                src={bigSale}
                alt="The Pen Spot Registration Big Sale"
              />
            </div>
            <div className=" relative col-span-1 lg:col-span-4">
              <div className=" flex items-center justify-center h-[100vh]">
                <div>
                  <div>
                    <h2 className=" text-4xl font-semibold text-primary-text">
                      Sign Up
                    </h2>
                    <p className=" text-primary-text font-medium mt-8">
                      Sign up with Social account
                    </p>
                    <div className=" flex items-center justify-center gap-6 mt-4">
                      <button className=" flex items-center gap-3 rounded-lg px-12 py-2 font-semibold text-primary-text bg-primary-bg shadow-md hover:border hover:border-secondary">
                        <img
                          className=" w-6 h-full"
                          src={google}
                          alt="Google Icon"
                        />
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
                          placeholder="Name"
                          {...register("name")}
                        />
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
              <div className=" absolute top-0 right-0">
                <div className=" flex items-center gap-2">
                  <h3 className=" font-medium text-primary-text">
                    You have already account!
                  </h3>
                  <Link
                    className=" text-lg underline font-medium text-secondary"
                    to="/login"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
