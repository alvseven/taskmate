import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  className: string;
  children: ReactNode;
}

export const Button = ({ className, children, ...attributes }: ButtonProps) => {
  return (
    <button className={className} {...attributes}>
      {children}
    </button>
  );
};
