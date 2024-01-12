'use client';

import HomeScreenComponent from '@/components/HomeScreen/HomeScreen.component';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { getUserDetails } from '@/utils/queries/getUserDetails';

export default function Home() {
  // const queryClient = new QueryClient();

  return (
    // <QueryClientProvider client={queryClient}>
      <HomeScreenComponent />
    // </QueryClientProvider>
  )
}
