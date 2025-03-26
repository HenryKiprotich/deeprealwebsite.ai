import '@/app/styles/global.css';
import RootLayoutClient from '@/app/components/rootlayoutclient'; // Import the new Client Component
import { ReactNode } from 'react';

export const metadata = {
  title: 'Deep Real Site',
  description: 'Official Deep Real Website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-indigo-900 flex-col min-h-screen">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
