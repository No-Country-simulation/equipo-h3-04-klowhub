"use client"

import CourseCard from '@/components/cards/course.card'
import { ConfirmationDialog } from '@/components/forms/ConfirmationDialog'
import { promocionesSchema, PromocionesSchema } from '@/components/forms/createCourse/schemas/promociones'
import { ErrorMessage } from '@/components/forms/multiStepForm/ErrorMessage'
import { RadioField } from '@/components/forms/multiStepForm/RadioField'
import { Button } from '@/components/ui/Button'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Section } from '@/components/ui/Section'
import { Course } from '@/interfaces/course'
import { tabsStyles } from '@/lib/tabs-styles'
import { useCreateCourseStore } from '@/store/createCourseStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input, Tab, Tabs, useDisclosure } from "@nextui-org/react"
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from "react-hook-form"

interface Props {
  courses: Course[];
  // TODO - Usar la interfaz de aplicacion, NO la de Course
  applications: Course[]
}

type TabState = "aplicacion" | "curso"

export function PromocionesForm({ courses, applications }: Props) {
  const state = useCreateCourseStore(state => state.promotion)!
  const setState = useCreateCourseStore(state => state.setPromotion)

  const form = useForm<PromocionesSchema>({
    resolver: zodResolver(promocionesSchema),
    defaultValues: state
  })

  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [tabSelected, setTabSelected] = useState<TabState>("aplicacion")

  const dialogState = useDisclosure()

  const handleSubmit = (data: PromocionesSchema) => {
    console.log({ data });
    setState(data)
    dialogState.onOpen();
  }

  const handleSelectProduct = (productType: PromocionesSchema["discountTypeProduct"], productId: string) => {
    form.setValue("discountProductId", productId)
    form.setValue("discountTypeProduct", productType)
    form.setValue("discountPercentage", 0)
    setSelectedCourse(productId)
  }

  return (
    <>
      <ConfirmationDialog
        actions={
          <>
            <Link href={"/dashboard/courses/vista-previa"}>
              <Button size={"big"}>Vista Previa</Button>
            </Link>
            <Link href={"/dashboard"}>
              <Button size={"big"} variant={"outlined"}>
                Volver al dashboard
              </Button>
            </Link>
          </>
        }
        description='Ya está disponible para que estudiantes de todo el mundo lo descubran y aprovechen.'
        title='¡Felicitaciones! Tu curso/Leccion se publicó con exito'
        {...dialogState} />
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
        <Button size={"big"} className='col-span-2' type="submit">Continuar</Button>
      </form>
    </>
  )
}
