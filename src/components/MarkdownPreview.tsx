import React from 'react';

interface MarkdownPreviewProps {
  markdown: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
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
    </div>
  );
};

export default MarkdownPreview; 