'use client';

import HomeScreenComponent from '@/components/HomeScreen/HomeScreen.component';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Home() {
  // const queryClient = new QueryClient();

  return (
    // <QueryClientProvider client={queryClient}>
      <HomeScreenComponent />
    // </QueryClientProvider>
  )
}
