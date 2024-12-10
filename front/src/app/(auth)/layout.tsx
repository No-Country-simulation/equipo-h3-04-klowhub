import { PropsWithChildren } from "react";
import { AuthImage } from "./AuthImage";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <section className="relative h-full grid grid-cols-2">
      <AuthImage />
      <section className="hidden md:block w-full relative p-12">
        <p className="text-6xl">KlowHub</p>
      </section>
      <section className="w-full py-12 px-8 backdrop-blur-md bg-black/10 flex items-center justify-center">
        {children}
      </section>
    </section>
  )
}
