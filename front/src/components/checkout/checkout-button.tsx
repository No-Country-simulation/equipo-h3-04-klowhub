"use client"

import { useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { ConfirmationDialog } from "../forms/ConfirmationDialog";
import { Button } from "../ui/Button";

export function CheckoutButton({ children }: PropsWithChildren) {
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
        className="rounded-lg bg-primario-100 p-3 flex justify-center items-center hover:bg-primario-300 transition"
        onClick={() => modalState.onOpen()}
      >
        {children}
      </button>
    </>
  )
}