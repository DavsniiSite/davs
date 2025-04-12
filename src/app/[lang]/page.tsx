"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const HomePage = () => {
  const pathname = usePathname();
  const language = (pathname.split("/")[1] ||
    "en") as keyof typeof translations;
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleServiceHover = (id: number) => {
    setHoveredService(id);
  };

  const handleServiceLeave = () => {
    setHoveredService(null);
  };

  const translations = {
    en: {
      heading: "Welcome to Shuden Rock Salt",
      description:
        "Discover the purity and quality of our premium pink salt. We provide natural, sustainably sourced salt products for your health, kitchen, and wellness needs.",
      servicesHeading: "Our Products",
      pinkSalt: "Premium Pink Salt",
      saltSolutions: "Salt Solutions",
      pinkSaltDescription:
        "We offer the finest quality Himalayan pink salt for cooking, health, and wellness.",
      saltSolutionsDescription:
        "Custom salt solutions for culinary, therapeutic, and industrial applications.",
      learnMore: "Learn More",
    },
    mn: {
      heading: "Шүдэн Рок Солт-д тавтай морилно уу",
      description:
        "Манай дээд зэргийн ягаан давсны цэвэр байдал, чанарыг нээж үзээрэй. Бид таны эрүүл мэнд, гал тогоо, эрүүл амьдрах хэрэгцээнд зориулсан байгалийн, тогтвортой эх үүсвэрээс гаргасан давсны бүтээгдэхүүнийг санал болгодог.",
      servicesHeading: "Бидний Бүтээгдэхүүн",
      pinkSalt: "Дээд зэргийн ягаан давс",
      saltSolutions: "Давсны шийдлүүд",
      pinkSaltDescription:
        "Бид хоол хийх, эрүүл мэнд, эрүүл амьдрахад зориулсан Гималайн ягаан давсны хамгийн сайн чанарыг санал болгодог.",
      saltSolutionsDescription:
        "Хоол хийх, эмчилгээ, аж үйлдвэрийн хэрэглээнд зориулсан давсны шийдлүүд.",
      learnMore: "Дэлгэрэнгүй",
    },
    cn: {
      heading: "欢迎来到Shuden Rock Salt",
      description:
        "发现我们优质粉红盐的纯度和质量。我们为您提供天然、可持续来源的盐产品，满足您的健康、厨房和保健需求。",
      servicesHeading: "我们的产品",
      pinkSalt: "优质粉红盐",
      saltSolutions: "盐解决方案",
      pinkSaltDescription:
        "我们提供最优质的喜马拉雅粉红盐，用于烹饪、健康和保健。",
      saltSolutionsDescription: "为烹饪、治疗和工业应用定制的盐解决方案。",
      learnMore: "了解更多",
    },
    jp: {
      heading: "シュデンロックソルトへようこそ",
      description:
        "当社のプレミアムピンクソルトの純度と品質をご覧ください。健康、キッチン、ウェルネスのニーズに応える天然で持続可能なソルト製品を提供しています。",
      servicesHeading: "当社の製品",
      pinkSalt: "プレミアムピンクソルト",
      saltSolutions: "ソルトソリューション",
      pinkSaltDescription:
        "料理、健康、ウェルネスに最適な最高品質のヒマラヤピンクソルトを提供しています。",
      saltSolutionsDescription:
        "料理、治療、産業用途に合わせたカスタムソルトソリューション。",
      learnMore: "詳細を見る",
    },
    kr: {
      heading: "Shuden Rock Salt에 오신 것을 환영합니다",
      description:
        "프리미엄 핑크 소금의 순도와 품질을 발견하세요. 건강, 주방 및 웰니스 요구를 위한 천연, 지속 가능하게 공급되는 소금 제품을 제공합니다.",
      servicesHeading: "우리 제품",
      pinkSalt: "프리미엄 핑크 소금",
      saltSolutions: "소금 솔루션",
      pinkSaltDescription:
        "요리, 건강 및 웰빙을 위한 최고 품질의 히말라야 핑크 소금을 제공합니다.",
      saltSolutionsDescription:
        "요리, 치료 및 산업 응용을 위한 맞춤형 소금 솔루션.",
      learnMore: "더 알아보기",
    },
  };

  const content = translations[language];

  return (
    <div className="mt-[90px]">
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0 bg-[url('https://media.discordapp.net/attachments/1342080785250779177/1360451754445115533/IMG_4867.jpg')] bg-cover bg-center opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8e5e6] to-[#e2f1f8] opacity-90"></div>

        <div className="relative z-10 max-w-6xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#333] mb-6 leading-tight">
            {content.heading}
          </h1>
          <p className="text-lg md:text-xl text-[#555] mb-8 max-w-3xl mx-auto">
            {content.description}
          </p>
          <Link
            href={`/${language}/about`}
            className="inline-block px-8 py-3 bg-[#3a7ca5] text-white rounded-md hover:bg-[#2c5d7a] transition-colors duration-300 font-medium"
          >
            {content.learnMore}
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-center text-[#333] mb-12">
            {content.servicesHeading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`p-8 rounded-lg border border-[#eee] transition-all duration-300 ${
                hoveredService === 1
                  ? "shadow-lg bg-[#fafafa]"
                  : "hover:shadow-md"
              }`}
              onMouseEnter={() => handleServiceHover(1)}
              onMouseLeave={handleServiceLeave}
            >
              <div className="h-12 w-12 bg-[#f8e5e6] rounded-full flex items-center justify-center mb-4">
                <span className="text-[#d4a3a6] text-xl">✧</span>
              </div>
              <h3 className="text-2xl font-medium text-[#333] mb-3">
                {content.pinkSalt}
              </h3>
              <p className="text-[#666] mb-6">{content.pinkSaltDescription}</p>
              <Link
                href={`/${language}/products`}
                className="inline-flex items-center text-[#3a7ca5] hover:text-[#2c5d7a] transition-colors"
              >
                {content.learnMore}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>

            <div
              className={`p-8 rounded-lg border border-[#eee] transition-all duration-300 ${
                hoveredService === 2
                  ? "shadow-lg bg-[#fafafa]"
                  : "hover:shadow-md"
              }`}
              onMouseEnter={() => handleServiceHover(2)}
              onMouseLeave={handleServiceLeave}
            >
              <div className="h-12 w-12 bg-[#e2f1f8] rounded-full flex items-center justify-center mb-4">
                <span className="text-[#7fb3d5] text-xl">✧</span>
              </div>
              <h3 className="text-2xl font-medium text-[#333] mb-3">
                {content.saltSolutions}
              </h3>
              <p className="text-[#666] mb-6">
                {content.saltSolutionsDescription}
              </p>
              <Link
                href={`/${language}/products`}
                className="inline-flex items-center text-[#3a7ca5] hover:text-[#2c5d7a] transition-colors"
              >
                {content.learnMore}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
