import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

const Paragraph: React.FC<TextProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-base md:text-xl md:leading-8 ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;