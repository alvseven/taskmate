import { z } from "zod";

export const signUpSchema = z.object({
  username: z.string().optional(),
  email: z.string().email().optional(),
  confirmEmail: z.string().email().optional(),
  password: z.string().optional(),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
