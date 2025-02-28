import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

interface MarkdownPreviewProps {
  markdown: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    const renderMarkdownToHtml = async () => {
      if (markdown) {
        // Handle marked returning a Promise
        const rawHtml = await marked(markdown);
        const cleanHtml = DOMPurify.sanitize(rawHtml);
        setHtmlContent(cleanHtml);
      }
    };

    renderMarkdownToHtml();
  }, [markdown]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown)
      .then(() => {
        alert('Markdown copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const renderMarkdown = () => {
    if (!markdown) {
      return <p className="text-gray-500 italic">No content to preview</p>;
    }

    // Display raw markdown
    return (
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        <code>{markdown}</code>
      </pre>
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Markdown Output</h2>
        <button
          onClick={copyToClipboard}
          className="px-3 py-1 bg-primary text-white rounded hover:bg-blue-600 text-sm"
        >
          Copy Markdown
        </button>
      </div>

      {renderMarkdown()}

      <h3 className="text-lg font-medium mt-6 mb-2">HTML Preview</h3>
      {htmlContent ? (
        <div
          className="markdown-preview mt-4 border-t pt-4"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      ) : null}
    </div>
  );
};

export default MarkdownPreview; 