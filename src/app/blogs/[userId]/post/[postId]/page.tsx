'use client'

import { useParams } from "next/navigation";
import PostContainer from "@/components/Post/Post.container";

export default function BlogPost() {
  const params = useParams<{ userId: string, postId: string }>();
  const userId = params.userId;
  const postId = params.postId;

  return (
    <PostContainer userId={userId} postId={postId} />
  )
}