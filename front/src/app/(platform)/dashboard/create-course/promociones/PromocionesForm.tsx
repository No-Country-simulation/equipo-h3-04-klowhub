"use client"

import CourseCard from '@/components/cards/course.card'
import { promocionesSchema, PromocionesSchema } from '@/components/forms/createCourse/schemas/promociones'
import { ErrorMessage } from '@/components/forms/multiStepForm/ErrorMessage'
import { RadioField } from '@/components/forms/multiStepForm/RadioField'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Section } from '@/components/ui/Section'
import { Course } from '@/interfaces/course'
import { tabsStyles } from '@/lib/tabs-styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Tab, Tabs } from "@nextui-org/react"
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'sonner'

interface Props {
  courses: Course[];
  // TODO - Usar la interfaz de aplicacion, NO la de Course
  applications: Course[]
}

type TabState = "aplicacion" | "curso"

export function PromocionesForm({ courses, applications }: Props) {
  const form = useForm<PromocionesSchema>({
    resolver: zodResolver(promocionesSchema),
  })

  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [tabSelected, setTabSelected] = useState<TabState>("aplicacion")

  const handleSubmit = (data: PromocionesSchema) => {
    console.log({ data });
    toast("Curso Creado!")
  }

  const handleSelectProduct = (productType: PromocionesSchema["discountTypeProduct"], productId: string) => {
    form.setValue("discountProductId", productId)
    form.setValue("discountTypeProduct", productType)
    form.setValue("discountPercentage", 0)
    setSelectedCourse(productId)
  }

  return (
    <form className="grid grid-cols-2 gap-12" onSubmit={form.handleSubmit(handleSubmit)}>
      <Form {...form}>
        <RadioField
          label='¿Te gustaría ofrecer un descuento en alguno de tus otros productos al comprar este artículo?'
          options={["si", "no"]}
          itemStyle='col-span-2'
          field='hasDiscount'
        />
        {
          form.watch("hasDiscount") === "si" &&
          <Section className='col-span-2 gap-6'>
            <p className='font-bold'>Selecciona la app o curso que quieras incluir.</p>
            <Tabs
              onSelectionChange={(key) => setTabSelected(key as TabState)}
              selectedKey={tabSelected}
              classNames={tabsStyles}
              variant="underlined"
              aria-label="Options"
              color="primary"
            >
              <Tab key="aplicacion" title="Aplicacion">
                <ul className='grid grid-cols-2 gap-6'>
                  {
                    applications.map((course) =>
                      <li
                        className={`cursor-pointer ${selectedCourse && selectedCourse === course.id && "outline rounded-lg outline-primario-400"}`}
                        onClick={() => handleSelectProduct("application", course.id)}
                        key={course.id}
                      >
                        <CourseCard course={course} />
                      </li>
                    )
                  }
                </ul>
              </Tab>
              <Tab key="curso" title="curso">
                <ul className='grid grid-cols-2 gap-6'>
                  {
                    courses.map((course) =>
                      <li
                        className={`cursor-pointer ${selectedCourse && selectedCourse === course.id && "outline rounded-lg outline-primario-400"}`}
                        onClick={() => handleSelectProduct("course", course.id)}
                        key={course.id}
                      >
                        <CourseCard course={course} />
                      </li>
                    )
                  }
                </ul>
              </Tab>
            </Tabs>
            <ErrorMessage message={form.formState.errors.discountProductId?.message} />
          </Section>
        }
        {
          (selectedCourse && form.watch("hasDiscount") === "si") &&
          < FormField
            name='discountPercentage'
            control={form.control}
            render={({ field }) =>
              <FormItem className='col-span-2'>
                <FormLabel>
                  Establecé el porcentaje de descuento que querés ofrecer al crear este paquete.
                </FormLabel>
                {/* 
                // @ts-ignore */}
                <Input
                  placeholder='Ingresa el porcentaje de descuento'
                  className='max-w-[400px]'
                  type='number'
                  {...field}
                />
                <FormMessage />
              </FormItem>
            }
          />

        }
      </Form>
      <Button className='col-span-2' type="submit">Continuar</Button>
    </form>
  )
}
