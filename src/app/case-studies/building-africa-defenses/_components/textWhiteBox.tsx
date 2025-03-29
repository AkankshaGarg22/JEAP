import React, { FC } from 'react';

interface TranslucentBoxProps {
  backgroundColor: string;
  text: string;
  width: number;  // in pixels
  className?: string;
  style?: React.CSSProperties;
}

// Helper function to parse **bold** text within a string.
const parseBold = (text: string): React.ReactNode[] => {
  // Split the text on any substring that matches **...**
  const regex = /(\*\*[^*]+\*\*)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    // If the part starts and ends with **, treat it as bold text.
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldContent = part.slice(2, part.length - 2);
      return <strong key={index}>{boldContent}</strong>;
    }
    return part;
  });
};

const TranslucentBox: FC<TranslucentBoxProps> = ({
  backgroundColor,
  text,
  width,
  className,
  style,
}) => {
  return (
    <div
      className={className}
      style={{
        backgroundColor: `${backgroundColor}`, // translucent white background
        width: `${width}px`,
        height:`auto`,
        padding: '2rem',
        borderRadius: '0px',
        ...style,
      }}
    >
      <p className="text-2xl ">{parseBold(text)}</p>
    </div>
  );
};

export default TranslucentBox;
