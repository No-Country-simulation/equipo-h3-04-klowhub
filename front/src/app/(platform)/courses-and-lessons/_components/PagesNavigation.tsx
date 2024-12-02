"use client"

import { Pagination } from "@nextui-org/react";
import { parseAsInteger, useQueryState } from "nuqs";

interface Props {
  totalItems: number;
}

const ITEMS_PER_PAGE = 4

export function PagesNavigation({ totalItems }: Props) {
  const [page, setPage] = useQueryState("page",
    parseAsInteger.withDefault(1).withOptions({
      shallow: false
    }))
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)

  return (
    <Pagination
      classNames={{
        base: "mx-auto bg-transparent border p-0 rounded-xl border-primario-100",
        item: "rounded-none bg-transparent text-primario-100 hover:bg-primario-500 font-bold",
        cursor: "rounded-none bg-primario-100 text-primario-800 hover:bg-primario-500",
        next: "bg-transparent text-primario-100",
        prev: "bg-transparent text-primario-100",
        wrapper: "divide-x"
      }}
      onChange={(newPage) => setPage(newPage)}
      total={totalPages}
      initialPage={page}
      showControls
      isCompact
    />
  )
}
