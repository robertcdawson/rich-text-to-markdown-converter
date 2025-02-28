declare module 'react-quill' {
  import React from 'react';

  export interface ReactQuillProps {
    theme?: string;
    value?: string;
    onChange?: (content: string) => void;
    modules?: any;
    formats?: string[];
    placeholder?: string;
    readOnly?: boolean;
    className?: string;
    style?: React.CSSProperties;
    ref?: React.Ref<any>;
  }

  const ReactQuill: React.ForwardRefExoticComponent<ReactQuillProps & React.RefAttributes<any>>;

  export default ReactQuill;
} 