import { useState } from 'react'
import { previewData } from '@/feature/richTextEditorPreview/types/index'

export const RichTextEditorPreview = (props: previewData) => {

	const { data } = props
	const [previewData, setPreviewData] = useState(data ?? '')
	return (
		<>
			<h2 className="c_h2" style={{ marginTop: '32px' }}>プレビュー</h2>
			<div className="quill">
				{ previewData }
			</div>
		</>
	)
}

export default RichTextEditorPreview