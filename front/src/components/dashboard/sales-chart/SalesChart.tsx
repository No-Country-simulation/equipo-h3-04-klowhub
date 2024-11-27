// TODO - El componente de tabs necesita ser un client component
"use client"

import { Section } from "@/components/ui/Section";
import { SalesChartImage } from "./SalesChartImage";

export function SalesChart() {
  return (
    <section className="bg-card p-6 rounded-lg grid grid-cols-3 grid-rows-[440px] gap-6">
      <section className="col-span-2 flex flex-col gap-6">
        <header className="p-2 bg-white/10 rounded-xl">
          <p className="font-bold">Chart de ventas ultimos 8 meses</p>
        </header>
        <ul className="flex text-primario-100 border-primario-100  [&>li:nth-child(odd)]:border-primario-300 [&>li:nth-child(odd)]:text-primario-300">
          {
            ["aplicaciones", "cursos", "proyectos", "consultoria"].map((tag) =>
              <li key={tag} className="p-2 border-b">
                {tag}
              </li>
            )
          }
        </ul>
        {/* TODO - Agregar chart con estadisticas */}
        <Section className="h-full">Agregar chart</Section>
      </section>
      <SalesChartImage />
    </section >
  )
}
