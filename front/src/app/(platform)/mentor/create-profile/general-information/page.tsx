"use client"

import { InputField } from "@/components/forms/createCourse/InputField"
import { RadioField } from "@/components/forms/createCourse/RadioField"
import { generalInformationSchema, GeneralInformationSchema } from "@/components/forms/createProfile/schemas/general-information"
import { CreateProfileInputFields, CreateProfileRadioFields, CreateProfileSelectFields } from "@/components/forms/createProfile/schemas/type"
import { SelectField } from "@/components/forms/multiStepForm/SelectField"
import { Button } from "@/components/ui/Button"
import { Form } from "@/components/ui/form"
import { LENGUAJES } from "@/constants/filters"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export default function InformacionGeneralPage() {
  const form = useForm<GeneralInformationSchema>({
    resolver: zodResolver(generalInformationSchema)
  })

  const handleSubmit = (data: GeneralInformationSchema) => {
    console.log({ data });
  }

  return (
    <form className="grid grid-cols-2 gap-6" onSubmit={form.handleSubmit(handleSubmit)}>
      <Form {...form}>
        <InputField<CreateProfileInputFields>
          label="¿En qué áreas sos un experto?"
          field="area"
          itemStyle="col-span-2"
        />
        <InputField<CreateProfileInputFields>
          label="¿Cuál es el costo de tu hora de mentoria?"
          itemStyle="col-span-2"
          field="pricePerHour"
          type="number"
        />
        <RadioField<CreateProfileRadioFields>
          field="expertiseLevel"
          label="Indica tu nivel de expertise."
          options={["junior", "mid-level", "senior"]}
        />
        <RadioField<CreateProfileRadioFields>
          field="platform"
          label="¿Con que plataformas sueles trabajar?"
          options={["AppSheet", "Powerapps"]}
        />
        <SelectField<CreateProfileSelectFields>
          field="languague"
          label="¿En qué idiomas ofreces las mentorias?"
          options={LENGUAJES.map((l) => l)}
        />
        <SelectField<CreateProfileSelectFields>
          field="area"
          label="¿En que área te especializas?"
          options={LENGUAJES.map((l) => l)}
        />
        <Button type="submit">Continuar</Button>
      </Form>
    </form>
  )
}
