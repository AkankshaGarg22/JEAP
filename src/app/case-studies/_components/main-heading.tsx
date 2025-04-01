import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

const MainHeading: React.FC<TextProps> = ({ children, className = "" }) => {
  return (
    <h1 className={`text-2xl md:text-6xl md:leading-8 font-bold mb-4 ${className}`}>
      {children}
    </h1>
  );
};

export default MainHeading;