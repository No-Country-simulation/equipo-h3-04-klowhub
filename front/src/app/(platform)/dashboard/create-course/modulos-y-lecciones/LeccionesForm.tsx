"use client"

import { ModulosSchema } from "@/components/forms/createCourse/schemas/modulos-y-lecciones"
import { ErrorMessage } from "@/components/forms/multiStepForm/ErrorMessage"
import { FileField } from "@/components/forms/multiStepForm/FileField"
import { Editor } from "@/components/ui/Editor"
import { FormItem, FormLabel } from "@/components/ui/form"
import { Section } from "@/components/ui/Section"
import { Button, Input } from "@nextui-org/react"
import { XIcon } from "lucide-react"
import { useFieldArray, useFormContext } from "react-hook-form"
import { toast } from "sonner"

export function LeccionesForm() {
  const form = useFormContext<ModulosSchema>()

  const { fields: lessonFields, append: addLesson, remove: removeLesson } = useFieldArray({
    control: form.control,
    name: 'lessons',
  });

  const handleDeleteImage = (lessonIndex: number, imageIndex: number) => {
    const prevImages = form.watch(`lessons.${lessonIndex}.lessonCoverImages`) ?? []
    form.setValue(`lessons.${lessonIndex}.lessonCoverImages`, prevImages.filter((_, i) => i !== imageIndex))
  }

  return (
    <>
      {lessonFields.map((lesson, index) => (
        <Section key={lesson.id} className='col-span-2  gap-6'>
          <FormItem>
            <FormLabel htmlFor={`lessons.${index}.lessionTitle`}>Lesson Title</FormLabel>
            <Input
              placeholder='Nombrá tu curso o lección'
              {...form.register(`lessons.${index}.lessionTitle`)}
              id={`lessons.${index}.lessionTitle`}
              className='max-w-[400px]'
            />
            <ErrorMessage
              message={form.formState.errors.lessons?.[index]?.lessionTitle?.message} />
          </FormItem>

          {/* Lesson Description */}
          <FormItem>
            <FormLabel>Lesson Description</FormLabel>
            <Editor onChange={(value) => form.setValue(`lessons.${index}.lessonDescription`, value)} />
            <ErrorMessage
              message={form.formState.errors.lessons?.[index]?.lessonDescription?.message} />
          </FormItem>

          {/* Lesson Cover Images */}
          <FormItem>
            <FormLabel>Contenido de la lección</FormLabel>
            <Input className='max-w-[400px]' />
          </FormItem>

          <ul className='grid grid-cols-3 gap-4'>
            {
              form.watch(`lessons.${index}.lessonCoverImages`).map((imageFile, imageIndex) => {
                const imageSrc = URL.createObjectURL(imageFile)
                return (
                  <figure key={imageIndex} className='group relative rounded-lg overflow-hidden bg-black/20'>
                    <div className='absolute inset-0 bg-black/40 transition-opacity opacity-0 group-hover:opacity-100 p-3 flex justify-end'>
                      <button
                        className='size-5 flex items-center justify-center rounded-full bg-red-600'
                        onClick={() => handleDeleteImage(index, imageIndex)}
                        type='button'
                      >
                        <XIcon className='text-white' />
                      </button>
                    </div>
                    <img className='w-full h-full object-contain' src={imageSrc} />
                  </figure>
                )
              })
            }
            {
              form.watch(`lessons.${index}.lessonCoverImages`).length < 3 &&
              <section className='flex flex-col gap-2'>
                <FileField maxFiles={3} onDropRejected={() => toast("Maximo 3 imagenes")} onDrop={(file) => form.setValue(`lessons.${index}.lessonCoverImages`, file)} />
                <ErrorMessage
                  message={form.formState.errors.lessons?.[index]?.lessonCoverImages?.message} />
              </section>
            }
          </ul>

          <FormItem>
            <FormLabel>Contenido de la lección</FormLabel>
            <section className='grid grid-cols-3 gap-4'>
              <FileField
                onDrop={(file) => form.setValue(`lessons.${index}.lessonAditionalResources`, file)} />
            </section>
            <ErrorMessage
              message={form.formState.errors.lessons?.[index]?.lessonAditionalResources?.message}
            />
          </FormItem>

          <footer className='self-end flex gap-4'>
            <Button
              type="button"
              onClick={() => addLesson({
                lessionTitle: '',
                lessonDescription: '',
                lessonCoverImages: [],
                lessonAditionalResources: []
              })}>
              Agregar lección
            </Button>
            <Button
              disabled={form.watch("lessons").length < 2}
              onClick={() => removeLesson(index)}
              type="button"
            >
              Borrar
            </Button>
            <Button type="button" onClick={() => { }}>
              Guardar
            </Button>
          </footer>
        </Section>
      ))}
    </>
  )
}
