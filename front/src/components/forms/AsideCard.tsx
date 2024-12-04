import Image from "next/image"

export function AsideCard() {
  return (
    <section className="hidden xl:flex flex-col gap-5 rounded-lg overflow-hidden">
      <Image className="object-cover" width={300} height={250} alt="form aside image" src="/imgs/form-aside.webp" />
      <footer className="relative flex flex-col gap-3 items-center">
        <p className="font-bold text-sm">Optimiza tu Perfil</p>
        <p className="text-center text-sm">Optimizá tu perfil y llevá tus apps al siguiente nivel. Accedé a recursos exclusivos que te ayudarán a mejorar tus habilidades y maximizar el potencial de tus proyectos.</p>
      </footer>
    </section>
  )
}
