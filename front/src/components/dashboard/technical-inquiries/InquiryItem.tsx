import { Section } from "@/components/ui/Section"
import Image from "next/image"
import Link from "next/link"
import { InquiryStatus } from "./InquiryStatus"
import { Inquiry } from "./TechnicalInquiries"

interface Props {
  inquiry: Inquiry
}
export function InquiryItem({ inquiry }: Props) {
  const imgSrc = inquiry.platform === "AppSheet" ? "/imgs/appsheet-logo.webp" : "/imgs/powerapp-logo.png"

  return (
    <Section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] rounded-none">
      <section className="flex flex-col gap-4 ">
        <h3 className="font-semibold">{inquiry.title}</h3>
        <p className="text-sm text-gray-400">{inquiry.description}</p>
      </section>
      <section className="flex gap-4 items-center justify-between">
        <div className="w-fit bg-white/10 rounded-lg px-4 py-2 flex gap-2 items-center">
          <Image width={24} height={24} className="object-cover" alt="platform image" src={imgSrc} />
          <p className="text-sm font-medium">{inquiry.platform}</p>
        </div>
        <div className="font-medium flex flex-col gap-1">
          <p>Estado: </p>
          <InquiryStatus type={inquiry.statusColor as any}>
            {inquiry.status}
          </InquiryStatus>
        </div>
        {/* TODO - Agregar link valido para ver el detalle de la consulta técnica */}
        <Link href="#" className="text-primario-300 font-bold hover:underline capitalize">
          ver detalle
        </Link>
      </section>
    </Section>
  )
}

