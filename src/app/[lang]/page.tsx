"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomePage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const language = (pathname.split("/")[1] || "en") as
    | "en"
    | "mn"
    | "cn"
    | "jp"
    | "kr";

  useEffect(() => {
    if (pathname === `/${language}` || pathname === "/") {
      setIsRedirecting(true);
      router.replace(`/${language}/about`);
    }
  }, [pathname, language, router]);

  if (isRedirecting) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <p>Redirecting...</p>
      </div>
    );
  }

  return null;
};

export default HomePage;
