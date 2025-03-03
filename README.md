# Rich Text to Markdown Converter

A simple, responsive web app designed to convert rich text into Markdown.

## Features

- **Rich Text Editor:** A WYSIWYG editor that makes it easy to create formatted text.
- **Markdown View:** A separate tab where users can view and copy the Markdown version of their rich text.
- **Keyboard Shortcuts:** Supports familiar shortcuts (e.g., **Cmd+B** for bold, **Cmd+I** for italics).
- **Responsive Design:** Optimized for both desktop and mobile devices, ensuring accessibility and usability.
- **Minimalist Interface:** A clean, simple design that eliminates distractions and keeps the focus on content creation.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Quill (Rich Text Editor)
- Marked (Markdown Parser)
- DOMPurify (HTML Sanitizer)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/rich-text-to-markdown-converter.git
   cd rich-text-to-markdown-converter
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. Type and format your text in the Rich Text Editor tab using the toolbar or keyboard shortcuts.
2. Switch to the Markdown Preview tab to see the generated Markdown.
3. Click the "Copy Markdown" button to copy the Markdown to your clipboard.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React Quill](https://github.com/zenoamaro/react-quill) for the rich text editor
- [Marked](https://github.com/markedjs/marked) for Markdown parsing
- [Tailwind CSS](https://tailwindcss.com/) for styling 