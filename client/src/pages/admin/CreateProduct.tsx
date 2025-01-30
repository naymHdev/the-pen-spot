import TPInput from "@/components/form/TPInput";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, Store } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const CreateProduct = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-2 text-xl font-semibold text-primary-text">
              <Store />
              Add New Product
            </div>
            <div>
              <Button
                type="submit"
                className=" flex items-center gap-3 border-none rounded-full px-6 hover:cursor-pointer bg-secondary text-primary-bg font-medium"
              >
                <Check />
                Submit
              </Button>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-10 justify-between">
            <div className=" col-span-1 md:col-span-3">
              <div className=" space-y-6">
                <Separator className=" font-semibold text-primary-text mb-8">
                  General Information
                </Separator>
                <TPInput
                  name="author"
                  type="text"
                  placeholder="Author name"
                  label="Author name"
                  register={register}
                />
                <TPInput
                  name="name"
                  type="text"
                  placeholder="Product name"
                  label="Product name"
                  register={register}
                />
              </div>
            </div>
            <div className=" col-span-2">
              <Separator className=" font-semibold text-primary-text mb-8">
                Upload Image
              </Separator>
              <div>
                <TPInput
                  name="images"
                  type="file"
                  label="Product Images"
                  register={register}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
