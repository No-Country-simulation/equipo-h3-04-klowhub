import { ModalProps } from '@nextui-org/react';

export const modalStyles: ModalProps['classNames'] = {
  body: 'py-6 gap-6 overflow-x-hidden',
  wrapper: 'items-end justify-end pt-28 pl-20 overflow-x-hidden',
  base: 'border-[#292f46] h-full self-end rounded-tr-none rounded-br-none !m-0 text-[#a8b0d3] max-w-[1000px] bg-gradient-to-tr from-[#34395C] via-[#181941] to-[#1B1B1F] overflow-y-auto',
  backdrop: 'bg-[#292f46]/50 backdrop-opacity-40 m-0',
  closeButton: 'hover:bg-white/5 active:bg-white/10',
};

export const modalAnimations: ModalProps['motionProps'] = {
  variants: {
    enter: {
      x: 0,
    },
    exit: {
      x: '100%',
    },
  },
  transition: {
    bounce: 0,
    type: 'spring',
  },
};
