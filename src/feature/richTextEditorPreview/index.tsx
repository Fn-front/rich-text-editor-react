import { useState, useEffect } from 'react'
import { previewData } from '@/feature/richTextEditorPreview/types/index'

export const RichTextEditorPreview = (props: previewData) => {

	const { data } = props
	const [previewData, setPreviewData] = useState(data ?? '')

	useEffect(() => {
		setPreviewData(data)
	}, [data])

	return (
		<>
			<h2 className="c_h2" style={{ marginTop: '32px' }}>プレビュー</h2>
			<div className="quill">
				<div
					className='ql-editor'
					dangerouslySetInnerHTML={{__html: previewData}}
					style={{ padding: '0' }}
				/>
			</div>
		</>
	)
}

export default RichTextEditorPreview