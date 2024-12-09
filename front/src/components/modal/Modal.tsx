import { modalAnimations, modalStyles } from "@/lib/modal-styles";
import { ModalContent, Modal as NextUiModal, useDisclosure } from "@nextui-org/react";
import { PropsWithChildren } from "react";

type Props = ReturnType<typeof useDisclosure> & PropsWithChildren

export function Modal({ isOpen, onOpenChange, children }: Props) {
  return (
    <NextUiModal
      motionProps={modalAnimations}
      classNames={modalStyles}
      onOpenChange={onOpenChange}
      backdrop="opaque"
      isOpen={isOpen}
      radius="lg"
    >
      <ModalContent>
        {children}
      </ModalContent>
    </NextUiModal>
  )
}
