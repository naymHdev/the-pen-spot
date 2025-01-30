import TPInput from "@/components/form/TPInput";
import TPSelect from "@/components/form/TPSelect";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Check, Store } from "lucide-react";
import { useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const CreateProduct = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { handleSubmit, register, control, setValue } = useForm({
    defaultValues: {
      isFeatured: false,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const productData = {
      ...data,
      name: data.name,
      author: data.author,
      description: data.description,
      category: data.category,
      price: data.price,
      stockQuantity: data.stockQuantity,
      brand: data.brand,
      color: data.color,
      size: data.size,
      material: data.material,
      images: data.images,
      sku: data.sku,
      rating: data.rating,
      tags: data.tags,
      status: data.status,
    };

    console.log("productData", productData);
  };

  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <div>
                  <Textarea
                    className="px-4 py-3 bg-primary-bg rounded-lg mt-2 border-none"
                    placeholder="Type your product details here."
                    {...register("description")}
                  />
                </div>

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
                <Controller
                  name="images"
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <div>
                      <input
                        className="px-4 py-3 bg-primary-bg rounded-lg mt-2 border-none w-full"
                        type="file"
                        accept="image/*"
                        {...field}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            onChange(file);
                            const reader = new FileReader();
                            reader.onloadend = () =>
                              setImagePreview(reader.result as string);
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                      {imagePreview && (
                        <div>
                          <img
                            src={imagePreview}
                            alt="Preview"
                            style={{
                              width: "150px",
                              marginTop: "10px",
                              borderRadius: "8px",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                />

                <TPSelect
                  control={control}
                  name="category"
                  placeholder="Product category"
                  options={[
                    { label: "Notebooks", value: "Notebooks" },
                    { label: "Pens", value: "Pens" },
                    { label: "Pencils", value: "Pencils" },
                    { label: "Markers", value: "Markers" },
                    { label: "Erasers", value: "Erasers" },
                    { label: "Staplers", value: "Staplers" },
                    { label: "Folders", value: "Folders" },
                    { label: "Calculators", value: "Calculators" },
                    { label: "Paper", value: "Paper" },
                    { label: "Books", value: "Books" },
                    { label: "Other", value: "Other" },
                  ]}
                />
                <TPSelect
                  control={control}
                  name="status"
                  // {...register("status")}
                  placeholder="Product Status"
                  options={[
                    { label: "Available", value: "available" },
                    { label: "Out of stock", value: "out_of_stock" },
                    { label: "Discontinued", value: "discontinued" },
                  ]}
                />
                <TPInput
                  name="discount.percentage"
                  type="number"
                  label="Discount percentage"
                  register={register}
                />
                <TPInput
                  name="discount.validUntil"
                  type="date"
                  label="Valid Until"
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
                <div className="flex items-center space-x-2">
                  <Checkbox
                    onCheckedChange={(checked) =>
                      setValue("isFeatured", checked)
                    }
                    id="isFeatured"
                    {...register("isFeatured")}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary-text"
                  >
                    Product is featured?
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
