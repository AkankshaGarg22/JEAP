import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

const SubHeading: React.FC<TextProps> = ({ children, className = "" }) => {
  return (
    <h1 className={`text-xl md:text-3xl md:leading-8 font-bold ${className}`}>
      {children}
    </h1>
  );
};

export default SubHeading;