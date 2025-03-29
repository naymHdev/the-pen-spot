import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`max-w-[1400px] mx-auto px-4 md:px-6 xl:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
