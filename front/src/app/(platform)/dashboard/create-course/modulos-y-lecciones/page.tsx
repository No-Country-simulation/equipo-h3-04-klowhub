"use client"

import { modulosSchema, ModulosSchema } from '@/components/forms/createCourse/schemas/modulos-y-lecciones'
import { CreateCourseInputFields, CreateCourseRichTextFields } from '@/components/forms/createCourse/schemas/type'
import { InputField } from '@/components/forms/multiStepForm/InputField'
import { RichTextField } from '@/components/forms/multiStepForm/RichTextField'
import { Button } from '@/components/ui/Button'
import { Form } from '@/components/ui/form'
import { useCreateCourseStore } from '@/store/createCourseStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'
import { FORM_STEPS_PATHS } from "../steps-paths"
import { LeccionesForm } from './LeccionesForm'

export default function ModulosYLeccionesPage() {
  const state = useCreateCourseStore(state => state.modulesAndLessons)!
  const setState = useCreateCourseStore(state => state.setModulesAndLessons)

  const router = useRouter()
  const form = useForm<ModulosSchema>({
    resolver: zodResolver(modulosSchema),
    defaultValues: {
      ...state,
      lessons: [...state?.lessons ?? [], {
        lessonAditionalResources: [],
        lessonCoverImages: [],
        lessonDescription: "",
        lessionTitle: "",
      }],
    }
  })

  const handleSubmit = (data: ModulosSchema) => {
    console.log({ data });
    setState(data)
    toast("Progreso guardado!")
    router.replace(FORM_STEPS_PATHS[4])
  }

  return (
    <form className="grid grid-cols-2 gap-12" onSubmit={form.handleSubmit(handleSubmit)}>
      <Form {...form}>
        <InputField<CreateCourseInputFields>
          itemStyle='col-span-2'
          placeholder='Nombrá tu modulo'
          label='Título del módulo'
          field='moduleTitle'
        />
        <RichTextField<CreateCourseRichTextFields>
          label='Descripción'
          field='moduleDescription'
          itemStyle='col-span-2'
        />
        <LeccionesForm />
      </Form>
      <Button size={"big"} className='col-span-2' type="submit">Continuar</Button>
    </form>
  )
}


