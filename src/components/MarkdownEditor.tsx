import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

interface MarkdownEditorProps {
  markdown: string;
  onChange: (markdown: string, html: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ markdown, onChange }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown)
      .then(() => {
        alert('Markdown copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const html = DOMPurify.sanitize(marked.parse(value));
    onChange(value, html);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Markdown</h2>
        <button
          onClick={copyToClipboard}
          className="px-3 py-1 bg-primary text-white rounded hover:bg-blue-600 text-sm"
        >
          Copy Markdown
        </button>
      </div>
      <textarea
        className="w-full h-64 p-2 border rounded-md font-mono"
        value={markdown}
        onChange={handleChange}
        placeholder="Edit Markdown here..."
      />
    </div>
  );
};

export default MarkdownEditor;
