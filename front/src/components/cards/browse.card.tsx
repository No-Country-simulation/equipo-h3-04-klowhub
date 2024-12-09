"use client"

import { BACK_URL } from "@/constants/constants";
import { Course } from "@/interfaces/course";
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
  // TODO - agregar rating y reviews props
}

export function BrowseCard({ description, functionalities, image, title, id, onOpenDetails }: Props) {
  const addCourse = useCartStore((state) => state.addCourse)

  const fetchAndAddCourse = async (id: Course['id']) => {
    try {
      const response = await fetch(`${BACK_URL}/course/${id}`);
      const course = await response.json();

      // Add the course to the store
      addCourse(course);
    } catch (error) {
      console.error('Failed to fetch course:', error);
    }
  };

  return (
    <li className="flex rounded-xl overflow-hidden bg-card">
      <figure className="relative aspect-[3/2] hidden min-h-[300px] md:block">
        <Image
          className="w-full h-full object-cover"
          // TODO - Cambiar por course.image cuando esten hosteadas las imagenes
          src={image}
          alt="course image"
          fill
        />
      </figure>
      <Section className="rounded-none bg-card flex-1 justify-between">
        <header className="flex flex-col gap-4">
          <Link href={`/course/${id}`} className="text-xl">{title}</Link>
          <p>{description}</p>
        </header>
        <PlatformLink platform={"AppSheet"} />
        <ChipsList className="flex-row" items={functionalities} />
        <RatingSection rating={3} reviews={12} />
        <footer className="flex items-center gap-6 flex-wrap">
          <Button onClick={() => fetchAndAddCourse(id)}>
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
