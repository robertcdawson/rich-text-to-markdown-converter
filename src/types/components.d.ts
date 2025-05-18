declare module './components/RichTextEditor' {
  interface RichTextEditorProps {
    onChange: (content: string, markdown: string) => void;
    value?: string;
  }
  const RichTextEditor: React.FC<RichTextEditorProps>;
  export default RichTextEditor;
}

declare module './components/MarkdownEditor' {
  interface MarkdownEditorProps {
    markdown: string;
    onChange: (markdown: string, html: string) => void;
  }
  const MarkdownEditor: React.FC<MarkdownEditorProps>;
  export default MarkdownEditor;
}

declare module './components/Header' {
  const Header: React.FC;
  export default Header;
}
