"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface Product {
  id: string;
  infoImg: string;
  subTitleMn: string;
  subTitleJp: string;
  subTitleKr: string;
  subTitleCn: string;
  subTitleEn: string;
  captionEn: string;
  captionMn: string;
  captionKr: string;
  captionCn: string;
  captionJp: string;
  price: number;
}

const ServicesPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const pathname = usePathname();
  const [lang, setLang] = useState("en");
  const router = useRouter();

  const fetchProducts = async () => {
    const response = await fetch("/api/product/getProducts");
    const data = await response.json();
    setProducts(data);
  };

  const handleContactClick = () => {
    router.push(`/${lang}/contact`);
  };

  useEffect(() => {
    const supportedLangs = ["en", "mn", "kr", "jp", "cn"];
    const rawLang = pathname?.split("/")[1];
    const detectedLang = supportedLangs.includes(rawLang!) ? rawLang : "en";
    setLang(detectedLang);
  }, [pathname]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const t = useMemo(() => {
    return {
      en: {
        heroTitle: "Premium Himalayan Salt Collection",
        heroDesc: "Discover nature's purity in every crystal",
        products: "Our Products",
        price: "Price",
        noData: "Currently updating our product line",
        viewDetails: "View Details",
        benefits: "Key Benefits:",
        ctaTitle: "Experience the Difference",
        ctaText: "Contact us for wholesale and bulk orders",
        ctaButton: "Get in Touch",
      },
      mn: {
        heroTitle: "Гималайн давсны цуглуулга",
        heroDesc: "Байгалийн цэвэр байдлыг илрүүл",
        products: "Бидний бүтээгдэхүүн",
        price: "Үнэ",
        noData: "Бүтээгдэхүүний шугамыг шинэчлэж байна",
        viewDetails: "Дэлгэрэнгүй",
        benefits: "Гол давуу тал:",
        ctaTitle: "Ялгааг мэдэр",
        ctaText:
          "Бөөний болон томоохон захиалгын тулд бидэнтэй холбоо барина уу",
        ctaButton: "Холбоо барих",
      },
      kr: {
        heroTitle: "프리미엄 히말라야 솔트 컬렉션",
        heroDesc: "모든 결정에서 자연의 순수함을 발견하세요",
        products: "제품 소개",
        price: "가격",
        noData: "제품 라인 업데이트 중",
        viewDetails: "자세히 보기",
        benefits: "주요 이점:",
        ctaTitle: "차이를 경험하세요",
        ctaText: "도매 및 대량 주문 문의",
        ctaButton: "문의하기",
      },
      jp: {
        heroTitle: "プレミアムヒマラヤソルトコレクション",
        heroDesc: "結晶ごとに自然の純粋さを発見",
        products: "製品一覧",
        price: "価格",
        noData: "製品ラインを更新中",
        viewDetails: "詳細を見る",
        benefits: "主な利点:",
        ctaTitle: "違いを体験",
        ctaText: "卸売りおよび大口注文についてはお問い合わせください",
        ctaButton: "お問い合わせ",
      },
      cn: {
        heroTitle: "优质喜马拉雅盐系列",
        heroDesc: "在每一颗晶体中发现大自然的纯净",
        products: "我们的产品",
        price: "价格",
        noData: "正在更新产品线",
        viewDetails: "查看详情",
        benefits: "主要优点:",
        ctaTitle: "体验不同",
        ctaText: "联系我们获取批发和大宗订单",
        ctaButton: "联系我们",
      },
    }[lang];
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#f9f9f9] pt-[90px]">
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.discordapp.net/attachments/1342080785250779177/1360451755220930861/IMG_4869.jpg?ex=68138eae&is=68123d2e&hm=8c28683430e4c4b6d7eb598d142be48151c62e1394c2755254bb35c19e1dc3eb&=&format=webp&width=1544&height=1294"
            alt="Himalayan Salt Mine"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] to-transparent opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540] to-transparent opacity-60"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white opacity-20"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#d4af37] text-white text-sm font-semibold rounded-full">
              {lang === "en" && "Pure Natural"}
              {lang === "mn" && "Цэвэр байгалийн"}
              {lang === "kr" && "천연 순수"}
              {lang === "jp" && "ピュアナチュラル"}
              {lang === "cn" && "纯天然"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t?.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            {t?.heroDesc}
          </p>
          <button
            onClick={() => {
              const productsSection = document.getElementById("products");
              productsSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-transparent border-2 border-[#d4af37] text-white font-bold rounded-md hover:bg-[#d4af37] hover:text-[#0a2540] transition-all duration-300 flex items-center mx-auto"
          >
            {t?.viewDetails}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>

      <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4 relative inline-block">
            {t?.products}
            <span className="absolute -bottom-2 left-0 right-0 mx-auto w-16 h-1 bg-[#d4af37]"></span>
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto mt-4">
            {lang === "en" &&
              "Handcrafted with care from the Himalayan mountains"}
            {lang === "mn" &&
              "Гималайн уулын нутагт анхааралтай гар арчаар боловсруулсан"}
            {lang === "kr" && "히말라야 산맥에서 정성스럽게 제작"}
            {lang === "jp" && "ヒマラヤ山脈から心を込めて手作り"}
            {lang === "cn" && "来自喜马拉雅山脉的精心手工制作"}
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              // Correct language key formatting (first letter capitalized only)
              const formattedLang =
                lang.charAt(0).toUpperCase() + lang.slice(1).toLowerCase();
              const subtitle =
                product[`subTitle${formattedLang}` as keyof Product];
              const caption =
                product[`caption${formattedLang}` as keyof Product];

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-64 w-full overflow-hidden relative">
                    <img
                      src={product.infoImg}
                      alt={String(subtitle)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-[#0a2540]">
                        {subtitle}
                      </h3>
                      <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-sm font-semibold rounded-full">
                        {product.price?.toLocaleString()}₮
                      </span>
                    </div>

                    <p className="text-[#555] mb-4">{caption}</p>

                    <button
                      onClick={() =>
                        (window.location.href = `http://localhost:3000/${lang}/contact`)
                      }
                      className="w-full mt-4 px-4 py-3 bg-[#0a2540] text-white rounded-md hover:bg-[#1a4b6d] transition-colors flex items-center justify-center"
                    >
                      {lang === "en" && "Buy Now"}
                      {lang === "mn" && "Худалдаж авах"}
                      {lang === "jp" && "購入する"}
                      {lang === "kr" && "구매하기"}
                      {lang === "cn" && "立即购买"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-white rounded-xl shadow-lg max-w-2xl mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 text-[#d4af37]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0a2540] mb-3">
                {lang === "en" && "New Collection Coming Soon"}
                {lang === "mn" && "Шинэ цуглуулга удахгүй"}
                {lang === "kr" && "새로운 컬렉션 곧 출시"}
                {lang === "jp" && "新コレクション近日公開"}
                {lang === "cn" && "新系列即将推出"}
              </h3>
              <p className="text-lg text-[#555] mb-6">{t?.noData}</p>
              <button
                onClick={handleContactClick}
                className="px-6 py-2 bg-[#d4af37] text-white rounded-md hover:bg-[#0a2540] transition-colors"
              >
                {t?.ctaButton}
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="py-16 bg-[#0a2540] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-[#d4af37]"
              style={{
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                opacity: Math.random() * 0.3 + 0.1,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block p-3 bg-[#d4af37] rounded-full mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#0a2540]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t?.ctaTitle}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t?.ctaText}
          </p>
          <button
            onClick={handleContactClick}
            className="px-8 py-3 bg-[#d4af37] text-[#0a2540] font-bold rounded-md hover:bg-white hover:text-[#0a2540] transition-colors flex items-center mx-auto"
          >
            {t?.ctaButton}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
