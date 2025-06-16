import React, { ReactNode } from "react";

type OrderedListProps = {
  items: ReactNode[]; // assuming these can be strings or JSX
  className?: string;
};

const convertLinks = (text: string): ReactNode => {
  const urlRegex = /(https:\/\/[^\s]+)/g;

  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline break-all"
        >
          {part}
        </a>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

const processItem = (item: ReactNode, index: number): ReactNode => {
  if (typeof item === "string") {
    return convertLinks(item);
  }
  return item;
};

const ReferenceList: React.FC<OrderedListProps> = ({ items, className = "" }) => {
  return (
    <ol className={`list-decimal pl-0 md:pl-0 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="mb-0">
          <p className="text-sm">{processItem(item, index)}</p>
        </li>
      ))}
    </ol>
  );
};

export default ReferenceList;
