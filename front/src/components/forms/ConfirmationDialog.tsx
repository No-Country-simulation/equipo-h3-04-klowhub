import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, UseDisclosureProps } from "@nextui-org/react";
import Image from "next/image";

type Props = UseDisclosureProps & {
  title: string;
  description: string;
  actions: JSX.Element;
}

export function ConfirmationDialog({ isOpen, onClose, actions, title, description }: Props) {
  return (
    <Modal
      size={"2xl"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent className="bg-card flex flex-col items-center justify-center p-12">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <p className="text-center">
                {description}
              </p>
              <Image className="mx-auto" src="/imgs/confirmation-icon.png" width={90} height={90} alt="confirmation icon" />
            </ModalBody>
            <ModalFooter className="flex-col">
              {actions}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
