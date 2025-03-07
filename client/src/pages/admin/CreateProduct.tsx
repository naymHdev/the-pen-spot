import TPInput from "@/components/form/TPInput";
import TPSelect from "@/components/form/TPSelect";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useAddProductMutation } from "@/redux/features/products/productsApi";
import { Check, Store } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const defaultValues = {
  name: "Graphing Calculators",
  author: "GraphIt",
  brand: "GraphPro",
  description:
    "Graphing calculator with a large display for complex calculations.",
  category: "Calculators",
  price: 1200,
  stockQuantity: 20,
  color: "Gray",
  size: "Standard",
  material: "Plastic",
  sku: "c001ee45",
  rating: 4,
  isFeatured: true,
  tags: ["graphing", "calculator", "complex"],
  discount: { percentage: "10", validUntil: "2026-11-15T23:59:59Z" },
  status: "available",
};
const CreateProduct = () => {
  const [addProduct] = useAddProductMutation();

  const { handleSubmit, register, control, setValue } = useForm({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");
    const productData = {
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
      sku: data.sku,
      rating: data.rating,
      isFeatured: false,
      tags: data.tags,
      status: data.status,
      discount: data.discount?.percentage
        ? {
            percentage: data.discount.percentage.toString(),
            validUntil: data.discount.validUntil
              ? new Date(data.discount.validUntil).toISOString()
              : new Date().toISOString(),
          }
        : undefined,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(productData));
    formData.append("file", data?.productImg[0]);

    console.log("formData", formData.append("file", data?.productImg?.name));

    try {
      const res = await addProduct(formData);
      console.log("response", res);

      if (res.data) {
        toast.success(res.data.message, { id: toastId });
      }
    } catch {
      toast.error("Something went wrong", { id: toastId });
    }
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
                className=" flex items-center border-none rounded-full px-6 hover:cursor-pointer bg-secondary text-primary-bg font-medium"
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
                <TPInput name="productImg" type="file" register={register} />
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
                  type="text"
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
                      setValue("isFeatured", checked === true)
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
