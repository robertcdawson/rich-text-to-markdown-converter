import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { convertToMarkdown } from '../utils/markdownConverter';

interface RichTextEditorProps {
  onChange: (content: string, markdown: string) => void;
  value?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ onChange, value = '' }) => {
  const [editorContent, setEditorContent] = useState(value);

  const handleChange = (content: string) => {
    setEditorContent(content);
    const markdown = convertToMarkdown(content);
    onChange(content, markdown);
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link'],
      ['clean']
    ],
    clipboard: {
      // Preserve proper spacing when pasting content
      matchVisual: false
    }
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'blockquote', 'code-block',
    'link'
  ];

  return (
    <div className="rich-text-editor custom-quill-container">
      <ReactQuill
        theme="snow"
        value={editorContent}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="Start typing here..."
        className="custom-quill-editor"
      />
      <div className="mt-4 text-sm text-secondary">
        <p>
          <strong>Tip:</strong> Use the toolbar above to format your text. The Markdown will be generated automatically.
        </p>
      </div>
    </div>
  );
};

export default RichTextEditor; 