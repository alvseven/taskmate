import Link from "next/link";

import { FloatingLabel, SocialLogin } from "@/components";
import { Button, Form } from "../common";

export const SignInForm = () => {
  return (
    <Form className="flex flex-col place-content-center w-[90%] pt-8 mt-8 rounded-lg bg-blue-primary p-4">
      <p className="font-semibold text-lg text-center text-white-primary">
        Please sign in to continue
      </p>
      {/* <FloatingLabel id="email" placeholder="youremail@mail.com">
        Email
      </FloatingLabel>
      <FloatingLabel id="password" type="password" placeholder="********">
        Password
      </FloatingLabel> */}
      <Link
        href="/forgot-password"
        className="text-[#F3F4F6] text-sm text-right mt-3"
      >
        Forgot password?
      </Link>
      <Button
        type="submit"
        className="text-[#F3F4F6] text-base h-10 rounded border border-[#6366F1] mt-6"
      >
        Sign in
      </Button>
      <SocialLogin />
      <p className="text-sm text-[#9CA3AF] text-center mt-8 mb-4">
        Dont have an account?
        <Link href="signup" className="text-[#F3F4F6] text-base">
          Sign up
        </Link>
      </p>
    </Form>
  );
};
