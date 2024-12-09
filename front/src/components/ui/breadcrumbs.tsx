"use client"

import { BreadcrumbItem, Breadcrumbs as NextUiBreadcrumbs } from "@nextui-org/react";

interface Props {
  paths: string[]
}

export function Breadcrumbs({ paths }: Props) {
  return (
    <NextUiBreadcrumbs>
      {
        paths.map((p, index) =>
          <BreadcrumbItem key={index}>{p}</BreadcrumbItem>
        )
      }
    </NextUiBreadcrumbs>
  )
}
