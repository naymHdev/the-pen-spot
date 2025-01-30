/* eslint-disable @typescript-eslint/no-explicit-any */

import { clsx } from "clsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface TPSelectProps {
  name: string;
  options: { label: string; value: string }[];
  register: any;
  placeholder?: string;
  className?: string;
}

export function TPSelect({
  name,
  options,
  register,
  placeholder,
  className,
}: TPSelectProps) {
  return (
    <Select {...register(name)}>
      <SelectTrigger
        className={clsx(
          "px-4 py-3 bg-primary-bg rounded-lg mt-2 border-none",
          className
        )}
      >
        <SelectValue placeholder={placeholder || "Select an option"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className=" bg-primary-bg">
          <SelectLabel>{placeholder || "Options"}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
