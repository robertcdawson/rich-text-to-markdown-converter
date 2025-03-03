import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-surface shadow-sm">
      <div className="container mx-auto px-4 py-4 max-w-4xl flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Rich Text to Markdown Converter</h1>
      </div>
    </header>
  );
};

export default Header; 