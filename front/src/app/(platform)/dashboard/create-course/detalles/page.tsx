"use client"

import { detallesSchema, DetallesSchema } from '@/components/forms/createCourse/schemas/detalles'
import { CreateCourseRichTextFields } from '@/components/forms/createCourse/schemas/type'
import { ErrorMessage } from '@/components/forms/multiStepForm/ErrorMessage'
import { FileField } from '@/components/forms/multiStepForm/FileField'
import { RichTextField } from '@/components/forms/multiStepForm/RichTextField'
import { Button } from '@/components/ui/Button'
import { Form } from '@/components/ui/form'
import { useCreateCourseStore } from '@/store/createCourseStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'
import { FORM_STEPS_PATHS } from "../steps-paths"

export default function DetallesPage() {
  const state = useCreateCourseStore(state => state.details)!
  const setState = useCreateCourseStore(state => state.setDetails)

  const router = useRouter()
  const form = useForm<DetallesSchema>({
    resolver: zodResolver(detallesSchema),
    defaultValues: state
  })

  const handleSubmit = (data: DetallesSchema) => {
    console.log({ data });
    setState(data)
    toast("Progreso guardado!")
    router.replace(FORM_STEPS_PATHS[3])
  }

  return (
    <form className="grid grid-cols-2 gap-12 w-full" onSubmit={form.handleSubmit(handleSubmit)}>
      <Form {...form}>
        <RichTextField<CreateCourseRichTextFields>
          label='Decinos qué van a aprender tus estudiantes al finalizar el curso.'
          field='learningOutcomes'
          itemStyle='col-span-2'
        />
        <RichTextField<CreateCourseRichTextFields>
          label='¿Qué necesitan saber o tener tus estudiantes antes de empezar?'
          field='prerequisites'
          itemStyle='col-span-2'
        />
        <RichTextField<CreateCourseRichTextFields>
          label='Hacé una descripción detallada del contenido y de los beneficios que ofrece.'
          field='detailedDescription'
          itemStyle='col-span-2'
        />
        <section className='flex flex-col gap-2'>
          <FileField onDrop={(file) => form.setValue("coverImage", file[0])} />
          <ErrorMessage message={form.formState.errors.coverImage?.message?.toString()} />
        </section>
      </Form>
      <Button className='col-span-2' type="submit">Continuar</Button>
    </form>
  )
}


