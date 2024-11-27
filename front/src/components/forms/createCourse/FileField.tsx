import { CloudUploadIcon } from "@/components/icons/CloudUploadIcon";
import Dropzone, { DropzoneProps, DropzoneState } from "shadcn-dropzone";

export function FileField({ ...args }: DropzoneProps) {
  return (
    <Dropzone
      {...args}
      dropZoneClassName='bg-white/10 border-primario-400 hover:bg-white/5 transition'
    >
      {(dropzone: DropzoneState) => (
        <>
          {
            dropzone.isDragAccept ? (
              <section className='flex items-center justify-center'>
                <p>Drop your files here!</p>
              </section>
            ) : (
              <section className='flex flex-col gap-2 items-center justify-center'>
                <CloudUploadIcon />
                <p className='text-sm text-primario-400 text-center'>Sube una foto de portada del curso</p>
                <p className='text-xs'>en formato png, jpeg o jpg</p>
              </section>
            )
          }
        </>
      )}
    </Dropzone>
  )
}
