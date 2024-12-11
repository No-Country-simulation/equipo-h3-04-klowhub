"use client"

import { NavigationTabs } from "@/components/ui/NavigationTabs";
import { Accordion, AccordionItem } from "@nextui-org/react";
import './asideMenu.css';

const links = [
  {
    path: "./lesson",
    value: "Lecciones"
  },
  {
    path: "./consult",
    value: "Consulas"
  },
  {
    path: "./resources",
    value: "Recursos"
  }
]

const modules = [
  {
    id: 1,
    lessons: [
      {}, {}, {},
    ]
  },
  {
    id: 2,
    lessons: [
      {}, {}, {},
    ]
  }
]

export function AsideMenu() {
  return (
    <aside>
      <NavigationTabs links={links} />
      <Accordion id="modulos-accordion">
        {
          modules.map((module, index) =>
            <AccordionItem
              key={index}
              aria-label={`Accordion ${index + 1}"`}
              title={`Módulo ${index + 1}`}>
              <ul className="flex flex-col">
                {module.lessons.map((lesson, lessonIndex) =>
                  <li
                    className="p-2 bg-white/5 text-sm"
                    key={lessonIndex}>
                    Lección {lessonIndex + 1}</li>
                )}
              </ul>
            </AccordionItem>
          )
        }
      </Accordion>
    </aside>
  )
}
