"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidPhoneNumber = (phone: string) => /^254\d{9}$/.test(phone);

  const handlePayment = async () => {
    if (!isValidPhoneNumber(phoneNumber)) {
      setError("Enter a valid Safaricom number (254XXXXXXXXX)");
      return;
    }

    sessionStorage.setItem("userPhoneNumber", phoneNumber);
    setError("");
    setLoading(true);

    try {
      const confirmResponse = await fetch("https://deepreal-flask-backend.onrender.com/confirm_payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: sessionStorage.getItem("userEmail"), phone_number: phoneNumber }),
      });

      const confirmData = await confirmResponse.json();

      if (confirmResponse.ok) {
        sessionStorage.setItem("paymentStatus", "paid");
        router.replace("/dashboard/courses/tasking");
      } else {
        setError(confirmData.error || "Payment confirmed, but access failed. Contact support.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      setError("Error processing payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-500 dark:bg-gray-900 p-6">
      
      {/* 🔹 Explanation Section - Why Some Courses Require Payment */}
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
          Pay Ksh 1000 to Access the Course
        </h2>

        <input
          type="text"
          placeholder="Enter M-Pesa Number (254XXXXXXXXX)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mb-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button onClick={handlePayment} className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600" disabled={loading}>
          {loading ? "Processing..." : "Pay with M-Pesa"}
        </button>
      </div>
    </div>
  );
}
