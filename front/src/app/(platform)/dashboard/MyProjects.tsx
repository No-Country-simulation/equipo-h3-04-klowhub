// TODO - El componente de tabs necesita ser un client component
"use client"

import { GeneralInformation } from "./my-projects/GeneralInformation";
import { Tabs } from "./my-projects/MyProjectsTabs";
import { ProjectsTable } from "./my-projects/ProjectsTable";

const MY_PROJECTS_TABS = ["general", "aplicaciones", "cursos", "proyectos", "mentoria"]

export function MyProjects() {
  return (
    <section className="bg-card p-6 rounded-lg flex flex-col gap-4">
      <header className="flex flex-col gap-2">
        <p className="font-bold">Mis proyectos</p>
        <p className="text-sm">Revisa los detalles, realiza entregas y mantén la comunicación con el creador para asegurar el éxito de tu trabajo.</p>
      </header>
      <section className="grid grid-cols-4 gap-6">
        <section className="col-span-4 lg:col-span-3 flex flex-col gap-6">
          <Tabs tabs={MY_PROJECTS_TABS} />
          <ProjectsTable />
        </section>
        <GeneralInformation />
      </section>
    </section>
  )
}
