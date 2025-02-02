import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { User, Phone, MapPin, Globe, Pencil, Asterisk } from "lucide-react";
import { useGetMeQuery } from "@/redux/features/auth/authApi";

const UpdateProfile = () => {
  const { data: myData } = useGetMeQuery(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: myData?.data?.name || "",
      phone: myData?.data?.phone || "",
      address: myData?.data?.address || "",
      city: myData?.data?.city || "",
      country: myData?.data?.country || "",
      postalCode: myData?.data?.postalCode || "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    console.log("Updated Data:", formData);
    // Here, you can call an API to update user profile
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold text-primary-text mb-4">
        Update Profile
      </h2>
      <Card className=" p-6 rounded-2xl border-neutral-200">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <Label className=" text-primary-text font-medium" htmlFor="name">Full Name</Label>
            <div className="absolute left-3 top-10 text-primary-text">
              <User size={16} />
            </div>
            <Input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="pl-10 mt-1 border-neutral-200 "
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message as string}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="relative">
            <Label className=" text-primary-text font-medium" htmlFor="phone">Phone</Label>
            <div className="absolute left-3 top-10 text-primary-text">
              <Phone size={16} />
            </div>
            <Input
              id="phone"
              {...register("phone")}
              className="pl-10 mt-1 border-neutral-200 "
              placeholder="Enter phone number"
            />
          </div>

          {/* Address Field */}
          <div className="relative">
            <Label className=" text-primary-text font-medium" htmlFor="address">Address</Label>
            <div className="absolute left-3 top-10 text-primary-text">
              <MapPin size={16} />
            </div>
            <Input
              id="address"
              {...register("address")}
              className="pl-10 mt-1 border-neutral-200 "
              placeholder="Enter your address"
            />
          </div>

          {/* City Field */}
          <div className="relative">
            <Label className=" text-primary-text font-medium" htmlFor="city">City</Label>
            <div className="absolute left-3 top-10 text-primary-text">
              <Globe size={16} />
            </div>
            <Input
              id="city"
              {...register("city")}
              className="pl-10 mt-1 border-neutral-200 "
              placeholder="Enter your city"
            />
          </div>

          {/* Country Field */}
          <div className="relative">
            <Label className=" text-primary-text font-medium" htmlFor="country">Country</Label>
            <div className="absolute left-3 top-10 text-primary-text">
              <Globe size={16} />
            </div>
            <Input
              id="country"
              {...register("country")}
              className="pl-10 mt-1 border-neutral-200 "
              placeholder="Enter your country"
            />
          </div>

          {/* Postal Code Field */}
          <div className="relative">
            <Label className=" text-primary-text font-medium" htmlFor="postalCode">Postal Code</Label>
            <div className="absolute left-3 top-10 text-primary-text">
              <Asterisk size={16} />
            </div>
            <Input
              id="postalCode"
              {...register("postalCode")}
              className="pl-10 mt-1 border-neutral-200 "
              placeholder="Enter your postal code"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className=" flex gap-2 bg-secondary text-white">
            <Pencil size={16} /> Update Profile
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UpdateProfile;
