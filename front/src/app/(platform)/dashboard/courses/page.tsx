import { Section } from "@/components/ui/Section";
import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react";
import Link from "next/link";
import { CreatedCourses } from "./CreatedCourses";
import { RecentMovements } from "./RecentMovements";

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
      <Section className="bg-card flex flex-col gap-12">
        <RecentMovements />
        <CreatedCourses />
      </Section>
    </section>
  )
}
