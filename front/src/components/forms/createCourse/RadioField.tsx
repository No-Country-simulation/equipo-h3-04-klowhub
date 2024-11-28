import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { BaseFieldProps } from "./InputField";
import { InformacionGeneralRadioFields } from "./schemas/informacion-general";
import { PromocionesRadioFields } from "./schemas/promociones";

type RadioFields = InformacionGeneralRadioFields & PromocionesRadioFields

type RadioFieldProps = BaseFieldProps<RadioFields> & {
  options: string[];
}

export function RadioField({ field, label, options, itemStyle }: RadioFieldProps) {
  const form = useFormContext<RadioFields>()

  return (
    <FormField
      control={form.control}
      name={field}
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
