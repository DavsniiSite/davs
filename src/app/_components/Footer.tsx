"use client";

import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
  const lang = (pathname.split("/")[1] || "en") as keyof typeof translateMotto;

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
    <footer className="bg-[#0a2540] text-white pt-16 pb-8 border-t-[1px] border-[#f5d58e]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#f5d58e]">
            Жамц Давс ХХК
          </h3>
          <p className="text-white text-sm leading-relaxed">
            {translateMotto[lang]}
          </p>
          <div className="mt-4">
            <p className="text-white text-sm">
              {lang === "en"
                ? "Address: Uvs Province, Davst soum"
                : lang === "mn"
                ? "Хаяг: Увс аймаг, Давст сум"
                : lang === "jp"
                ? "住所: ウブス県ダブスト郡"
                : lang === "cn"
                ? "地址: 乌布苏省达布斯特县"
                : "주소: 우브스 주 답스트 지역"}
            </p>
            <p className="text-white text-sm mt-1">
              {lang === "en"
                ? "Phone: +976 70118108"
                : lang === "mn"
                ? "Утас: +976 70118108"
                : lang === "jp"
                ? "電話: +976 70118108"
                : lang === "cn"
                ? "电话: +976 70118108"
                : "전화: +976 70118108"}
            </p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold mb-4 text-[#f5d58e]">
            {translateQuickLinks[lang]}
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href={`/${lang}/about`}
                className="text-white hover:text-[#f5d58e] text-sm transition-colors"
              >
                {lang === "en"
                  ? "About"
                  : lang === "mn"
                  ? "Бидний тухай"
                  : lang === "jp"
                  ? "会社概要"
                  : lang === "kr"
                  ? "회사 소개"
                  : "关于我们"}
              </a>
            </li>
            <li>
              <a
                href={`/${lang}/products`}
                className="text-white hover:text-[#f5d58e] text-sm transition-colors"
              >
                {lang === "en"
                  ? "Products"
                  : lang === "mn"
                  ? "Бүтээгдэхүүн"
                  : lang === "jp"
                  ? "製品"
                  : lang === "kr"
                  ? "제품"
                  : "产品"}
              </a>
            </li>
            <li>
              <a
                href={`/${lang}/contact`}
                className="text-white hover:text-[#f5d58e] text-sm transition-colors"
              >
                {lang === "en"
                  ? "Contact"
                  : lang === "mn"
                  ? "Холбоо барих"
                  : lang === "jp"
                  ? "お問い合わせ"
                  : lang === "kr"
                  ? "연락처"
                  : "联系我们"}
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h4 className="text-lg font-bold mb-4 text-[#f5d58e]">
            {translateFollowUs[lang]}
          </h4>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#f5d58e] flex items-center justify-center text-[#0a2540] hover:bg-[#d4af37] transition-colors"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#f5d58e] flex items-center justify-center text-[#0a2540] hover:bg-[#d4af37] transition-colors"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#f5d58e] flex items-center justify-center text-[#0a2540] hover:bg-[#d4af37] transition-colors"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
          <div className="mt-4">
            <p className="text-white text-sm">
              {lang === "en"
                ? "Email: jamtsdavs@outlook.com"
                : lang === "mn"
                ? "И-мэйл: jamtsdavs@outlook.com"
                : lang === "jp"
                ? "メール: jamtsdavs@outlook.com"
                : lang === "cn"
                ? "邮箱: jamtsdavs@outlook.com"
                : "이메일: jamtsdavs@outlook.com"}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-8 mt-8 border-t border-[#1a4b6d]">
        <p className="text-center text-white text-xs">
          &copy; {new Date().getFullYear()} Жамц Давс ХХК. {translations[lang]}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
