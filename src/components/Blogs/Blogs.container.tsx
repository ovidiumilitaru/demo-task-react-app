'use client';

import { useState, useEffect } from 'react';
import { getUserDetails } from "@/utils/queries/getUserDetails";
import { getUserPosts } from '@/utils/queries/getUserPosts';
import type { userDetailsType, userPostsType } from '@/utils/types/types';
import BlogsComponent from "./Blogs.component";

interface Props {
  userId: string;
}

export default function BlogsContainer({userId}: Props) {
  const [userDetails, setUserDetails] = useState<userDetailsType | undefined>();
  const [userPosts, setUserPosts] = useState<userPostsType | undefined>();

  const { 
    isPending: userDetailsIsPending, 
    isError: userDetailsIsError, 
    error: userDetailsError, 
    data: userDetailsData 
  } = getUserDetails(userId);

  const { 
    isPending: userPostsIsPending, 
    isError: userPostsIsError, 
    error: userPostsError, 
    data: userPostsData 
  } = getUserPosts(userId);
  
  useEffect(() => {
    setUserDetails(userDetailsData);
    setUserPosts(userPostsData);
  }, [userDetailsData, userPostsData]);

  // useEffect(() => {
  //   setUserPosts(userPostsData);
  // }, [userPostsData]);

  if (userDetailsIsPending || userPostsIsPending) { 
    return (
      <div>
        <p>Loading data ...</p>
      </div>
    )
  }

  if (userDetailsIsError || userPostsIsError) {
    return (
      <div>
        <p>Something went wrong, please try again later</p>
        <p>{userDetailsError?.message}</p>
        <p>{userPostsError?.message}</p>
      </div>
    )
  }

  if ((userDetailsData && Object.keys(userDetailsData).length === 0) || (userPostsData && Object.keys(userPostsData).length === 0)) {
    return (
      <div>
        <p>Something went wrong, please try again later</p>
      </div>
    )
  }


  return (
    <BlogsComponent userDetails={userDetails} userPosts={userPosts} />
  )
}