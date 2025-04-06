import { ReactNode } from "react";

type OrderedListProps = {
  items: ReactNode[];
  className?: string;
};

const ReferenceList: React.FC<OrderedListProps> = ({ items, className = "" }) => {
  return (
    <ol className={`list-decimal pl-0 md:pl-0 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="mb-0">
          <p className="text-sm">{item}</p>
        </li>
      ))}
    </ol>
  );
};

export default ReferenceList;
