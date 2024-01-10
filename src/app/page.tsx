'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styles from './page.module.css'

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}>
        <p> WIP </p>
      </main>
    </QueryClientProvider>
  )
}
