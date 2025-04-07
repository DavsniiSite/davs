"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../_components/LanguageContext";

const Header = () => {
  const [pathName, setPathName] = useState("");
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      setPathName(url.pathname);
    }
  }, []);

  return (
    <header className="bg-[#24182E] h-[100px] flex items-center justify-between p-5 drop-shadow-lg">
      <button
        onClick={() => (window.location.href = "/")}
        className="hover:cursor-pointer pt-2"
      >
        <img
          className="h-[50px]"
          src="https://live.staticflickr.com/65535/54377010981_d1792a4b59.jpg"
          alt="Ikh Och Logo"
        />
      </button>

      {/* Desktop & Tablet Navigation */}
      <div className="hidden lg:flex items-center text-[#EFEFEF]">
        {["/", "/about", "/services", "/contact"].map((route) => (
          <button
            key={route}
            onClick={() => (window.location.href = route)}
            className={`p-2 transition-colors duration-300 ease-out ${
              pathName === route
                ? "text-[#FF8A00] border-b-2 border-[#FF8A00]"
                : "hover:text-[#FF8A00] hover:border-b-2 hover:border-[#FF8A00]"
            }`}
          >
            {language === "en"
              ? route === "/"
                ? "Home"
                : route.substring(1).charAt(0).toUpperCase() +
                  route.substring(2)
              : route === "/"
              ? "Нүүр"
              : route === "/about"
              ? "Бидний тухай"
              : route === "/services"
              ? "Үйлчилгээ"
              : "Холбоо барих"}
          </button>
        ))}
        <button
          onClick={() => toggleLanguage(language === "en" ? "mn" : "en")}
          className="ml-4 p-2 bg-[#FF8A00] opacity-[90%]  text-[#EFEFEF] rounded-lg hover:bg-[#FF8A00] hover:opacity-100 transition-all"
        >
          {language === "en" ? "Монгол" : "English"}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center">
        <button
          className="p-2 bg-[#FF8A00] text-[#EFEFEF] rounded-lg"
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
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-[#24182E] p-5 lg:hidden">
          {["/", "/about", "/services", "/contact"].map((route) => (
            <button
              key={route}
              onClick={() => {
                window.location.href = route;
                setIsMobileMenuOpen(false);
              }}
              className={`block p-2 text-[#EFEFEF] transition-colors duration-300 ease-out ${
                pathName === route
                  ? "text-[#FF8A00] border-b-2 border-[#FF8A00]"
                  : "hover:text-[#FF8A00] hover:border-b-2 hover:border-[#FF8A00]"
              }`}
            >
              {language === "en"
                ? route === "/"
                  ? "Home"
                  : route.substring(1).charAt(0).toUpperCase() +
                    route.substring(2)
                : route === "/"
                ? "Нүүр"
                : route === "/about"
                ? "Бидний тухай"
                : route === "/services"
                ? "Үйлчилгээ"
                : "Холбоо барих"}
            </button>
          ))}
          <button
            onClick={() => {
              toggleLanguage(language === "en" ? "mn" : "en");
              setIsMobileMenuOpen(false);
            }}
            className="block mt-4 p-2 bg-[#FF8A00] text-[#EFEFEF] rounded-lg hover:bg-[#FF8A00] hover:opacity-100 transition-all"
          >
            {language === "en" ? "Монгол" : "English"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
