import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  User,
  Phone,
  MapPin,
  Globe,
  Pencil,
  Asterisk,
  RefreshCw,
} from "lucide-react";
import {
  useGetMeQuery,
  useUpdateProfileMutation,
} from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const UpdateProfile = () => {
  const { data: myDataInfo } = useGetMeQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const getUserInfo = myDataInfo?.data;
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: getUserInfo?.name || "",
      phone: getUserInfo?.phone || "",
      address: getUserInfo?.address || "",
      city: getUserInfo?.city || "",
      country: getUserInfo?.country || "",
      postalCode: getUserInfo?.postalCode || "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const toastId = toast.loading("Updating...");

    try {
      const res = await updateProfile(formData);
      toast.success(res?.data.message, { id: toastId });

      console.log("update", res?.data);
    } catch {
      toast.error("Something went wrong!", { id: toastId });
    }
  };

  return (
    <div className=" ">
      <h2 className="text-2xl font-bold text-primary-text mb-4">
        Update Profile
      </h2>
      <Card className="mt-6 lg:w-6/12 mx-auto p-6 rounded-2xl border-neutral-200">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <Label className=" text-primary-text font-medium" htmlFor="name">
              Full Name
            </Label>
            <div className="absolute left-3 top-10 text-primary-text">
              <User size={16} />
            </div>
            <Input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="pl-10 mt-1 border-neutral-200 bg-primary-bg "
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message as string}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="relative">
            <Label className=" text-primary-text font-medium" htmlFor="phone">
              Phone
            </Label>
            <div className="absolute left-3 top-10 text-primary-text">
              <Phone size={16} />
            </div>
            <Input
              id="phone"
              {...register("phone")}
              className="pl-10 mt-1 border-neutral-200 bg-primary-bg "
              placeholder="Enter phone number"
            />
          </div>

          {/* Address Field */}
          <div className="relative">
            <Label className=" text-primary-text font-medium" htmlFor="address">
              Address
            </Label>
            <div className="absolute left-3 top-10 text-primary-text">
              <MapPin size={16} />
            </div>
            <Input
              id="address"
              {...register("address")}
              className="pl-10 mt-1 border-neutral-200 bg-primary-bg "
              placeholder="Enter your address"
            />
          </div>

          {/* City Field */}
          <div className="relative">
            <Label className=" text-primary-text font-medium" htmlFor="city">
              City
            </Label>
            <div className="absolute left-3 top-10 text-primary-text">
              <Globe size={16} />
            </div>
            <Input
              id="city"
              {...register("city")}
              className="pl-10 mt-1 border-neutral-200 bg-primary-bg "
              placeholder="Enter your city"
            />
          </div>

          {/* Country Field */}
          <div className="relative">
            <Label className=" text-primary-text font-medium" htmlFor="country">
              Country
            </Label>
            <div className="absolute left-3 top-10 text-primary-text">
              <Globe size={16} />
            </div>
            <Input
              id="country"
              {...register("country")}
              className="pl-10 mt-1 border-neutral-200 bg-primary-bg "
              placeholder="Enter your country"
            />
          </div>

          {/* Postal Code Field */}
          <div className="relative">
            <Label
              className=" text-primary-text font-medium"
              htmlFor="postalCode"
            >
              Postal Code
            </Label>
            <div className="absolute left-3 top-10 text-primary-text">
              <Asterisk size={16} />
            </div>
            <Input
              id="postalCode"
              {...register("postalCode")}
              className="pl-10 mt-1 border-neutral-200 bg-primary-bg "
              placeholder="Enter your postal code"
            />
          </div>

          {/* Submit Button */}
          <div className=" flex items-center justify-center">
            <Button type="submit" className=" bg-secondary text-white">
              {isLoading ? (
                <>
                  <div className=" flex items-center gap-2">
                    <RefreshCw size={16} />
                    <p>Updating...</p>
                  </div>
                </>
              ) : (
                <>
                  <div className=" flex items-center gap-2">
                    <Pencil size={16} />
                    <p>Update Profile</p>
                  </div>
                </>
              )}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UpdateProfile;
