"use client"

import { Button } from "@/components/ui/Button"
import { Input } from "@nextui-org/react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from 'use-debounce'
import { FilterButton } from "./FilterButton"

// 1 Segundo
const DEBOUNCE_DELAY = 1000

export function SearchHeader() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  // useDebounce para evitar cambiar los searchParams cada vez que se
  // escribe algo en el input, tiene un delay de 1 Segundo
  const handleChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value)
      router.replace(pathname + "?search=" + value)
    } else {
      params.delete("query")
    }
    router.replace(`${pathname}?${params.toString()}`)
  }, DEBOUNCE_DELAY)

  return (
    <header className="flex gap-4 items-center flex-wrap">
      <Input
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        placeholder="Buscar cursos y lecciones"
        className="flex-1 min-w-[180px]" />
      <section className="flex gap-4 flex-wrap">
        <FilterButton />
        <Button variant={"outlined"}>Ordenar Por</Button>
      </section>
    </header>
  )
}
