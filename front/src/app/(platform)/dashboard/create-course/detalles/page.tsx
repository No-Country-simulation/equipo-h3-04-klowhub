"use client"

import { FileField } from '@/components/forms/createCourse/FileField'
import { InputField } from '@/components/forms/createCourse/InputField'
import { detallesSchema, DetallesSchema } from '@/components/forms/createCourse/schemas/detalles'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'
import { FORM_STEPS_PATHS } from "../steps-paths"

export default function InformacionGeneralPage() {
  const router = useRouter()
  const form = useForm<DetallesSchema>({
    resolver: zodResolver(detallesSchema)
  })

  const handleSubmit = (data: DetallesSchema) => {
    console.log({ data });
    toast("Progreso guardado!")
    router.replace(FORM_STEPS_PATHS[3])
  }

  return (
    <form className="grid grid-cols-2 gap-12" onSubmit={form.handleSubmit(handleSubmit)}>
      <Form {...form}>
        <p className='col-span-2 text-red-300'>Reemplazar estos inputs por algun componente de markdown</p>
        <InputField
          itemStyle='col-span-2'
          placeholder='Escribie una descripción básica del proyecto'
          label='Decinos qué van a aprender tus estudiantes al finalizar el curso.'
          field='learningOutcomes'
        />
        <InputField
          itemStyle='col-span-2'
          placeholder='¿Qué necesitan saber o tener tus estudiantes antes de empezar?'
          label='Requisitos previos'
          field='prerequisites'
        />
        <InputField
          itemStyle='col-span-2'
          placeholder='Nombrá tu curso o lección'
          label='Hacé una descripción detallada del contenido y de los beneficios que ofrece.'
          field='detailedDescription'
        />
        <section className='flex flex-col gap-2'>
          <FileField onDrop={(file) => form.setValue("coverImage", file[0])} />
          {form.formState.errors.coverImage && <p className='text-red-500 text-xs'>{form.formState.errors.coverImage.message}</p>}
        </section>
      </Form>
      <Button className='col-span-2' type="submit">Continuar</Button>
    </form>
  )
}


