import * as React from 'react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
