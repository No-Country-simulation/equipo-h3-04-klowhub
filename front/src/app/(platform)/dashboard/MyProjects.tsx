"use client"

import { Tab, Tabs } from "@nextui-org/react";
import { GeneralInformation } from "./my-projects/GeneralInformation";
import { ProjectsTable } from "./my-projects/ProjectsTable";

export function MyProjects() {
  return (
    <section className="bg-card p-6 rounded-lg flex flex-col gap-4">
      <header className="flex flex-col gap-2">
        <p className="font-bold">Mis proyectos</p>
        <p className="text-sm">Revisa los detalles, realiza entregas y mantén la comunicación con el creador para asegurar el éxito de tu trabajo.</p>
      </header>
      <section className="grid grid-cols-4 gap-6">
        <section className="col-span-4 lg:col-span-3 flex flex-col gap-6">
          <div className="flex w-full flex-col">
            <Tabs
              aria-label="Options"
              color="primary"
              variant="underlined"
              classNames={{
                tabList: "w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-[#B95ED4]",
                tab: "max-w-fit px-0 h-12",
                tabContent: "group-data-[selected=true]:text-[#B95ED4] p-2"
              }}
            >
              <Tab
                key="general"
                title={
                  <div className="flex items-center space-x-2">
                    <span>general</span>
                  </div>
                }
              />
              <Tab
                key="aplicaciones"
                title={
                  <div className="flex items-center space-x-2">
                    <span>aplicaciones</span>
                  </div>
                }
              />
              <Tab
                key="cursos"
                title={
                  <div className="flex items-center space-x-2">
                    <span>cursos</span>
                  </div>
                }
              />
              <Tab
                key="proyectos"
                title={
                  <div className="flex items-center space-x-2">
                    <span>proyectos</span>
                  </div>
                }
              />
              <Tab
                key="mentoria"
                title={
                  <div className="flex items-center space-x-2">
                    <span>mentoria</span>
                  </div>
                }
              />
            </Tabs>
          </div>
          <ProjectsTable />
        </section>
        <GeneralInformation />
      </section>
    </section>
  )
}
