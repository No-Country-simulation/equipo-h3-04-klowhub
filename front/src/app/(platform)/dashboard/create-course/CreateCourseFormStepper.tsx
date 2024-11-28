"use client"

import { Tab, Tabs } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FORM_STEPS_PATHS } from './steps-paths';

const TABS = [
  {
    value: "Información general",
    path: FORM_STEPS_PATHS[1]
  },
  {
    value: "Detalles del curso",
    path: FORM_STEPS_PATHS[2]
  },
  {
    value: "Módulos y lecciones",
    path: FORM_STEPS_PATHS[3]
  },
  {
    value: "Promociones",
    path: FORM_STEPS_PATHS[4]
  }
]

export function CreateCourseFormStepper() {
  const pathname = usePathname()

  return (
    <Tabs
      selectedKey={pathname}
      aria-label="Options"
      color="primary"
      variant="underlined"
      classNames={{
        tabList: "w-full relative rounded-none p-0 border-b border-divider",
        cursor: "w-full bg-[#B95ED4]",
        tab: "max-w-fit px-0 h-12",
        tabContent: "group-data-[selected=true]:text-[#B95ED4] p-2"
      }}
    >
      {
        TABS.map((tab) =>
          <Tab
            as={Link}
            key={tab.path}
            href={tab.path}
            title={
              <div className="flex items-center space-x-2">
                <span>{tab.value}</span>
              </div>
            }
          />)
      }
    </Tabs>
  )
}
