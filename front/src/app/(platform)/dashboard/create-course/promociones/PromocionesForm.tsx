"use client"

import CourseCard from '@/components/cards/course.card'
import { Tabs } from '@/components/dashboard/my-projects/MyProjectsTabs'
import { RadioField } from '@/components/forms/createCourse/RadioField'
import { promocionesSchema, PromocionesSchema } from '@/components/forms/createCourse/schemas/promociones'
import { Form, FormItem, FormLabel } from '@/components/ui/form'
import { Section } from '@/components/ui/Section'
import { Course } from '@/interfaces/course'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from "@nextui-org/react"
import { useState } from 'react'
import { useFieldArray, useForm } from "react-hook-form"
import { toast } from 'sonner'

interface Props {
  courses: Course[]
}

export function PromocionesForm({ courses }: Props) {
  const form = useForm<PromocionesSchema>({
    resolver: zodResolver(promocionesSchema),
    defaultValues: {
      discountApplications: [],
      discountCourses: [],
    }
  })

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  const handleSubmit = (data: PromocionesSchema) => {
    console.log({ data });
    toast("Curso Creado!")
  }

  const { fields, append } = useFieldArray({
    control: form.control,
    name: "discountApplications"
  })

  const handleChangeDiscountPercentaje = (percentaje: number) => {
    const courseIndex = form.watch("discountCourses")?.findIndex((course) => course.id === selectedCourse?.id)!
    form.setValue(`discountCourses.${courseIndex}.percentage`, percentaje)
  }

  const getPercentage = () => {
    const courseIndex = form.watch("discountCourses")?.findIndex((course) => course.id === selectedCourse?.id)!
    const percentage = form.watch(`discountCourses.${courseIndex}.percentage`)
    return percentage
  }

  return (
    <form className="grid grid-cols-2 gap-12" onSubmit={form.handleSubmit(handleSubmit)}>
      <Form {...form}>
        <RadioField
          label='¿Te gustaría ofrecer un descuento en alguno de tus otros productos al comprar este artículo?'
          options={["si", "no"]}
          itemStyle='col-span-2'
          field='discount'
        />
        {
          form.watch("discount") === "si" &&
          <Section className='col-span-2 gap-6'>
            <p className='font-bold'>Selecciona la app o curso que quieras incluir.</p>
            <Tabs tabs={["aplicaciones", "cursos"]} />
            <ul className='grid grid-cols-2 gap-6'>
              {
                courses.map((course) =>
                  <li
                    className={`cursor-pointer ${selectedCourse && selectedCourse.id === course.id && "outline rounded-lg outline-primario-400"}`}
                    onClick={() => {
                      if (form.watch("discountCourses")?.every((c) => c.id !== course.id)) {
                        append({
                          id: course.id,
                          percentage: 0
                        })
                      }
                      setSelectedCourse(course)
                    }}
                    key={course.id}
                  >
                    <CourseCard course={course} />
                  </li>
                )
              }
            </ul>
          </Section>
        }
        {
          selectedCourse &&
          <FormItem className='col-span-2'>
            <FormLabel>
              Establecé el porcentaje de descuento que querés ofrecer al crear este paquete.
            </FormLabel>
            <Input
              onChange={(event) => handleChangeDiscountPercentaje(Number(event.target.value))}
              placeholder='Ingresa el porcentaje de descuento'
              value={String(getPercentage())}
              className='max-w-[400px]'
              type='number'
              max={100}
              min={0}
            />
          </FormItem>
        }
      </Form>
      <Button className='col-span-2' type="submit">Continuar</Button>
    </form>
  )
}
