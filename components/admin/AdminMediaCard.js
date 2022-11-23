import * as React from "react";
import { useRouter } from "next/router";

import CourseCardAmin from "../courses/CourseCardAdmin";

export default function MediaCard() {
  const router = useRouter();

  const urlRouter = (slug) => {
    router.push({
      pathname: "admin/courses/[courseId]",
      query: { courseId: `${slug}` },
    });
  };

  return <CourseCardAmin urlRouter={urlRouter} />;
}
