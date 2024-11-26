import Image from "next/image";

export function Banner() {
  return (
    <section className="relative w-full h-52 overflow-hidden rounded-lg flex items-center justify-center">
      <Image src="/imgs/dashboard-banner.webp" fill className="z-0 absolute w-full h-full object-cover" alt="Dashboard banner" />
      <section className="relative flex flex-col justify-center items-center gap-2">
        <h2 className="text-5xl font-semibold">KlowHub</h2>
        <p>Descubre, aprende, crea</p>
      </section>
    </section>
  )
}
