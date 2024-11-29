"use client"

import { tabsStyles } from '@/lib/tabs-styles';
import { Tab, Tabs } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface Props {
  links: {
    value: string;
    path: string;
  }[]
}

export function NavigationTabs({ links }: Props) {
  const pathname = usePathname()

  return (
    <Tabs
      selectedKey={pathname}
      aria-label="Options"
      color="primary"
      variant="underlined"
      classNames={tabsStyles}
    >
      {
        links.map((tab) =>
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
