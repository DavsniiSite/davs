"use client";

import { usePathname } from "next/navigation";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { LanguageProvider } from "./_components/LanguageContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <LanguageProvider>
      {!isAdminRoute && <Header />}
      {children}
      {!isAdminRoute && <Footer />}
    </LanguageProvider>
  );
}
