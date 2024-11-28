import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export function SalesChartImage() {
  return (
    <section className="relative overflow-hidden rounded-lg">
      <Image className="absolute object-cover w-full h-full" fill src="/imgs/sales-chart-bg.webp" alt="sales chart bg" />
      <section className="relative flex flex-col gap-6 h-full justify-center p-6 bg-black/70">
        <p>Crea tu perfil como mentor</p>
        <p>¡Crea tu perfil como mentor y únete a nuestra comunidad de expertos! Comparte tu experienciay conecta con personas que buscan aprender. ¡Personaliza tu perfil y muestra al mundo lo que puedes aportar!</p>
        {/* TODO - Agregar un link valido para crear perfil de mentor */}
        <Link href="#">
          <Button>Crear perfil</Button>
        </Link>
      </section>
    </section>
  )
}
