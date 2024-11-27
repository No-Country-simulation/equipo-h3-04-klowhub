import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input, InputProps } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";
import { DetallesInputFields } from "./schemas/detalles";
import { InformacionGeneralInputFields } from "./schemas/informacion-general";

export interface BaseFieldProps<T> {
  field: keyof T,
  label: string,
  itemStyle?: string;
}

type InputFields = InformacionGeneralInputFields & DetallesInputFields

type InputFieldProps = BaseFieldProps<InputFields> & InputProps

export function InputField({ field, label, itemStyle, ...args }: InputFieldProps) {
  const form = useFormContext<InputFields>()

  return (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) =>
        <FormItem className={itemStyle}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...args} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      } />
  )
}
