import { Button } from "@/components/ui/Button";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiltersModal } from "./FiltersModal";

export function FilterButton() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const modalRef = useRef<HTMLDivElement | null>(null)

  // Cerrar dialog al clickear afuera del panel
  useEffect(() => {
    function closeDialog(event: MouseEvent) {
      if (!modalRef) {
        return
      }

      // @ts-ignore
      if (!modalRef.current?.contains(event?.target) && openModal) {
        setOpenModal(false)
      }
    }

    document.addEventListener("click", closeDialog)
    return () => document.removeEventListener("click", closeDialog)
  }, [openModal])

  // Cerrar dialog al tocar escape
  useEffect(() => {
    function closeDialogWithKeyboard(event: KeyboardEvent) {
      if (!modalRef) {
        return
      }

      // @ts-ignore
      if (event.key === "Escape") {
        setOpenModal(false)
      }
    }

    document.addEventListener("keydown", closeDialogWithKeyboard)
    return () => document.removeEventListener("keydown", closeDialogWithKeyboard)
  }, [openModal])

  return (
    <>
      {
        createPortal(
          <AnimatePresence mode="wait">
            {openModal &&
              <FiltersModal
                onCloseModal={() => setOpenModal(false)}
                ref={modalRef}
              />
            }
          </AnimatePresence>
          ,
          document.querySelector("body")!
        )
      }
      <Button
        onClick={() => setOpenModal(true)}
        variant={"outlined"}>
        Filtrar
      </Button>
    </>
  )
}
