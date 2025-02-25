"use client";
export const dynamic = "force-dynamic";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function PaymentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  // Get the amount and course_code from query parameters; fallback to defaults if not provided.
  const amountFromQuery = searchParams.get("amount");
  const courseCodeFromQuery = searchParams.get("course_code");
  const courseAmount = amountFromQuery ? Number(amountFromQuery) : 100;
  const courseCode = courseCodeFromQuery ? courseCodeFromQuery : "default_course";

  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [error, setError] = useState("");

  // Validate that the phone number starts with 254 and has 12 digits total.
  const isValidPhoneNumber = (phone: string) => /^254\d{9}$/.test(phone);

  // Check for a valid JWT token on mount.
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/auth/verify", {
          credentials: "include",
        });
        if (!res.ok) {
          router.push("/auth/signinup");
        }
      } catch {
        router.push("/auth/signinup");
      } finally {
        setAuthChecking(false);
      }
    };
    checkAuth();
  }, [router]);

  if (authChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Checking authentication...</p>
      </div>
    );
  }

  const handlePayment = async () => {
    if (!isValidPhoneNumber(phoneNumber)) {
      setError("Enter a valid Safaricom number (254XXXXXXXXX)");
      return;
    }

    // Optionally store the phone number locally for later use.
    sessionStorage.setItem("userPhoneNumber", phoneNumber);
    setError("");
    setLoading(true);

    try {
      // Call your FastAPI M-PESA STK push endpoint, including the amount and course_code.
      const response = await fetch("http://localhost:8000/api/mpesa/stkpush", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Ensure the JWT cookie is sent
        body: JSON.stringify({
          phone_number: phoneNumber,
          amount: courseAmount,
          course_code: courseCode,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // For test mode, the backend might immediately mark the payment as completed.
        // In a real scenario, payment status might be "pending" until the callback is received.
        sessionStorage.setItem("paymentStatus", "paid");
        // Redirect to the appropriate course page based on the course_code.
        if (courseCode === "tasking") {
          router.replace("/dashboard/courses/tasking");
        } else if (courseCode === "data-analysis") {
          router.replace("/dashboard/courses/data-analysis");
        } else {
          router.replace("/dashboard");
        }
      } else {
        setError(data.error || "Payment initiation failed. Contact support.");
      }
    } catch (err) {
      console.error("Payment error:", err);
      setError("Error processing payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-500 dark:bg-gray-900 p-6">
      {/* Explanation Section - Why Some Courses Require Payment */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-2xl mb-6 text-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          Why Are Some Courses Paid and Others Free?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-md">
          At <span className="font-semibold">Deep Real Academy</span>, we strive to make learning accessible to everyone.
          Some courses are <span className="font-bold">free</span> to encourage learning and skill development for all.
          However, other courses are in <span className="text-red-500 font-semibold">high demand</span> and provide
          highly valuable skills that are essential in today&apos;s job market. These premium courses require a small fee to
          support high-quality content, expert instructors, and continuous updates.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white text-center mb-4">
          Pay Ksh {courseAmount} to Access the Course
        </h2>

        <input
          type="text"
          placeholder="Enter M-Pesa Number (254XXXXXXXXX)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mb-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          onClick={handlePayment}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay with M-Pesa"}
        </button>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading payment...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
