import { HTMLInputTypeAttribute, ReactNode, forwardRef } from "react";

import { Input } from "../common";
import { Label } from "../common";
import { UseFormRegister } from "react-hook-form";
import { SignUpSchema } from "@/validators/schemas/signUp";

interface FloatingLabelProps {
  id: string;
  placeholder: string;
  children: ReactNode;
  inputName: keyof SignUpSchema;
  register: UseFormRegister<SignUpSchema>;
  type?: HTMLInputTypeAttribute;
}

export const FloatingLabel = ({
  id,
  placeholder,
  children,
  inputName,
  register,
  type = "text",
}: FloatingLabelProps) => {
  return (
    <div className="relative mt-10">
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(inputName)}
        className="peer h-10 w-full pl-2 border-2 rounded border-slate-100 text-gray-800 placeholder-transparent focus:outline-none focus:border-[#1a73e8]"
      />
      <Label
        className="absolute left-0 -top-7 text-gray-400 pl-2 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:text-base"
        htmlFor={id}
      >
        {children}
      </Label>
    </div>
  );
};
