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
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['blockquote', 'code-block'],
        ['link'],
        ['clean']
      ]
    },
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

  // Add keyboard bindings
  React.useEffect(() => {
    const buttons = document.querySelectorAll('.ql-toolbar button');
    const tooltips: { [key: string]: string } = {
      bold: 'Bold (⌘+B)',
      italic: 'Italic (⌘+I)',
      underline: 'Underline (⌘+U)',
      strike: 'Strikethrough',
      'header[value="1"]': 'Heading 1 (⌘+1)',
      'header[value="2"]': 'Heading 2 (⌘+2)',
      'header[value="3"]': 'Heading 3 (⌘+3)',
      'list[value="ordered"]': 'Numbered List (⌘+Shift+7)',
      'list[value="bullet"]': 'Bullet List (⌘+Shift+8)',
      blockquote: 'Blockquote (⌘+Shift+.)',
      'code-block': 'Code Block (⌘+Shift+C)',
      link: 'Link (⌘+K)',
      clean: 'Clear Formatting'
    };

    buttons.forEach(button => {
      const format = Array.from(button.classList)
        .find(className => className.startsWith('ql-'))
        ?.replace('ql-', '');

      if (format) {
        const value = button.getAttribute('value');
        const tooltipKey = value ? `${format}[value="${value}"]` : format;
        const tooltip = tooltips[tooltipKey];

        if (tooltip) {
          button.setAttribute('title', tooltip);
        }
      }
    });
  }, []);

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