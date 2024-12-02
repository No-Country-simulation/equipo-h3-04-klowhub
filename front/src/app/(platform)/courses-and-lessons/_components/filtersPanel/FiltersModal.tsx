import { FUNCIONALIDADES, HERRAMIENTAS_Y_PLATAFORMAS, LENGUAJES, PILAR_DE_CONTENIDO, PLATAFORMA, SECTOR } from "@/constants/filters";
import { ModalBody } from "@nextui-org/react";
import { FiltersGroup } from "./FiltersGroup";
import './vertical-scroll-bar.css';

export function FiltersModal() {
  return (
    <ModalBody>
      <section className="relative grid grid-cols-2 gap-6">
        <FiltersGroup
          field="platforms"
          singleFilterPerRow
          title="Plataforma"
          filters={PLATAFORMA.map(n => n)} />
        <FiltersGroup
          field="languages"
          singleFilterPerRow
          title="Idioma"
          filters={LENGUAJES.map(n => n)} />
        <FiltersGroup
          field="contentType"
          singleFilterPerRow
          title="Tipo de contenido"
          filters={["Curso", "Leccion"]} />
        <FiltersGroup
          field="level"
          singleFilterPerRow
          title="Nivel de competencia"
          filters={["Básico", "Intermedio"]} />
        <FiltersGroup
          field="contentPillar"
          title="Pilar de contenido"
          filters={PILAR_DE_CONTENIDO.map(n => n)} />
        <FiltersGroup
          field="sectors"
          title="Sector"
          filters={SECTOR.map(n => n)} />
        <FiltersGroup
          field="functionalities"
          title="Funcionalidades"
          filters={FUNCIONALIDADES.map(n => n)} />
        <FiltersGroup
          field="toolsAndPlatforms"
          title="Herramientas y Plataformas"
          filters={HERRAMIENTAS_Y_PLATAFORMAS.map(n => n)} />
      </section>
    </ModalBody>
  )
}
