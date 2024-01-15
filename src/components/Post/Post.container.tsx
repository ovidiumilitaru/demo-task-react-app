'use client';

import { useState, useEffect } from 'react';
import { getUserDetails } from "@/utils/queries/getUserDetails";
import { getPost } from '@/utils/queries/getPost';
import type { userDetailsType, userPostType } from '@/utils/types/types';
import PostComponent from "./Post.component";

interface Props {
  userId: string;
  postId: string;
};

export default function PostContainer({userId, postId}: Props) {
  const [userDetails, setUserDetails] = useState<userDetailsType | undefined>();
  const [post, setPost] = useState<userPostType | undefined>();

  const { 
    isPending: userDetailsIsPending, 
    isError: userDetailsIsError, 
    error: userDetailsError, 
    data: userDetailsData 
  } = getUserDetails(userId);

  const { 
    isPending: postIsPending, 
    isError: postIsError, 
    error: postError, 
    data: postData 
  } = getPost(postId);

  useEffect(() => {
    setUserDetails(userDetailsData);
  }, [userDetailsData]);

  useEffect(() => {
    setPost(postData);
  }, [postData]);

  if (userDetailsIsPending || postIsPending) { 
    return (
      <div>
        <p>Loading data ...</p>
      </div>
    )
  }

  if (userDetailsIsError || postIsError) {
    return (
      <div>
        <p>Something went wrong, please try again later</p>
        <p>{userDetailsError?.message}</p>
        <p>{postError?.message}</p>
      </div>
    )
  }

  if ((userDetailsData && Object.keys(userDetailsData).length === 0) || (postData && Object.keys(postData).length === 0)) {
    return (
      <div>
        <p>Something went wrong, please try again later</p>
      </div>
    )
  }

  return (
    <PostComponent userDetails={userDetails} post={post} />

  )
}