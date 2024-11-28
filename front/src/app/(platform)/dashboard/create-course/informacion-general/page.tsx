"use client"

import { InputField } from '@/components/forms/createCourse/InputField'
import { RadioField } from '@/components/forms/createCourse/RadioField'
import { RichTextField } from '@/components/forms/createCourse/RichTextField'
import { InformacionGeneralSchema, informacionGeneralSchema } from '@/components/forms/createCourse/schemas/informacion-general'
import { Form } from '@/components/ui/form'
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
        <InputField
          itemStyle='col-span-2'
          placeholder='Nombrá tu curso o lección'
          label='Título del curso/lección'
          field='title'
        />
        <RadioField
          field='contentType'
          options={["gratuito", "pago"]}
          label='¿Qué tipo de contenido estás buscando: gratuito o premium?' />
        <RadioField
          field='creationType'
          options={["curso", "lección"]}
          label='Seleccioná si vas a crear un curso  o una lección.' />
        <RichTextField
          field='description'
          label='Contá de qué trata, en no más de 3 líneas.'
          itemStyle='col-span-2'
        />
        <RadioField
          field='skillLevel'
          options={["básico", "intermedio"]}
          label='Nivel de competencia' />
        <RadioField
          field='platform'
          options={["appsheet", "powerapps"]}
          label='Plataforma' />
        <InputField
          placeholder='Seleccionar idioma'
          label='Elige el idioma del curso'
          field='language'
        />
        <InputField
          placeholder='Seleccionar sector'
          label='Elige el sector al que deseas dirigir tu curso'
          field='sector'
        />
        <InputField
          placeholder='Pilar de contenido'
          label='Define el contenido de tu curso'
          field='contentPillar'
        />
        <InputField
          placeholder='Herramientas y plataformas'
          label='Herramientas y plataformas'
          field='toolsAndPlatforms'
        />
        <InputField
          placeholder='Funcionalidades'
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


