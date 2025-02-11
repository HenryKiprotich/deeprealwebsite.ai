'use client';

import TopNavLinks from '@/app/components/topnavlinks';
import Footer from '@/app/components/footer';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard'); // Hide footer on Dashboard

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <TopNavLinks />

      {/* Main Content */}
      <main className="flex-grow p-6">{children}</main>

      {/* Conditionally Render Footer */}
      {!isDashboard && <Footer />}
    </div>
  );
}
