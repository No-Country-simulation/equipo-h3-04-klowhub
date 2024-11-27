"use client"

import { Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import { FORM_STEPS_PATHS } from "../steps-paths"

export default function page() {
  const router = useRouter()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    router.replace(FORM_STEPS_PATHS[4])
  }
  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
      tercer paso
      <Button type="submit">Continuar</Button>
    </form>
  )
}
