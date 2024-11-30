import { FUNCIONALIDADES, HERRAMIENTAS_Y_PLATAFORMAS, LENGUAJES, PILAR_DE_CONTENIDO, PLATAFORMA, SECTOR } from "@/constants/filters";
import { XIcon } from "lucide-react";
import React from "react";
import { FiltersGroup } from "./FiltersGroup";

interface Props {
  onCloseModal: () => void;
}

const FiltersModal = React.forwardRef<HTMLDivElement, Props>(({ onCloseModal }, ref) => (
  <section
    className="absolute z-50 inset-0 h-full bg-black/20 backdrop-blur-sm flex justify-end pt-28 pl-20"
    filter-dialog="open">
    <div
      ref={ref}
      className="max-w-[1000px] w-full rounded-tl-xl rounded-bl-xl bg-gradient-to-tr from-[#34395C] via-[#181941] to-[#1B1B1F] h-full flex flex-col gap-6 p-6 overflow-y-auto">
      <button
        onClick={onCloseModal}
        className="self-end">
        <XIcon />
      </button>
      <section className="relative grid grid-cols-2 gap-6">
        <FiltersGroup singleFilterPerRow title="Plataforma" filters={PLATAFORMA.map(n => n)} />
        <FiltersGroup singleFilterPerRow title="Idioma" filters={LENGUAJES.map(n => n)} />
        <FiltersGroup singleFilterPerRow title="Tipo de contenido" filters={["Curso", "Leccion"]} />
        <FiltersGroup singleFilterPerRow title="Nivel de competencia" filters={["Básico", "Intermedio"]} />
        <FiltersGroup title="Pilar de contenido" filters={PILAR_DE_CONTENIDO.map(n => n)} />
        <FiltersGroup title="Sector" filters={SECTOR.map(n => n)} />
        <FiltersGroup title="Funcionalidades" filters={FUNCIONALIDADES.map(n => n)} />
        <FiltersGroup title="Herramientas y Plataformas" filters={HERRAMIENTAS_Y_PLATAFORMAS.map(n => n)} />
      </section>
    </div>
  </section>
))

FiltersModal.displayName = "FiltersModal"

export { FiltersModal };
