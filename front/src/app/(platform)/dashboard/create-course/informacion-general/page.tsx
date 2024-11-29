"use client"

import { InformacionGeneralSchema, informacionGeneralSchema } from '@/components/forms/createCourse/schemas/informacion-general'
import { CreateCourseInputFields, CreateCourseRadioFields, CreateCourseRichTextFields, CreateCourseSelectFields } from '@/components/forms/createCourse/schemas/type'
import { InputField } from '@/components/forms/multiStepForm/InputField'
import { RadioField } from '@/components/forms/multiStepForm/RadioField'
import { RichTextField } from '@/components/forms/multiStepForm/RichTextField'
import { SelectField } from '@/components/forms/multiStepForm/SelectField'
import { Form } from '@/components/ui/form'
import { FUNCIONALIDADES, HERRAMIENTAS_Y_PLATAFORMAS, LENGUAJES, PILAR_DE_CONTENIDO, SECTOR } from '@/constants/filters'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'
import { FORM_STEPS_PATHS } from "../steps-paths"

export default function InformacionGeneralPage() {
  const router = useRouter()
  const form = useForm<InformacionGeneralSchema>({
    resolver: zodResolver(informacionGeneralSchema)
  })

  const handleSubmit = (data: InformacionGeneralSchema) => {
    console.log({ data });
    toast("Progreso guardado!")
    router.replace(FORM_STEPS_PATHS[2])
  }

  return (
    <form className="grid grid-cols-2 gap-12" onSubmit={form.handleSubmit(handleSubmit)}>
      <Form {...form}>
        <InputField<CreateCourseInputFields>
          itemStyle='col-span-2'
          placeholder='Nombrá tu curso o lección'
          label='Título del curso/lección'
          field='title'
        />
        <RadioField<CreateCourseRadioFields>
          field='contentType'
          options={["gratuito", "pago"]}
          label='¿Qué tipo de contenido estás buscando: gratuito o premium?' />
        <RadioField<CreateCourseRadioFields>
          field='creationType'
          options={["curso", "lección"]}
          label='Seleccioná si vas a crear un curso  o una lección.' />
        <RichTextField<CreateCourseRichTextFields>
          field='description'
          label='Contá de qué trata, en no más de 3 líneas.'
          itemStyle='col-span-2'
        />
        <RadioField<CreateCourseRadioFields>
          field='skillLevel'
          options={["básico", "intermedio"]}
          label='Nivel de competencia' />
        <RadioField<CreateCourseRadioFields>
          field='platform'
          options={["appsheet", "powerapps"]}
          label='Plataforma' />
        <SelectField<CreateCourseSelectFields>
          options={LENGUAJES.map(l => l)}
          label='Elige el idioma del curso'
          field='language'
        />
        <SelectField<CreateCourseSelectFields>
          options={SECTOR.map(l => l)}
          label='Elige el sector al que deseas dirigir tu curso'
          field='sector'
        />
        <SelectField<CreateCourseSelectFields>
          options={PILAR_DE_CONTENIDO.map(l => l)}
          label='Define el contenido de tu curso'
          field='contentPillar'
        />
        <SelectField<CreateCourseSelectFields>
          options={HERRAMIENTAS_Y_PLATAFORMAS.map(l => l)}
          label='Herramientas y plataformas'
          field='toolsAndPlatforms'
        />
        <SelectField<CreateCourseSelectFields>
          options={FUNCIONALIDADES.map(l => l)}
          label='Funcionalidades'
          field='functionalities'
        />
        <InputField
          placeholder='etiquetas'
          label='Agrega etiquetas relacionadas'
          field='labels'
        />
      </Form>
      <Button className='col-span-2' type="submit">Continuar</Button>
    </form>
  )
}


