import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

const Text: React.FC<TextProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-base md:text-lg xl:text-xl ${className}`}>
      {children}
    </p>
  );
};

export default Text;