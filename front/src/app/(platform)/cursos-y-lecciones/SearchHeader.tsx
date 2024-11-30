"use client"

import { Button } from "@/components/ui/Button"
import { Input } from "@nextui-org/react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from 'use-debounce'
import { FilterButton } from "./FilterButton"

export function SearchHeader() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const handleChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value)
      router.replace(pathname + "?search=" + value)
    } else {
      params.delete("query")
    }
    router.replace(`${pathname}?${params.toString()}`)
  }, 1000)

  return (
    <header className="flex gap-4 items-center">
      <Input
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
        placeholder="Buscar cursos y lecciones"
        className="flex-1" />
      <FilterButton />
      <Button variant={"outlined"}>Ordenar Por</Button>
    </header>
  )
}
