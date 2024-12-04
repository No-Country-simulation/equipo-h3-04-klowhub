"use client"

import { ConsultCalendar } from "./ConsultCalendar"
import { ConsultInfo } from "./ConsultInfo"
import { consultLists, Consults } from "./Consults"

export function Scheduler() {
  return (
    // TODO - Ver una forma mejor de usar grid layout para diseño responsive, cuando se achica la pantalla
    // la seccion que se va abajo no ocupa todas las columnas
    <section className="bg-card p-6 rounded-lg auto-rows-[442px] grid grid-cols-consults gap-6">
      <ConsultCalendar />
      <Consults consults={consultLists} />
      <ConsultInfo />
    </section>
  )
}

