import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ChipsList } from "../ui/ChipsList";
import { PlatformLink } from "../ui/PlatformLink";
import { RatingSection } from "../ui/RatingSection";
import { Section } from "../ui/Section";

interface Props {
  title: string;
  description: string;
  functionalities: string[];
  image: string;
  // TODO - agregar rating y reviews props
}

export function BrowseCard({ description, functionalities, image, title }: Props) {
  return (
    <li className="flex rounded-xl overflow-hidden">
      <figure className="relative w-[400px] h-[315px]">
        <Image
          className="w-full h-full object-cover"
          // TODO - Cambiar por course.image cuando esten hosteadas las imagenes
          src="/imgs/DALL·E 2024-09-04 14.27.44.webp"
          alt="course image"
          fill
        />
      </figure>
      <Section className="rounded-none bg-card flex-1 justify-between">
        <header className="flex flex-col gap-4">
          <p className="text-xl">{title}</p>
          <p>{description}</p>
        </header>
        <PlatformLink platform={"AppSheet"} />
        <RatingSection rating={3} reviews={12} />
        <ChipsList className="flex-row" items={functionalities} />
        <footer className="flex items-center gap-6">
          <Button>
            <ShoppingCartIcon />
            añadir al carrito
          </Button>
          <Link href={"/#"} className="text-primario-200 hover:underline p-2">
            Ver detalles
          </Link>
        </footer>
      </Section>
    </li>
  )
}
