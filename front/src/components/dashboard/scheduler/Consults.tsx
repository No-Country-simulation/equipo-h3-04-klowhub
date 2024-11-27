import { Section } from "@/components/ui/Section";

// TODO - Remover informacion estatica por info del backend
export const consultLists: ConsultLists[] = [
  {
    date: "2024-11-26",
    consults: [
      {
        startsAt: "09:00",
        endsAt: "09:30",
      },
      {
        startsAt: "10:00",
        endsAt: "10:45",
      },
    ],
  },
  {
    date: "2024-11-27",
    consults: [
      {
        startsAt: "08:30",
        endsAt: "09:00",
      },
      {
        startsAt: "11:00",
        endsAt: "11:30",
      },
      {
        startsAt: "13:00",
        endsAt: "14:00",
      },
    ],
  },
]

interface ConsultLists {
  date: string;
  consults: Consult[]
}

interface Consult {
  endsAt: string;
  startsAt: string
}

interface ConsultsProps {
  consults: ConsultLists[]
}

export function Consults({ consults }: ConsultsProps) {
  return (
    <Section className="gap-3 col-span-2">
      {
        consults.map(({ consults, date }, index) =>
          <section key={index} className="flex flex-col gap-3">
            {/* TODO - Usar date-fns o otro parseador de fechas de la consulta, aca iria consults.date */}
            <header className="text-sm">{date}</header>
            <ul className="flex flex-col gap-[6px]">
              {
                consults.map((session, index) =>
                  <li
                    key={index}
                    className="bg-primario-100 text-primario-400 border border-primario-400 rounded-lg flex justify-between items-center text-sm p-2">
                    <p>Consultoria {index + 1}</p>
                    <p>{session.startsAt}-{session.endsAt}</p>
                  </li>
                )
              }
            </ul>
          </section>
        )
      }
    </Section>
  )
}