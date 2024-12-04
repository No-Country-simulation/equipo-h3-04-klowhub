"use client"

import { HTMLMotionProps, motion, Variants } from 'framer-motion'
import React from 'react'

type Props = HTMLMotionProps<"div">

// Animacion de opacidad simple
const fadeAnimation: Variants = {
  animate: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 100 },
  exit: { opacity: 0, y: 100 }
}

const MotionItem = React.forwardRef<HTMLDivElement, Props>(({ ...args }, ref) => {
  return (
    <motion.div
      ref={ref}
      {...fadeAnimation}
      {...args} />
  )
})

MotionItem.displayName = "MotionItem"

export { MotionItem }
