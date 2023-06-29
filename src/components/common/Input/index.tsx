"use client";

import { ComponentProps, forwardRef } from "react";
interface InputProps extends ComponentProps<"input"> {
  className: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...attributes },
  ref
) {
  return <input ref={ref} className={className} {...attributes} />;
});
