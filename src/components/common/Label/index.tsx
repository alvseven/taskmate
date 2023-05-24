import { ComponentProps, ReactNode } from "react";

interface LabelProps extends ComponentProps<"label"> {
  className: string;
  children: ReactNode;
}

export const Label = ({ className, children, ...attributes }: LabelProps) => {
  return (
    <label className={className} {...attributes}>
      {children}
    </label>
  );
};
