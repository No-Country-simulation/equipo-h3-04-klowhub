"use client"

import { InputField } from '@/components/forms/createCourse/InputField'
import { RichTextField } from '@/components/forms/createCourse/RichTextField'
import { modulosSchema, ModulosSchema } from '@/components/forms/createCourse/schemas/modulos-y-lecciones'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'
import { FORM_STEPS_PATHS } from "../steps-paths"
import { LeccionesForm } from './LeccionesForm'

export default function ModulosYLeccionesPage() {
  const router = useRouter()
  const form = useForm<ModulosSchema>({
    resolver: zodResolver(modulosSchema),
    defaultValues: {
      moduleDescription: "",
      moduleTitle: "",
      lessons: [{
        lessonAditionalResources: [],
        lessonCoverImages: [],
        lessonDescription: "",
        lessionTitle: "",
      }],
    }
  })

  const handleSubmit = (data: ModulosSchema) => {
    console.log({ data });
    toast("Progreso guardado!")
    router.replace(FORM_STEPS_PATHS[4])
  }

  return (
    <form className="grid grid-cols-2 gap-12" onSubmit={form.handleSubmit(handleSubmit)}>
      <Form {...form}>
        <InputField
          itemStyle='col-span-2'
          placeholder='Nombrá tu modulo'
          label='Título del módulo'
          field='moduleTitle'
        />
        <RichTextField
          label='Descripción'
          field='moduleDescription'
          itemStyle='col-span-2'
        />
        <LeccionesForm />
      </Form>
      <Button className='col-span-2' type="submit">Continuar</Button>
    </form>
  )
}

