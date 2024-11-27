"use client"

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { FORM_STEPS_PATHS } from "../steps-paths";

export default function DetallesPage() {
  const router = useRouter()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    router.replace(FORM_STEPS_PATHS[3])
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
      segundo paso
      <Button type="submit">Continuar</Button>
    </form>
  )
}
