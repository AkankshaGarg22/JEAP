import { ReactNode } from "react";
import Paragraph from "./paragraph";


type OrderedListProps = {
  items: ReactNode[];
  className?: string;
};

const ReferenceList: React.FC<OrderedListProps> = ({ items, className = "" }) => {
  return (
    <ol className={`list-decimal pl-0 md:pl-0 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          <Paragraph className="text-[18px]">{item}</Paragraph>
        </li>
      ))}
    </ol>
  );
};

export default ReferenceList;
