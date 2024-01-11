'use client';

import { useRouter, useParams } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  console.log("Dashboard page, router = ", router);
  const params = useParams();
  console.log("Dashboard page, params = ", params);

  return (
    <div>
      <p>Dashboard route with user id = {params.userId}</p>
    </div>
  )
}