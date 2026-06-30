"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Home</h1>
      <Button onClick={() => toast.error("Hello world")} className="bg-primary text-primary-foreground">Click me</Button>
    </div>
  );
}
