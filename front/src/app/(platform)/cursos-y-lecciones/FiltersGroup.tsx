"use client"

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FiltersState, useFiltersStore } from "@/store/filtersStore";
import { Checkbox } from "@nextui-org/react";
import { XIcon } from "lucide-react";

interface Props {
  filters: string[];
  title: string;
  singleFilterPerRow?: boolean;
  field: keyof FiltersState;
}

export function FiltersGroup({ filters, title, field, singleFilterPerRow = false }: Props) {
  const selectedFilters = useFiltersStore(state => state[field])
  const resetFilter = useFiltersStore(state => state.resetFilter)
  const addFilter = useFiltersStore(state => state.addFilter)

  return (
    <Section className="justify-between gap-6">
      <section className="flex flex-col gap-4">
        <p className="font-bold">{title}</p>
        <ul className={`grid gap-4 ${singleFilterPerRow ? "grid-cols-1" : "grid-cols-2"}`}>
          {
            filters.map((value, index) =>
              <Checkbox
                classNames={{ wrapper: "group-data[selected=true]:bg-transparent bg-white", label: "text-sm pl-2" }}
                // @ts-ignore
                isSelected={selectedFilters?.some((filter) => filter === value)}
                onValueChange={() => addFilter(field, value)}
                color="secondary"
                key={index}>
                {value}
              </Checkbox>
            )
          }
        </ul>
      </section>
      <Button
        onClick={() => resetFilter(field)}
        variant="outlined">
        <span><XIcon /></span>
        Limpiar
      </Button>
    </Section >
  )
}
