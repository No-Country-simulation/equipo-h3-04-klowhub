import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Checkbox } from "@nextui-org/react";
import { XIcon } from "lucide-react";

interface Props {
  filters: string[];
  title: string;
  singleFilterPerRow?: boolean
}

export function FiltersGroup({ filters, title, singleFilterPerRow = false }: Props) {
  return (
    <Section className="justify-between gap-6">
      <section className="flex flex-col gap-4">
        <p className="font-bold">{title}</p>
        <ul className={`grid gap-4 ${singleFilterPerRow ? "grid-cols-1" : "grid-cols-2"}`}>
          {
            filters.map((sector, index) =>
              <Checkbox
                classNames={{ wrapper: "group-data[selected=true]:bg-transparent bg-white", label: "text-sm pl-2" }}
                color="secondary"
                key={index}>
                {sector}
              </Checkbox>
            )
          }
        </ul>
      </section>
      <Button variant="outlined">
        <span><XIcon /></span>
        Limpiar
      </Button>
    </Section >
  )
}
