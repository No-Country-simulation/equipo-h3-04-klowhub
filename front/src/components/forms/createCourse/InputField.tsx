import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input, InputProps } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";
import { InformacionGeneralInputFields } from "./schemas/informacion-general";
import { ModulosInputFields } from "./schemas/modulos-y-lecciones";

export interface BaseFieldProps<T> {
  field: keyof T,
  label: string,
  itemStyle?: string;
}

type InputFields = InformacionGeneralInputFields & ModulosInputFields

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
            <Input className="max-w-[400px]" {...args} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      } />
  )
}
