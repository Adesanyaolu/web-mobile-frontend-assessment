import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const signUpSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;

export const phoneSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
});

export type PhoneFormData = z.infer<typeof phoneSchema>;

export const otpSchema = z.object({
  otp: z
    .array(z.string().min(1, "Required"))
    .length(4, "OTP must be 4 digits")
    .refine((arr) => arr.every((d) => /^\d$/.test(d)), {
      message: "Each OTP digit must be a number",
    }),
});

export type OtpFormData = z.infer<typeof otpSchema>;
