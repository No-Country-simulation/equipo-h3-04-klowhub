"use client"

import { useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import { ComponentProps } from "react";
import { ConfirmationDialog } from "../forms/ConfirmationDialog";
import { Button } from "../ui/Button";

export function CheckoutButton({ ...args }: ComponentProps<"button">) {
  const modalState = useDisclosure()

  return (
    <>
      <ConfirmationDialog
        title="¡Felicidades! Estás listo para aprender"
        description="Tu compra de [nombre del curso] fue exitosa. Accede ahora y comienza a mejorar tus habilidades. ¡Te espera una experiencia de aprendizaje increíble!"
        {...modalState}
        actions={
          <>
            <Link href={"#"}>
              <Button size="big">Acceder al curso</Button>
            </Link>
            <Link href={"/courses-and-lessons"}>
              <Button size="big" variant="outlined">Ver más cursos</Button>
            </Link>
          </>
        } />
      <button
        {...args}
        className="rounded-lg bg-primario-100 p-3 flex justify-center items-center hover:bg-primario-300 transition disabled:opacity-30 disabled:hover:bg-primario-100"
        onClick={() => modalState.onOpen()}
      >
        {args.children}
      </button>
    </>
  )
}