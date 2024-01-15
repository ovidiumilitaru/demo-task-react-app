'use client';

import BlogsContainer from "@/components/Blogs/Blogs.container";
import { useParams } from "next/navigation";

export default function Blogs() {
  const params = useParams<{ userId: string }>();
  const userId = params.userId;

  return (
    <BlogsContainer userId={userId} />
  )
}