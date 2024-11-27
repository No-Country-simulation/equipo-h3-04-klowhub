import { Tabs as NextUiTabs, Tab } from "@nextui-org/react";



interface Props {
  tabs: string[]
}

export function Tabs({ tabs }: Props) {
  return (
    <div className="flex w-full flex-col">
      <NextUiTabs
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
