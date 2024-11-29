import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input, InputProps } from "@nextui-org/react";
import { FieldValues, useFormContext } from "react-hook-form";

export interface BaseFieldProps<T> {
  field: keyof T,
  label: string,
  itemStyle?: string;
}

type InputFieldProps<T> = BaseFieldProps<T> & InputProps;

export function InputField<T extends FieldValues>({ field, label, itemStyle, ...args }: InputFieldProps<T>) {
  const form = useFormContext<T>()

  return (
    <FormField
      control={form.control}
      name={field as any}
      render={({ field }) =>
        <FormItem className={itemStyle}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input className="max-w-[400px]" {...args} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      } />
  )
}
