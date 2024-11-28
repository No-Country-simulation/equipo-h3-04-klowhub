import { ButtonProps, Button as NextUiButton } from '@nextui-org/react'
import { cva, VariantProps } from 'class-variance-authority'

// Estilos de Figma
const buttonStyles = cva(
  "",
  {
    variants: {
      variant: {
        regular: "bg-primario-400 text-white",
        outlined: "text-primario-200 border-primario-200 bg-transparent border-2"
      },
      size: {
        regular: "w-fit",
        big: "px-20"
      }
    },
    defaultVariants: {
      size: "regular",
      variant: "regular"
    }
  }
)

// Sobrescribir variantes del boton de nextui
type Props = VariantProps<typeof buttonStyles> & Omit<ButtonProps, "variant" | "size">

export function Button({ className, size, variant, ...args }: Props) {
  return (
    <NextUiButton className={buttonStyles({ size, variant, className })} {...args} />
  )
}