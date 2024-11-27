"use client"

import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"

export default function page() {
  const router = useRouter()

  const handleSubmit = () => {
    console.log("ENVIANDO INFORMACION AL SERVIDOR...");
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      cuarto paso
      <Button type="submit">Crear curso</Button>
    </form>
  )
}
