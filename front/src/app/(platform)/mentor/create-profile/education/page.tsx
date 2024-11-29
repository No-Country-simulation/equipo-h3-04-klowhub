"use client"

import { ConfirmationDialog } from "@/components/forms/ConfirmationDialog"
import { educationSchema, EducationSchema } from "@/components/forms/createProfile/schemas/education"
import { CreateProfileRichTextFields } from "@/components/forms/createProfile/schemas/type"
import { ErrorMessage } from "@/components/forms/multiStepForm/ErrorMessage"
import { FileField } from "@/components/forms/multiStepForm/FileField"
import { RichTextField } from "@/components/forms/multiStepForm/RichTextField"
import { Button } from "@/components/ui/Button"
import { Form, FormLabel } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDisclosure } from "@nextui-org/react"
import { useForm } from "react-hook-form"

export default function EducationPage() {
  const form = useForm<EducationSchema>({
    resolver: zodResolver(educationSchema)
  })

  const dialogState = useDisclosure()

  const handleSubmit = (data: EducationSchema) => {
    console.log({ data });
    dialogState.onOpen()
  }

  return (
    <>
      <ConfirmationDialog {...dialogState} />
      <form className="grid grid-cols-2 gap-6" onSubmit={form.handleSubmit(handleSubmit)}>
        <p className="col-span-2">Detallá la formación académica y las certificaciones que avalen tu conocimiento.</p>
        <Form {...form}>
          <RichTextField<CreateProfileRichTextFields>
            field="academicEducation"
            label="Ingresá tu formación académica"
            itemStyle="col-span-2"
          />
          <section className='flex flex-col gap-4'>
            <FormLabel>Agregá certificaciones relevantes</FormLabel>
            <FileField onDrop={(file) => form.setValue("certifications", file)} />
            <ErrorMessage message={form.formState.errors.certifications?.message} />
          </section>
          <Button className="col-span-2" size="big" type="submit">Continuar</Button>
        </Form>
      </form>
    </>
  )
}
