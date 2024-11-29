"use client"

import { PILAR_DE_CONTENIDO } from "@/constants/filters";
import { Chip, cn } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function PilarFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)

  const handleClickFilter = (value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value === selectedFilter) {
      setSelectedFilter(null)
      params.delete("pilar")
    } else {
      setSelectedFilter(value)
      params.set("pilar", value)
    }
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <ul className={cn('flex gap-2 items-center flex-wrap mx-auto')}>
      {
        PILAR_DE_CONTENIDO.map(item =>
          <Chip
            key={item}
            onClick={() => handleClickFilter(item)}
            className={`text-xs transition cursor-pointer active:scale-[90%] rounded-lg ${selectedFilter === item ? "bg-primario-100 text-primario-400" : "border-2 border-primario-200 text-primario-200 bg-transparent"}`}>
            {item}
          </Chip>
        )
      }
    </ul>
  )
}
