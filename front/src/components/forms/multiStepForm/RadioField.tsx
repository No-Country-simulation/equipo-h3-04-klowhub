import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { FieldValues, useFormContext } from "react-hook-form";
import { BaseFieldProps } from "./InputField";

type RadioFieldProps<T> = BaseFieldProps<T> & {
  options: string[];
}

export function RadioField<T extends FieldValues>({ field, label, options, itemStyle }: RadioFieldProps<T>) {
  const form = useFormContext<T>()

  return (
    <FormField
      control={form.control}
      name={field as any}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col gap-2", itemStyle)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              className="flex flex-col space-y-1"
            >
              {
                options.map((option) =>
                  <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={option} />
                    </FormControl>
                    <FormLabel className="font-normal capitalize">
                      {option}
                    </FormLabel>
                  </FormItem>
                )
              }
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
