import { ComponentProps, ReactNode } from "react";

interface FormProps extends ComponentProps<"form"> {
  className: string;
  children: ReactNode;
}

export const Form = ({ className, children, ...attributes }: FormProps) => {
  return (
    <form className={className} {...attributes}>
      {children}
    </form>
  );
};
