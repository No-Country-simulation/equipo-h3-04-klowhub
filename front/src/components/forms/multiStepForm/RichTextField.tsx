import { Editor } from "@/components/ui/Editor";
import { FormItem, FormLabel } from "@/components/ui/form";
import { FieldValues, useFormContext } from "react-hook-form";
import { BaseFieldProps } from "./InputField";

type RichTextFieldProps<T> = BaseFieldProps<T>

export function RichTextField<T extends FieldValues>({ field, label, itemStyle }: RichTextFieldProps<T>) {
  const form = useFormContext<T>()

  const handleOnChange = (text: string) => {
    form.setValue(field as any, text as any)
  }

  return (
    <FormItem className={itemStyle}>
      <FormLabel>{label}</FormLabel>
      <Editor onChange={handleOnChange} defaultValue={form.getValues(field as any)}
      />
      {
        form.formState.errors[field]
        && <p className="text-xs text-red-500">{form.formState.errors[field].message as any}</p>
      }
    </FormItem>
  )
}
