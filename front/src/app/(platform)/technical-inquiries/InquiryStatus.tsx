import { cn } from "@nextui-org/react"
import { ClockIcon } from "lucide-react"
import { PropsWithChildren } from "react"

interface InquiryStatusProps extends PropsWithChildren {
  type: "success" | "pending"
}

export function InquiryStatus({ type, children }: InquiryStatusProps) {
  const styles = type === "pending"
    ? "text-[#DEE200] border border-[#DEE200] bg-[#DEE20026] rounded-full px-2 py-1 text-xs"
    : "text-[#07C30E] border border-[#07C30E] bg-[#07C30E26] rounded-full px-2 py-1 text-xs"

  const icon = type === "pending"
    ? <ClockIcon className="size-3" />
    : <p className="size-2 rounded-full bg-[#07C30E]" />

  return (
    <div className={cn(styles, "flex items-center gap-1")}>
      {icon}
      {children}
    </div>
  )
}

