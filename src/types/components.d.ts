declare module './components/RichTextEditor' {
  interface RichTextEditorProps {
    onChange: (markdown: string) => void;
  }
  const RichTextEditor: React.FC<RichTextEditorProps>;
  export default RichTextEditor;
}

declare module './components/MarkdownPreview' {
  interface MarkdownPreviewProps {
    markdown: string;
  }
  const MarkdownPreview: React.FC<MarkdownPreviewProps>;
  export default MarkdownPreview;
}

declare module './components/Header' {
  const Header: React.FC;
  export default Header;
} 