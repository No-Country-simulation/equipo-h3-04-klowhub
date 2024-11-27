import { Section } from "@/components/ui/Section";
import { ClockIcon, UserIcon } from "lucide-react";

export function ConsultInfo() {
  return (
    <Section className="bg-white/5 gap-6 col-span-3">
      <header className="flex flex-col gap-3">
        <section className="flex gap-2 items-center font-bold">
          <UserIcon />
          <p>Martin Fernandez</p>
        </section>
        <section className="flex gap-2 items-center font-bold">
          <ClockIcon />
          <p>1 Hora</p>
        </section>
      </header>
      <p className="text-sm">Hola, como estas? Me gustaria que en la reunion profundicemos sobre aplicaciones para automatizar procesos en mi negocio y tambien me gustaria ver cuales son las mejores opciones o casos parecidos en lo que hasyas trabajao. Posteriormetnte me gustaria emepzar a desarrollar algo para mi negocio</p>
    </Section>
  )
}
