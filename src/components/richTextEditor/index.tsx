'use client'

import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Data } from '@/components/richTextEditor/types/index'


export const RichTextEditor = (props: Data) => {

  const { valueData } = props
  const [value, setValue] = useState(valueData ?? '')

  return (
    <>
      <ReactQuill
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