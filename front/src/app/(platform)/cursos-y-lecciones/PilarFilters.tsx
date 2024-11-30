"use client"

import { PILAR_DE_CONTENIDO } from "@/constants/filters";
import { Chip, cn } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function PilarFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const handleClickFilter = (value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value === params.get("contentPillar")) {
      params.delete("contentPillar")
    } else {
      params.set("contentPillar", value)
    }
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <ul className={cn('flex gap-2 items-center flex-wrap mx-auto')}>
      {PILAR_DE_CONTENIDO.map(item =>
        <Chip
          key={item}
          onClick={() => handleClickFilter(item)}
          className={`text-xs px-4 py-4 transition cursor-pointer active:scale-[90%] rounded-xl ${searchParams.get("contentPillar")?.toString() === item ? "bg-primario-100 text-primario-400" : "border-1 border-primario-100 text-primario-100 bg-transparent"}`}>
          {item}
        </Chip>
      )}
    </ul>
  )
}
