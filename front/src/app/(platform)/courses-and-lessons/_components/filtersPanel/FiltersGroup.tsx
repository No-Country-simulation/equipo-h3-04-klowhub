"use client"

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FiltersFields } from "@/types/filters.type";
import { Checkbox } from "@nextui-org/react";
import { XIcon } from "lucide-react";
import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs';

interface Props {
  filters: string[];
  title: string;
  singleFilterPerRow?: boolean;
  field: keyof FiltersFields;
}

export function FiltersGroup({ filters, title, field, singleFilterPerRow = false }: Props) {
  const [queryParam, setQueryParam] = useQueryState(field,
    parseAsArrayOf(parseAsString).withDefault([]).withOptions({
      shallow: false,
    }))

  const handleSelectFilter = (value: string) => {
    setQueryParam((prevState) => {
      if (!prevState) {
        return [value]
      }

      return prevState.includes(value)
        ? prevState.filter((item) => item !== value) // Agregar filtro si no estaba
        : [...prevState, value]; // Removerlo si ya estaba
    })
  }

  return (
    <Section className="justify-between gap-6">
      <section className="flex flex-col gap-4">
        <p className="font-bold">{title}</p>
        <ul className={`grid gap-4 ${singleFilterPerRow ? "grid-cols-1" : "grid-cols-2"}`}>
          {
            filters.map((value, index) =>
              <Checkbox
                classNames={{ wrapper: "group-data[selected=true]:bg-transparent bg-white", label: "text-sm pl-2" }}
                isSelected={queryParam?.some((filter) => filter === value)}
                onValueChange={() => handleSelectFilter(value)}
                color="secondary"
                key={index}>
                {value}
              </Checkbox>
            )
          }
        </ul>
      </section>
      <Button
        onClick={() => {
          if (queryParam) {
            setQueryParam([])
          }
        }}
        variant="outlined">
        <span><XIcon /></span>
        Limpiar
      </Button>
    </Section >
  )
}
