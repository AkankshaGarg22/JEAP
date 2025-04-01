import React, { FC } from 'react';

interface TranslucentBoxProps {
  backgroundColor: string;
  text: string;
  className?: string;
  style?: React.CSSProperties;
  textsize?: string;
}

// Helper function to parse **bold** and ^^superscript^^ text within a string.
const parseText = (text: string): React.ReactNode[] => {
  // Regex patterns for **bold** and ^^superscript^^
  const regex = /\*\*([^*]+)\*\*|\^\^([^\^]+)\^\^/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  text.replace(regex, (match, boldText, supText, offset) => {
    // Push the preceding text if any
    if (lastIndex < offset) {
      parts.push(text.substring(lastIndex, offset));
    }
    
    if (boldText) {
      parts.push(<strong className='text-4xl font-bold' key={offset}>{boldText}</strong>);
    } else if (supText) {
      parts.push(<sup key={offset}>{supText}</sup>);
    }
    
    lastIndex = offset + match.length;
    return match;
  });

  // Push remaining text if any
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

const TranslucentBox: FC<TranslucentBoxProps> = ({
  backgroundColor,
  text,
  className,
  style,
  textsize,
}) => {
  return (
    <div
      className={className}
      style={{
        backgroundColor: `${backgroundColor}`,
        height: 'auto',
        padding: '2rem',
        borderRadius: '0px',
        ...style,
      }}
    >
      <p className={textsize}>{parseText(text)}</p>
    </div>
  );
};

export default TranslucentBox;
