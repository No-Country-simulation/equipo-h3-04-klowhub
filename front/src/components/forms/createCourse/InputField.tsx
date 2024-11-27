import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input, InputProps } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";
import { InformacionGeneralInputFields, InformacionGeneralSchema } from "./schemas/informacion-general";

export interface BaseFieldProps<T> {
  field: keyof T,
  label: string
}

type InputFieldProps = BaseFieldProps<InformacionGeneralInputFields> & InputProps

export function InputField({ field, label, ...args }: InputFieldProps) {
  const form = useFormContext<InformacionGeneralSchema>()

  return (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) =>
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...args} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      } />
  )
}
