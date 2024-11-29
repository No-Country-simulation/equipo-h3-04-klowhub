"use client"

import { ErrorMessage } from "@/components/forms/createCourse/ErrorMessage"
import { FileField } from "@/components/forms/createCourse/FileField"
import { RichTextField } from "@/components/forms/createCourse/RichTextField"
import { educationSchema, EducationSchema } from "@/components/forms/createProfile/schemas/education"
import { CreateProfileRichTextFields } from "@/components/forms/createProfile/schemas/type"
import { Button } from "@/components/ui/Button"
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function EducationPage() {
  const form = useForm<EducationSchema>({
    resolver: zodResolver(educationSchema)
  })

  const handleSubmit = (data: EducationSchema) => {
    console.log({ data });
    toast("PERFIL CREADO")
  }

  return (
    <form className="grid grid-cols-2 gap-6" onSubmit={form.handleSubmit(handleSubmit)}>
      <p className="col-span-2">Detallá la formación académica y las certificaciones que avalen tu conocimiento.</p>
      <Form {...form}>
        <RichTextField<CreateProfileRichTextFields>
          field="academicEducation"
          label="Ingresá tu formación académica"
          itemStyle="col-span-2"
        />
        <section className='flex flex-col gap-2'>
          <FileField onDrop={(file) => form.setValue("certifications", file)} />
          <ErrorMessage message={form.formState.errors.certifications?.message} />
        </section>
        <Button className="col-span-2" size="big" type="submit">Continuar</Button>
      </Form>
    </form>
  )
}
