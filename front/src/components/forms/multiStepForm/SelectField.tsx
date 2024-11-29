import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FieldValues, useFormContext } from "react-hook-form";
import { BaseFieldProps } from "../createCourse/InputField";

interface SelectFieldProps<T> extends BaseFieldProps<T> {
  options: string[];
}

export function SelectField<T extends FieldValues>({ field, label, options }: SelectFieldProps<T>) {
  const form = useFormContext<T>()

  return (
    <FormField
      control={form.control}
      name={field as any}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="bg-white placeholder:text-black/20 text-background">
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {
                options.map((option, index) => (
                  <SelectItem key={index} value={option}>{option}</SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
