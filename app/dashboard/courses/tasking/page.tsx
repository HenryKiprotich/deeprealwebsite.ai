"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Next.js supports the 'suspense' option at runtime even though its type is not defined in DynamicOptions.
const TaskingCourseContent = dynamic(() => import("./content"), { suspense: true });

export default function TaskingCoursePage() {
  return (
    <Suspense fallback={<div>Loading course...</div>}>
      <TaskingCourseContent />
    </Suspense>
  );
}
