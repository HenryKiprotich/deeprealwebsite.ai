"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// ✅ Define validation schemas
const signUpSchema = z
  .object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const signInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type AuthFormValues = {
  email: string;
  password: string;
  confirmPassword?: string;
};

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Switch validation schema based on mode
  const validationSchema = isSignUp ? signUpSchema : signInSchema;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: zodResolver(validationSchema),
  });

  // Reset form when toggling Sign In/Up
  useEffect(() => {
    reset();
  }, [isSignUp, reset]);

  // Handle sign-in/sign-up logic using JWT cookie
  const onSubmit = async (data: AuthFormValues) => {
    setLoading(true);
    setError("");

    try {
      const endpoint = isSignUp
        ? "http://localhost:8000/api/auth/signup"
        : "http://localhost:8000/api/auth/signin";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // include cookie in request/response
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.detail || "Something went wrong");
        return;
      }

      if (isSignUp) {
        // Switch to Sign In mode after successful Sign Up
        setIsSignUp(false);
        setError("");
        return;
      }

      // On successful sign-in, the JWT is now set in the HttpOnly cookie.
      router.push("/dashboard");
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          {isSignUp ? "Create an account" : "Login to continue"}
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" {...register("email")} className="w-full p-2 border rounded" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input type="password" {...register("password")} className="w-full p-2 border rounded" />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          {isSignUp && (
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input type="password" {...register("confirmPassword")} className="w-full p-2 border rounded" />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>
          )}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition" disabled={loading}>
            {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button className="text-blue-500 hover:underline ml-1" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
        {/* Only show Forgot Password link in Sign In mode */}
        {!isSignUp && (
          <p className="text-center text-sm mt-2">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => router.push("/auth/forgotpassword")}
            >
              Forgot Password?
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
