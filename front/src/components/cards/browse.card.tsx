"use client"

import { useCartStore } from "@/store/cart.store";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ChipsList } from "../ui/ChipsList";
import { PlatformLink } from "../ui/PlatformLink";
import { RatingSection } from "../ui/RatingSection";
import { Section } from "../ui/Section";

interface Props {
  functionalities: string[];
  description: string;
  title: string;
  image: string;
  id: string;
  onOpenDetails: () => void;
  onAddToCart: () => void;
}

export function BrowseCard({ description, functionalities, title, id, onOpenDetails, onAddToCart, image = "./imgs/DALL·E 2024-09-04 01.44.37.webp" }: Props) {
  const courses = useCartStore((state) => state.courses)

  const courseAlreadyInCart = courses.some((course) => course.id === id)

  return (
    <li className="flex rounded-xl overflow-hidden bg-card">
      <figure className="relative aspect-[3/2] hidden min-h-[300px] md:block">
        <Image
          className="w-full h-full object-cover"
          src={image}
          alt="course image"
          fill
        />
      </figure>
      <Section className="rounded-none bg-card flex-1 justify-between">
        <header className="flex flex-col gap-4">
          <Link href={`/courses-and-lessons/${id}`} className="text-xl">{title}</Link>
          <p>{description}</p>
        </header>
        <PlatformLink platform={"AppSheet"} />
        <ChipsList className="flex-row" items={functionalities} />
        <RatingSection rating={3} reviews={12} />
        <footer className="flex items-center gap-6 flex-wrap">
          <Button disabled={courseAlreadyInCart} onClick={onAddToCart}>
            <ShoppingCartIcon />
            añadir al carrito
          </Button>
          <button
            className="text-primario-200 hover:underline p-2"
            onClick={onOpenDetails}
          >
            Ver detalles
          </button>
        </footer>
      </Section>
    </li>
  )
}
