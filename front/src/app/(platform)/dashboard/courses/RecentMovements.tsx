"use client"

import { Tabs } from "@/components/dashboard/my-projects/MyProjectsTabs";
import { CoursesChart } from "./CoursesChart";
import { CoursesTable } from "./CoursesTable";

export function RecentMovements() {
  return (
    <section>
      <Tabs tabs={["Ultimos movimientos", "Este Mes", "3 Meses", "Este Año"]} />
      <section className="grid grid-cols-[1fr_auto] gap-6">
        <CoursesTable />
        <CoursesChart />
      </section>
    </section>
  )
}
