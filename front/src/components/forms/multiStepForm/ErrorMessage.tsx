interface Props {
  message: string | null | undefined
}

export function ErrorMessage({ message }: Props) {
  if (!message) {
    return null
  }

  return (
    <p className='text-red-500 text-xs'>{message}</p>
  )
}
