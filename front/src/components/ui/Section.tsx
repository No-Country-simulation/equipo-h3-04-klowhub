import { cn } from "@nextui-org/react"
import { ComponentProps } from "react"

type SectionProps = ComponentProps<"section">

export function Section({ className, ...args }: SectionProps) {
  return (
    <section className={cn("shadow-lg bg-white/10 flex flex-col gap-2 rounded-lg p-6", className)} {...args} />
  )
}
