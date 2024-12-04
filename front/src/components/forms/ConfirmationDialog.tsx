import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, UseDisclosureProps } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

type Props = UseDisclosureProps

export function ConfirmationDialog({ isOpen, onClose }: Props) {
  return (
    <Modal
      size={"2xl"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent className="bg-card flex flex-col items-center justify-center gap-6">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">¡Perfil creado exitosamente!</ModalHeader>
            <ModalBody>
              <p className="text-center">
                Tu experiencia y conocimiento están a un paso de guiar a nuevos talentos. Nuestro equipo revisará tu perfil y te notificaremos tan pronto esté aprobado. ¡Gracias por ser parte de esta comunidad!
              </p>
              <Image className="mx-auto" src="/imgs/confirmation-icon.png" width={90} height={90} alt="confirmation icon" />
            </ModalBody>
            <ModalFooter>
              <Link href="/dashboard">
                <Button size={"big"} onPress={onClose}>
                  Ir al dashboard
                </Button>
              </Link>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
