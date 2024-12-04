import { tabsStyles } from "@/lib/tabs-styles";
import { Tabs as NextUiTabs, Tab, TabsProps } from "@nextui-org/react";

interface Props extends TabsProps {
  tabs: string[]
}

export function Tabs({ tabs, ...props }: Props) {
  return (
    <div className="flex w-full flex-col">
      <NextUiTabs
        {...props}
        aria-label="Options"
        color="primary"
        variant="underlined"
        classNames={tabsStyles}
      >
        {
          tabs.map((tab) =>
            <Tab
              key={tab}
              title={
                <div className="flex items-center space-x-2">
                  <span>{tab}</span>
                </div>
              }
            />)
        }
      </NextUiTabs>
    </div>
  )
}
