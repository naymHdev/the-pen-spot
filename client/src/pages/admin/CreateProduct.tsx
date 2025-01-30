import TPInput from "@/components/form/TPInput";
import { TPSelect } from "@/components/form/TPSelect";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
                  label="Author name"
                  register={register}
                />
                <TPInput
                  name="name"
                  type="text"
                  label="Product name"
                  register={register}
                />
                <TPInput
                  name="description"
                  type="text"
                  label="Product description"
                  register={register}
                />
                <TPInput
                  name="category"
                  type="text"
                  label="Product category"
                  register={register}
                />
                <TPInput
                  name="price"
                  type="number"
                  label="Product price"
                  register={register}
                />
                <TPInput
                  name="stockQuantity"
                  type="number"
                  label="Product stockQuantity"
                  register={register}
                />
                <TPInput
                  name="brand"
                  type="text"
                  label="Product brand"
                  register={register}
                />
                <TPInput
                  name="color"
                  type="text"
                  label="Product color"
                  register={register}
                />
                <TPInput
                  name="size"
                  type="text"
                  label="Product size"
                  register={register}
                />
                <TPInput
                  name="material"
                  type="text"
                  label="Product material"
                  register={register}
                />
                <TPInput
                  name="sku"
                  type="text"
                  label="Product sku"
                  register={register}
                />
                <TPInput
                  name="rating"
                  type="number"
                  label="Product rating"
                  register={register}
                />

                <div className="flex items-center space-x-2">
                  <Checkbox id="isFeatured" {...register("isFeatured")} />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary-text"
                  >
                    Product is featured?
                  </label>
                </div>
                <TPInput
                  name="tags"
                  type="text"
                  label="Product tags"
                  register={register}
                />
              </div>
            </div>
            <div className=" col-span-2">
              <Separator className=" font-semibold text-primary-text mb-8">
                Upload Image
              </Separator>
              <div className=" space-y-6">
                <TPInput
                  name="images"
                  type="file"
                  label="Product Images"
                  register={register}
                />
                <TPSelect
                  register={register}
                  name="status"
                  placeholder="Product Status"
                  options={[
                    { label: "Available", value: "available" },
                    { label: "Out of stock", value: "out_of_stock" },
                    { label: "Discontinued", value: "discontinued" },
                  ]}
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
