import { TabsProps } from '@nextui-org/react';

export const tabsStyles: TabsProps['classNames'] = {
  tabList:
    'w-full relative rounded-none p-0 border-b border-divider border-none',
  cursor: 'w-full bg-[#B95ED4]',
  tab: 'max-w-fit px-0 h-12',
  tabContent: 'group-data-[selected=true]:text-[#B95ED4] p-2',
};
