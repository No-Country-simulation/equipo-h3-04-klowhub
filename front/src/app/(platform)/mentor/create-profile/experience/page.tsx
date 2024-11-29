"use client"

import { experienceSchema, ExperienceSchema } from "@/components/forms/createProfile/schemas/experience"
import { CreateProfileRichTextFields, CreateProfileSelectFields } from "@/components/forms/createProfile/schemas/type"
import { RichTextField } from "@/components/forms/multiStepForm/RichTextField"
import { SelectField } from "@/components/forms/multiStepForm/SelectField"
import { Button } from "@/components/ui/Button"
import { Form } from "@/components/ui/form"
import { HERRAMIENTAS_Y_PLATAFORMAS, SECTOR } from "@/constants/filters"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { FORM_STEPS_PATHS } from "../steps-paths"

export default function ExperiencePage() {
  const router = useRouter()
  const form = useForm<ExperienceSchema>({
    resolver: zodResolver(experienceSchema)
  })

  const handleSubmit = (data: ExperienceSchema) => {
    console.log({ data });
    router.replace(FORM_STEPS_PATHS[3])
  }

  return (
    <form className="grid grid-cols-2 gap-6" onSubmit={form.handleSubmit(handleSubmit)}>
      <Form {...form}>
        <SelectField<CreateProfileSelectFields>
          field="sector"
          label="Seleccioná los sectores en las que tenés experiencia"
          options={SECTOR.map((l) => l)}
          itemStyle="col-span-2"
        />
        <RichTextField<CreateProfileRichTextFields>
          field="sectorExperience"
          label="Describa la experiencia que posee en estos sectores."
          itemStyle="col-span-2"
        />
        <SelectField<CreateProfileSelectFields>
          field="tools"
          label="¿Con qué herramientas tenés experiencia?"
          options={HERRAMIENTAS_Y_PLATAFORMAS.map((l) => l)}
          itemStyle="col-span-2"
        />
        <RichTextField<CreateProfileRichTextFields>
          field="toolsExperience"
          label="Describe tus conocimientos con las herramientas que mencionaste e indica cuántos años de experiencia tienes en cada una."
          itemStyle="col-span-2"
        />
        <Button size="big" type="submit">Continuar</Button>
      </Form>
    </form>
  )
}
