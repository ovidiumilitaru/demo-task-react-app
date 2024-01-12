'use client';

import { useState, useEffect } from 'react';
import { getUserDetails } from "@/utils/queries/getUserDetails";
import type { userDetailsType } from '@/utils/types/types';
import DashboardComponent from './Dashboard.component';

interface Props {
  userId: string
}

export default function DashboardContainer({userId}: Props) {
  const [userDetails, setUserDetails] = useState<userDetailsType | undefined>()

  const { isPending, isError, error, data } = getUserDetails(userId);

  useEffect(() => {
    setUserDetails(data);
  }, [data]);

  if (isPending) { 
    return (
      <div>
        <p>Loading data ...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <p>Something went wrong, please try again later</p>
        <p>{error.message}</p>
      </div>
    )
  }

  if (data && Object.keys(data).length === 0) {
    return (
      <div>
        <p>Something went wrong, please try again later</p>
      </div>
    )
  }

  return (
    <DashboardComponent userDetails={userDetails} />
  )
};
