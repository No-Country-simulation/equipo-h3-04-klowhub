"use client"

import 'quill/dist/quill.snow.css';
import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';

interface Props {
  onChange: (value: string) => void;
  defaultValue?: string;
}

export function Editor({ onChange, defaultValue }: Props) {
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
    ],
  };
  const formats = ['bold', 'italic', 'underline', 'strike'];
  const placeholder = 'Compose an epic...';
  const theme = 'snow';

  const { quill, quillRef } = useQuill({ theme, modules, formats, placeholder });

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        onChange(quill.getText())
      });
    }
  }, [quill]);

  useEffect(() => {
    if (quill && defaultValue) {
      quill.setText(defaultValue);
    }
  }, [quill])

  return (
    <section className='col-span-2 bg-white text-black rounded-xl border-none h-32 overflow-y-hidden'>
      <div ref={quillRef} />
    </section>
  );
};