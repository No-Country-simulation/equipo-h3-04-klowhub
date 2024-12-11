"use client"

import { tabsStyles } from "@/lib/tabs-styles";
import { Accordion, AccordionItem, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import './asideMenu.css';

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

type TabsOptions = "lecciones" | "consultas" | "recursos"

export function AsideMenu() {
  const [selectedTab, setSelectedTab] = useState<TabsOptions>("lecciones")

  return (
    <aside>
      <Tabs
        onSelectionChange={(key) => setSelectedTab(key as TabsOptions)}
        selectedKey={selectedTab}
        classNames={tabsStyles}
        variant="underlined"
        aria-label="Options"
        color="primary"
      >
        <Tab key="Lecciones" title="Lecciones">
          <Accordion
            id="modulos-accordion">
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
        </Tab>
        <Tab key="consultas" title="Consultas">

        </Tab>
        <Tab key="recursos" title="Recursos">

        </Tab>
      </Tabs>

    </aside>
  )
}
