import { Editor } from "@/components/ui/Editor";
import { FormItem, FormLabel } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { BaseFieldProps } from "./InputField";
import { DetallesRichTextFields } from "./schemas/detalles";
import { InformacionGeneralRichTextFields } from "./schemas/informacion-general";

type RichTextFields = DetallesRichTextFields & InformacionGeneralRichTextFields

type RichTextFieldProps = BaseFieldProps<RichTextFields>

export function RichTextField({ field, label, itemStyle }: RichTextFieldProps) {
  const form = useFormContext<RichTextFields>()

  const handleOnChange = (text: string) => {
    form.setValue(field, text)
  }

  return (
    <FormItem className={itemStyle}>
      <FormLabel>{label}</FormLabel>
      <Editor onChange={handleOnChange}
      />
      {
        form.formState.errors[field]
        && <p className="text-xs text-red-500">{form.formState.errors[field].message}</p>
      }
    </FormItem>
  )
}
