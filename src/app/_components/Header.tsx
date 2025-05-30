"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const languages = ["en", "mn", "cn", "jp", "kr"] as const;
  const [selectedLang, setSelectedLang] =
    useState<(typeof languages)[number]>("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const routes = [
    {
      path: "about",
      label: {
        en: "About",
        mn: "Бидний тухай",
        cn: "关于我们",
        jp: "会社概要",
        kr: "회사 소개",
      },
    },
    {
      path: "products",
      label: {
        en: "Products",
        mn: "Бүтээгдэхүүн",
        cn: "产品",
        jp: "製品",
        kr: "제품",
      },
    },
    {
      path: "info",
      label: {
        en: "Information",
        mn: "Мэдээ мэдээлэл",
        cn: "资讯",
        jp: "情報",
        kr: "정보",
      },
    },
    {
      path: "contact",
      label: {
        en: "Contact",
        mn: "Холбоо барих",
        cn: "联系我们",
        jp: "お問い合わせ",
        kr: "연락처",
      },
    },
  ];

  useEffect(() => {
    const parts = pathname.split("/").filter(Boolean);
    const currentLang = (parts[0] ?? "en") as typeof selectedLang;
    setSelectedLang(currentLang);
  }, [pathname]);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as typeof selectedLang;
    const parts = pathname.split("/").filter(Boolean);
    parts[0] = newLang;
    const newPath = "/" + parts.join("/");
    router.push(newPath);
  };

  const handleRouteChange = (route: string) => {
    router.push(`/${selectedLang}/${route}`);
  };

  const handleLogoClick = () => {
    router.push(`/${selectedLang}/about`);
  };

  const isActiveRoute = (route: string) => {
    const parts = pathname.split("/").filter(Boolean);
    return parts[1] === route;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a2540] h-[90px] flex items-center justify-between px-8 border-b border-[#d4af37]">
      <button
        onClick={handleLogoClick}
        className="hover:cursor-pointer bg-transparent border-none"
      >
        <img
          className="h-[80px] w-auto"
          src="https://i.imgur.com/tfJ11tq.png"
          alt="Logo"
        />
      </button>

      <div className="hidden lg:flex items-center space-x-8">
        {routes.map((route) => (
          <button
            key={route.path}
            onClick={() => handleRouteChange(route.path)}
            className={`py-2 px-1 text-white font-medium transition-colors duration-200 ${
              isActiveRoute(route.path)
                ? "text-[#f5d58e] border-b-2 border-[#f5d58e]"
                : "hover:text-[#f5d58e]"
            }`}
          >
            {route.label[selectedLang]}
          </button>
        ))}
        <select
          onChange={handleLanguageChange}
          value={selectedLang}
          className="ml-4 p-2 bg-white text-[#0a2540] rounded-md border border-[#f5d58e] focus:outline-none focus:ring-1 focus:ring-[#f5d58e]"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <button
        className="lg:hidden p-2 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-[90px] left-0 right-0 bg-[#0a2540] shadow-lg lg:hidden p-4">
          {routes.map((route) => (
            <button
              key={route.path}
              onClick={() => {
                handleRouteChange(route.path);
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-3 px-4 text-white ${
                isActiveRoute(route.path)
                  ? "bg-[#1a4b6d] text-[#f5d58e]"
                  : "hover:bg-[#1a4b6d] hover:text-[#f5d58e]"
              }`}
            >
              {route.label[selectedLang]}
            </button>
          ))}
          <select
            onChange={(e) => {
              handleLanguageChange(e);
              setIsMobileMenuOpen(false);
            }}
            value={selectedLang}
            className="mt-2 w-full p-2 bg-white text-[#0a2540] rounded-md border border-[#f5d58e]"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      )}
    </header>
  );
};

export default Header;
