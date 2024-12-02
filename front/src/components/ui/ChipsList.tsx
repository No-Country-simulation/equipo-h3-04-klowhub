import { cn } from "@/lib/utils";
import { Chip } from "@nextui-org/react";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"ul"> {
  items: string[];
}

export function ChipsList({ items, className, ...args }: Props) {
  return (
    <ul className={cn('flex flex-col gap-2 items-center flex-wrap', className)} {...args}>
      {
        items.map(item =>
          <Chip
            key={item}
            className={cn('bg-primario-100 text-primario-400 text-xs rounded-lg')}>
            {item}
          </Chip>
        )
      }
    </ul>
  )
}