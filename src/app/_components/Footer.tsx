"use client";

import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();

  const language = (pathname.split("/")[1] ||
    "en") as keyof typeof translateMotto;

  const translations: Record<string, string> = {
    en: "All rights reserved.",
    mn: "Бүх эрх хуулиар хамгаалагдсан.",
    jp: "全著作権所有。",
    kr: "모든 권리 보유.",
    cn: "版权所有。",
  };

  const translateQuickLinks = {
    en: "Quick Links",
    mn: "Холбоосууд",
    jp: "クイックリンク",
    kr: "빠른 링크",
    cn: "快速链接",
  };

  const translateFollowUs = {
    en: "Follow Us",
    mn: "Бидэнтэй нэгдээрэй",
    jp: "フォローする",
    kr: "팔로우하기",
    cn: "关注我们",
  };

  const translateMotto = {
    en: "Crafting purity from the heart of the earth.",
    mn: "Газрын гүнээс цэвэр байгалийн гайхамшгийг хүргэнэ.",
    jp: "大地の恵みから純粋さを届けます。",
    kr: "대지의 중심에서 순수함을 선사합니다.",
    cn: "将纯净从大地深处带给您。",
  };

  return (
    <footer className="bg-[#333] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-light mb-4">Shuden Rock Salt</h3>
          <p className="text-[#bbb] text-sm leading-relaxed">
            {translateMotto[language]}
          </p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-lg font-light mb-4">
            {translateQuickLinks[language]}
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href={`/about/${language}`}
                className="text-[#bbb] hover:text-white text-sm transition-colors"
              >
                {language === "en"
                  ? "About"
                  : language === "mn"
                  ? "Танилцуулга"
                  : language === "jp"
                  ? "会社概要"
                  : language === "kr"
                  ? "회사 소개"
                  : "关于我们"}
              </a>
            </li>
            <li>
              <a
                href={`/services/${language}`}
                className="text-[#bbb] hover:text-white text-sm transition-colors"
              >
                {language === "en"
                  ? "Services"
                  : language === "mn"
                  ? "Үйлчилгээ"
                  : language === "jp"
                  ? "サービス"
                  : language === "kr"
                  ? "서비스"
                  : "服务"}
              </a>
            </li>
            <li>
              <a
                href={`/contact/${language}`}
                className="text-[#bbb] hover:text-white text-sm transition-colors"
              >
                {language === "en"
                  ? "Contact"
                  : language === "mn"
                  ? "Холбоо барих"
                  : language === "jp"
                  ? "お問い合わせ"
                  : language === "kr"
                  ? "연락처"
                  : "联系我们"}
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h4 className="text-lg font-light mb-4">
            {translateFollowUs[language]}
          </h4>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#444] flex items-center justify-center text-white hover:bg-[#3a7ca5] transition-colors"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#444] flex items-center justify-center text-white hover:bg-[#3a7ca5] transition-colors"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#444] flex items-center justify-center text-white hover:bg-[#3a7ca5] transition-colors"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 mt-8 border-t border-[#444]">
        <p className="text-center text-[#999] text-xs">
          &copy; {new Date().getFullYear()} Shuden Rock Salt.{" "}
          {translations[language]}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
