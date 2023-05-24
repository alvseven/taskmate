import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  className: string;
}

export const Input = ({ className, ...attributes }: InputProps) => {
  return <input className={className} {...attributes} />;
};
