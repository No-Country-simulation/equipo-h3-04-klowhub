"use client"

import { Accordion, AccordionItem } from "@nextui-org/react";
import { CoursePreview } from "../page";
import './modulos-accordion.css';

interface Props {
  modulos: CoursePreview["courseProgram"]
}

export function ModulosAccordion({ modulos }: Props) {
  return (
    <section className="flex flex-col gap-4">
      <p>Programa del curso</p>
      <Accordion
        id="modulos-accordion"
        itemClasses={{ content: "pl-12 flex flex-col gap-4 pr-4" }}
        defaultExpandedKeys={["1"]}
        variant="light"
        hideIndicator
      >
        {
          modulos.map((modulo, index) =>
            <AccordionItem
              data-accordion-item
              key={index + 1}
              aria-label={`Accordion ${index + 1}`}
              title={
                <div>
                  <span className="px-4">+</span>
                  <span className="text-primario-400">Módulo {index + 1}</span>
                </div>}>
              <p className="font-bold text-sm">
                {modulo.moduleTitle}
              </p>
              <ul className="flex flex-col gap-3">
                {
                  modulo.lessons.map((lesson, lessonIndex) =>
                    <li key={lesson} className="text-sm">
                      <span className="pr-1">Lección {lessonIndex + 1}:</span>
                      <span>{lesson}</span>
                    </li>
                  )
                }
              </ul>
            </AccordionItem>
          )
        }
      </Accordion>
    </section>
  )
}
