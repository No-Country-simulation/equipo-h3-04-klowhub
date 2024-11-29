"use client"

import { generalInformationSchema, GeneralInformationSchema } from "@/components/forms/createProfile/schemas/general-information"
import { CreateProfileInputFields, CreateProfileRadioFields, CreateProfileSelectFields } from "@/components/forms/createProfile/schemas/type"
import { InputField } from "@/components/forms/multiStepForm/InputField"
import { RadioField } from "@/components/forms/multiStepForm/RadioField"
import { SelectField } from "@/components/forms/multiStepForm/SelectField"
import { Button } from "@/components/ui/Button"
import { Form } from "@/components/ui/form"
import { LENGUAJES, PLATAFORMA } from "@/constants/filters"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { FORM_STEPS_PATHS } from "../steps-paths"

export default function InformacionGeneralPage() {
  const router = useRouter()
  const form = useForm<GeneralInformationSchema>({
    resolver: zodResolver(generalInformationSchema)
  })

  const handleSubmit = (data: GeneralInformationSchema) => {
    console.log({ data });
    toast("Informacion guardada")
    router.replace(FORM_STEPS_PATHS[2])
  }

  return (
    <form className="grid grid-cols-2 gap-6" onSubmit={form.handleSubmit(handleSubmit)}>
      <Form {...form}>
        <InputField<CreateProfileInputFields>
          label="¿En qué áreas sos un experto?"
          placeholder="Elegí al menos un área"
          field="area"
          itemStyle="col-span-2"
        />
        <InputField<CreateProfileInputFields>
          label="¿Cuál es el costo de tu hora de mentoria?"
          placeholder="Ingresa el monto por hora"
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
          options={PLATAFORMA.map((l) => l)}
        />
        <SelectField<CreateProfileSelectFields>
          field="languague"
          label="¿En qué idiomas ofreces las mentorias?"
          options={LENGUAJES.map((l) => l)}
        />
        {/* <SelectField<CreateProfileSelectFields>
          field="area"
          label="¿En que área te especializas?"
          options={LENGUAJES.map((l) => l)}
        /> */}
        <Button className="col-span-2" size="big" type="submit">Continuar</Button>
      </Form>
    </form>
  )
}
