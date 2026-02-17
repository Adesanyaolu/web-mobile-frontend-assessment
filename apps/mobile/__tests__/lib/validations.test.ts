import { loginSchema, signUpSchema, phoneSchema, otpSchema } from "@/lib/validations";

describe("Validation Schemas", () => {
  describe("loginSchema", () => {
    it("validates a correct login", () => {
      const result = loginSchema.safeParse({
        email: "test@email.com",
        password: "password123",
      });
      expect(result.success).toBe(true);
    });

    it("rejects empty email", () => {
      const result = loginSchema.safeParse({ email: "", password: "password123" });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe("Email is required");
      }
    });

    it("rejects invalid email format", () => {
      const result = loginSchema.safeParse({ email: "bad", password: "password123" });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe("Please enter a valid email address");
      }
    });

    it("rejects empty password", () => {
      const result = loginSchema.safeParse({ email: "test@email.com", password: "" });
      expect(result.success).toBe(false);
    });

    it("rejects short password", () => {
      const result = loginSchema.safeParse({ email: "test@email.com", password: "12" });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe("Password must be at least 6 characters");
      }
    });
  });

  describe("signUpSchema", () => {
    it("validates a correct sign up", () => {
      const result = signUpSchema.safeParse({
        username: "johndoe",
        email: "john@email.com",
        password: "secret123",
      });
      expect(result.success).toBe(true);
    });

    it("rejects empty username", () => {
      const result = signUpSchema.safeParse({
        username: "",
        email: "john@email.com",
        password: "secret123",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe("Username is required");
      }
    });

    it("rejects short username", () => {
      const result = signUpSchema.safeParse({
        username: "ab",
        email: "john@email.com",
        password: "secret123",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe("Username must be at least 3 characters");
      }
    });

    it("rejects invalid email", () => {
      const result = signUpSchema.safeParse({
        username: "johndoe",
        email: "bad",
        password: "secret123",
      });
      expect(result.success).toBe(false);
    });

    it("rejects short password", () => {
      const result = signUpSchema.safeParse({
        username: "johndoe",
        email: "john@email.com",
        password: "12",
      });
      expect(result.success).toBe(false);
    });
  });

  describe("phoneSchema", () => {
    it("validates a correct phone number", () => {
      const result = phoneSchema.safeParse({ phoneNumber: "1234567890" });
      expect(result.success).toBe(true);
    });

    it("rejects empty phone number", () => {
      const result = phoneSchema.safeParse({ phoneNumber: "" });
      expect(result.success).toBe(false);
    });

    it("rejects short phone number", () => {
      const result = phoneSchema.safeParse({ phoneNumber: "12345" });
      expect(result.success).toBe(false);
    });

    it("rejects non-digit characters", () => {
      const result = phoneSchema.safeParse({ phoneNumber: "123abc7890" });
      expect(result.success).toBe(false);
    });

    it("rejects phone number longer than 10 digits", () => {
      const result = phoneSchema.safeParse({ phoneNumber: "12345678901" });
      expect(result.success).toBe(false);
    });
  });

  describe("otpSchema", () => {
    it("validates a correct OTP", () => {
      const result = otpSchema.safeParse({ otp: ["1", "2", "3", "4"] });
      expect(result.success).toBe(true);
    });

    it("rejects incomplete OTP", () => {
      const result = otpSchema.safeParse({ otp: ["1", "2", "", ""] });
      expect(result.success).toBe(false);
    });

    it("rejects non-digit OTP values", () => {
      const result = otpSchema.safeParse({ otp: ["a", "b", "c", "d"] });
      expect(result.success).toBe(false);
    });

    it("rejects OTP with wrong length", () => {
      const result = otpSchema.safeParse({ otp: ["1", "2", "3"] });
      expect(result.success).toBe(false);
    });
  });
});
