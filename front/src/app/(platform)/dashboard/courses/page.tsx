"use client"

import { Tabs } from "@/components/dashboard/my-projects/MyProjectsTabs";
import { Section } from "@/components/ui/Section";
import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react";
import Link from "next/link";
import { CoursesTable } from "./CoursesTable";

export default function MyCoursesPage() {
  return (
    <section className="flex flex-col gap-6">
      <Breadcrumbs>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Mis Cursos</BreadcrumbItem>
      </Breadcrumbs>
      <header className="flex justify-between items-center">
        <p>Ultimas ventas</p>
        <Link href="/dashboard/create-course">
          <Button className="bg-primario-400 text-white px-20">Crear curso</Button>
        </Link>
      </header>
      <Section className="bg-card">
        <Tabs tabs={["Ultimos movimientos", "Este Mes", "3 Meses", "Este Año"]} />
        <section className="grid grid-cols-[1fr_300px]">
          <CoursesTable />
        </section>
        <section className="">
          <header>
            <p>Cursos Creados</p>
          </header>
          <ul className="">

          </ul>
        </section>
      </Section>
    </section>
  )
}
