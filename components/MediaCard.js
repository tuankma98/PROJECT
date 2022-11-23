import * as React from "react";

import CourseCardUser from "./courses/CourseCardUser";
import { useRouter } from "next/router";

export default function MediaCard() {
  const router = useRouter();

  const urlRouter = (slug) => {
    router.push({
      pathname: "/courses/[courseId]",
      query: { courseId: `${slug}` },
    });
  };

  return <CourseCardUser urlRouter={urlRouter} />;
}
