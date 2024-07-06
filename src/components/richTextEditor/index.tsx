'use client'

import { useState, useRef, LegacyRef } from 'react'
import dynamic from 'next/dynamic'
import type ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Data } from '@/components/richTextEditor/types/index'

interface IWrappedComponent extends React.ComponentProps<typeof ReactQuill> {
  forwardedRef: LegacyRef<ReactQuill>
}

const ReactQuillBase = dynamic(
  async () => {
    const {default: RQ} = await import('react-quill')

    function QuillJS({forwardedRef, ...props}: IWrappedComponent) {
      return <RQ ref={forwardedRef} {...props} />
    }

    return QuillJS
  },
  {
    ssr: false,
  },
)

export const RichTextEditor = (props: Data) => {

  const { valueData } = props
  const [value, setValue] = useState(valueData ?? '')
  const quillRef = useRef<ReactQuill>(null)

  return (
    <>
      <ReactQuillBase
        forwardedRef={quillRef}
        theme="snow" 
        modules={{
          toolbar: [
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [ 'bold', 'underline' ],
            [{ 'list': 'bullet'}],
            [{ 'color': [] }],
            ['link'],
          ]
        }}
        placeholder='5000文字以内で記載してください。'
        value={ value }
        onChange={setValue}
      />
    </>
  )
}

export default RichTextEditor