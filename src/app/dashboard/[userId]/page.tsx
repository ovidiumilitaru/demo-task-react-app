'use client';

import { useParams } from "next/navigation";
import DashboardContainer from '@/components/Dashboard/Dashboard.container'

export default function Dashboard() {
  const params = useParams<{ userId: string }>();
  const userId: string = params.userId

  return (
    <DashboardContainer userId={userId} />
  )
}