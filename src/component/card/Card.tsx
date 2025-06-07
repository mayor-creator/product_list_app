import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};
