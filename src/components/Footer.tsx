import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto px-4 py-6 max-w-4xl text-center text-sm text-secondary">
      <p>Rich Text to Markdown Converter &copy; {new Date().getFullYear()} | Developed by <a href="https://linktr.ee/robertcdawson" target="_blank" rel="noopener noreferrer">Robert Dawson</a></p>
    </footer>
  );
};

export default Footer; 