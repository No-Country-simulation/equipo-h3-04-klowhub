"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

export function AuthImage() {
  const pathname = usePathname()

  // Dependiendo si estamos en la página de inicio o registro se cambia la imagen de fondo
  const srcImage = pathname === "/login" ? "/imgs/auth-login-bg.webp" : "/imgs/auth-register-bg.webp"

  return (
    <Image
      src={srcImage}
      alt="Background"
      fill
      className="z-0 absolute top-0 left-0 w-full h-full object-cover"
    />
  )
}
