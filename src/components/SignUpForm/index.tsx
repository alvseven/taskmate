"use client";

import { useForm } from "react-hook-form";

import { Form, Input } from "../common";
import { FloatingLabel } from "../FloatingLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, signUpSchema } from "@/validators/schemas/signUp";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const handle = (data: any) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(handle)} className="">
      <p className="font-semibold text-lg text-center text-white-primary">
        Please sign up to continue
      </p>
      <FloatingLabel
        placeholder="username"
        id="username"
        register={register}
        inputName="username"
      >
        Username
      </FloatingLabel>
      {/* <Input className="" type="text" {...register("username")} /> */}
      <button
        onClick={() => console.log(errors)}
        type="submit"
        className="text-slate-100"
      >
        Submit
      </button>
    </Form>
  );
};
