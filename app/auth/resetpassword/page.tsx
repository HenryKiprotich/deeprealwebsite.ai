"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

// @ts-expect-error: Next.js supports the suspense option at runtime even though the type definitions may not reflect it.
const ResetPasswordContent = dynamic(() => import("./resetpasswordcontent"), { suspense: true });

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
