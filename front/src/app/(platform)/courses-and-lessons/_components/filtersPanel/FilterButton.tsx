import { Modal } from "@/components/modal/Modal";
import { Button } from "@/components/ui/Button";
import { useDisclosure } from "@nextui-org/react";
import { FiltersModal } from "./FiltersModal";

export function FilterButton() {
  const modalState = useDisclosure()

  return (
    <>
      <Button
        onClick={() => modalState.onOpen()}
        variant={"outlined"}>
        Filtrar
      </Button>
      <Modal {...modalState}>
        <FiltersModal />
      </Modal>
    </>
  )
}
