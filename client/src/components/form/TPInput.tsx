import { Controller } from "react-hook-form";
import clsx from "clsx";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormControl } from "../ui/form";

interface InputProps {
  name: string;
  label: string;
  control: any;
  rules?: any;
  placeholder: string;
  type?: string;
  error?: string;
}

const TPInput: React.FC<InputProps> = ({
  name,
  label,
  control,
  rules,
  placeholder,
  type,
  error,
}) => {
  return (
    <div className="space-y-2">
      <FormControl>
        <Label htmlFor={name}>{label}</Label>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <Input
              id={name}
              type={type}
              placeholder={placeholder}
              {...field}
              className={clsx("w-full", { "border-red-500": error })}
            />
          )}
        />
      </FormControl>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default TPInput;
