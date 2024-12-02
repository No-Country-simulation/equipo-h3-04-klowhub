import { Variants } from 'framer-motion';

export const filtersOverlayAnimations: Variants = {
  exit: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: { when: 'afterChildren' },
  },
  initial: { opacity: 0, backdropFilter: 'blur(0px)' },
  animate: { opacity: 1, backdropFilter: 'blur(10px)' },
};

export const filtersPanelAnimation: Variants = {
  initial: { x: '100%' },
  exit: { x: '100%' },
  animate: { x: 0 },
  // @ts-ignore
  transition: { bounce: 0, type: 'spring' },
};
