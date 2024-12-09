import { FileIcon, MessageSquareIcon, StarIcon, VideoIcon } from "lucide-react";
import Image from "next/image";
import { ChipsList } from "../ui/ChipsList";
import { RatingSection } from "../ui/RatingSection";
import { Section } from "../ui/Section";

interface Props {
  title: string;
  img: string;
  sector: string;
  rating: number;
  reviews: number;
  plataforma: string;
  onRemoveCourse: () => void
}

export function CartCard({ img, plataforma, rating, reviews, sector, title, onRemoveCourse }: Props) {
  return (
    <Section className="bg-card">
      <div className="flex gap-6 border-y py-3">
        <figure className="relative aspect-square rounded-lg overflow-hidden max-w-[240px] w-full">
          <Image alt="" src={"/imgs/DALL·E 2024-09-04 01.43.39.webp"} fill className="w-full h-full object-cover" />
        </figure>
        <section className="relative flex flex-col gap-3 w-full">
          <h4>Gestión de inventarios con AppSheet</h4>
          <ul className="flex gap-3 flex-col">
            <li className="flex gap-2 items-center"><StarIcon className="stroke-primario-300" /> Top 3 apps más vendidas</li>
            <li className="flex gap-2 items-center"><MessageSquareIcon className="stroke-primario-300" /> Plataforma: Appsheet</li>
            <li className="flex gap-2 items-center"><FileIcon className="stroke-primario-300" /> Sector: Industria</li>
            <li className="flex gap-2 items-center"><VideoIcon className="stroke-primario-300" /> Instructor verificado</li>
          </ul>
          <RatingSection rating={4} reviews={74} />
          <ChipsList className="flex-row" items={["Logística", "Optimización"]} />
          <button onClick={onRemoveCourse} className="absolute bottom-0 right-0 text-primario-200 px-12 py-3 font-bold">Eliminar</button>
        </section>
      </div>
    </Section>
  )
}
