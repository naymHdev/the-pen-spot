import { Controller, useFormContext } from "react-hook-form";
import clsx from "clsx";
import { Label } from "../ui/label";
import { Select } from "../ui/select";

type TSelectProps = {
  name: string;
  label?: string;
  options: { value: string; label: string; disabled?: boolean }[];
  defaultValue?: string;
  disabled?: boolean;
  mode?: "multiple" | "tags";
};

const TPSelect = ({
  label,
  name,
  options,
  defaultValue,
  disabled,
  mode,
}: TSelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2">
      {label && <Label htmlFor={name}>{label}</Label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field }) => (
          <Select
            {...field}
            id={name}
            options={options}
            defaultValue={defaultValue}
            disabled={disabled}
            mode={mode}
            className={clsx("w-full", { "border-red-500": errors[name] })}
          />
        )}
      />
      {errors[name] && <p className="text-red-500">{errors[name]?.message}</p>}
    </div>
  );
};

export default TPSelect;
