import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext } from "react-hook-form";
import { BaseFieldProps } from "./InputField";
import { InformacionGeneralRadioFields, InformacionGeneralSchema } from "./schemas/informacion-general";

type RadioFieldProps = BaseFieldProps<InformacionGeneralRadioFields> & {
  options: string[];
}

export function RadioField({ field, label, options }: RadioFieldProps) {
  const form = useFormContext<InformacionGeneralSchema>()

  return (
    <FormField
      control={form.control}
      name={field}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
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
