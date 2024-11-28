import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Input } from "@nextui-org/react";
import { FilterIcon, SortAscIcon } from "lucide-react";
import { InquiryItem } from "./InquiryItem";

// TODO - Cambiar informacion estatica por informacion del backend
const tasksData = [
  {
    id: 1,
    title: "Como crear y configurar una cuenta en AppSheet",
    description:
      "Gula vel nisi elementum, sed lacinia lacus cursus. Proin gravida, orci et ullamcorper tristique, gula vel nisi elementum, sed ligula vel nisi elementum, sed lacinia lacus cursus.",
    platform: "AppSheet",
    status: "Solucionada",
    statusColor: "success", // Matches the green label
    detailLink: "Ver detalle",
  },
  {
    id: 2,
    title: "Como crear y configurar una cuenta en Power Apps",
    description:
      "Gula vel nisi elementum, sed lacinia lacus cursus. Proin gravida, orci et ullamcorper tristique, gula vel nisi elementum, sed ligula vel nisi elementum, sed lacinia lacus cursus.",
    platform: "Power Apps",
    status: "Pendiente",
    statusColor: "pending", // Matches the yellow label
    detailLink: "Ver detalle",
  },
  {
    id: 3,
    title: "Como crear y configurar una cuenta en AppSheet",
    description:
      "Gula vel nisi elementum, sed lacinia lacus cursus. Proin gravida, orci et ullamcorper tristique, gula vel nisi elementum, sed ligula vel nisi elementum, sed lacinia lacus cursus.",
    platform: "AppSheet",
    status: "Pendiente",
    statusColor: "pending",
    detailLink: "Ver detalle",
  },
  {
    id: 4,
    title: "Como crear y configurar una cuenta en Power Apps",
    description:
      "Gula vel nisi elementum, sed lacinia lacus cursus. Proin gravida, orci et ullamcorper tristique, gula vel nisi elementum, sed ligula vel nisi elementum, sed lacinia lacus cursus.",
    platform: "Power Apps",
    status: "Solucionada",
    statusColor: "success",
    detailLink: "Ver detalle",
  },
];

export type Inquiry = typeof tasksData[number]

export function TechnicalInquiries() {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <p className="font-bold text-xl">Consultas técnicas</p>
      </header>
      <Section className="bg-card gap-6">
        <header className="flex gap-6">
          {/* TODO - Agregar logica para manejar la busqueda */}
          <Input className="max-w-[700px]" />
          <Button variant="outlined"><FilterIcon />Filtrar</Button>
          <Button variant="outlined"><SortAscIcon />Ordenar por</Button>
        </header>
        <ul className="flex flex-col gap-2 rounded-xl overflow-hidden">
          {
            tasksData.map((task) =>
              <InquiryItem key={task.id} inquiry={task} />
            )
          }
        </ul>
      </Section>
      <Button size="big" className="self-end">
        Ir a consultas
      </Button>
    </section>
  )
}
