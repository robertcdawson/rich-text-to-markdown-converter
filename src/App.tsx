import React, { useState } from 'react';
import RichTextEditor from './components/RichTextEditor';
import MarkdownPreview from './components/MarkdownPreview';
import Header from './components/Header';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [richTextContent, setRichTextContent] = useState<string>('');

  const handleRichTextChange = (content: string, markdown: string) => {
    setRichTextContent(content);
    setMarkdownContent(markdown);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-surface rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'editor'
                ? 'text-primary border-b-2 border-primary'
                : 'text-secondary hover:text-primary'
                }`}
              onClick={() => setActiveTab('editor')}
            >
              <strong>Rich</strong> <em>Text</em> <u>Editor</u>
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'preview'
                ? 'text-primary border-b-2 border-primary'
                : 'text-secondary hover:text-primary'
                }`}
              onClick={() => setActiveTab('preview')}
            >
              # Markdown Preview
            </button>
          </div>

          <div className="p-4">
            {activeTab === 'editor' ? (
              <RichTextEditor
                value={richTextContent}
                onChange={handleRichTextChange}
              />
            ) : (
              <MarkdownPreview
                markdown={markdownContent}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App; 