

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getCourses } from "@/queries/courses";

export default async function Home() {

  const courses = await getCourses();
  console.log(courses);

  return (
    <div>
      <h1 className="text-4xl font-bold">Home</h1>

    </div>
  );
}
