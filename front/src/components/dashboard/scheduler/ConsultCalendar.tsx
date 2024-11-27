import { Section } from "@/components/ui/Section";
import { Calendar } from "@nextui-org/react";

export function ConsultCalendar() {
  return (
    <Section className="col-span-2">
      <header>Calendario</header>
      <section className="flex items-center justify-center h-full">
        <Calendar className="bg-transparent" aria-label="Date (No Selection)" />
      </section>
    </Section>
  )
}
