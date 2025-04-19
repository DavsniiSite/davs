"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

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

  useEffect(() => {
    const supportedLangs = ["en", "mn", "kr", "jp", "cn"];
    const rawLang = pathname?.split("/")[1];
    const detectedLang = supportedLangs.includes(rawLang!) ? rawLang : "en";
    setLang(detectedLang);
  }, [pathname]);

  const t = useMemo(() => {
    return {
      en: {
        heroTitle: "Our Premium Products",
        heroDesc: "Discover our expert offerings rooted in quality and care.",
        services: "Our Services",
        price: "Price",
        noData: "No services found.",
        safetyTitle: "Our Commitment to Purity",
        safetyDesc:
          "Each product is carefully processed to retain its natural minerals and freshness. We ensure excellence in every step.",
      },
      mn: {
        heroTitle: "Манай дээд зэрэглэлийн бүтээгдэхүүн",
        heroDesc: "Чанар, анхаарлыг нэгдсэн үйлчилгээнүүдийг нээ.",
        services: "Бидний Үйлчилгээ",
        price: "Үнэ",
        noData: "Үйлчилгээ олдсонгүй.",
        safetyTitle: "Цэвэр байдалд бидний амлалт",
        safetyDesc:
          "Бүтээгдэхүүн бүр байгалийн эрдэс бодисыг хадгалж, чанарын хяналтаар боловсруулагдсан.",
      },
      kr: {
        heroTitle: "프리미엄 제품",
        heroDesc: "품질과 세심함을 바탕으로 한 전문가 서비스를 확인하세요.",
        services: "서비스 소개",
        price: "가격",
        noData: "서비스를 찾을 수 없습니다.",
        safetyTitle: "순수함을 위한 우리의 약속",
        safetyDesc:
          "각 제품은 자연의 미네랄을 보존하며 신선하게 가공됩니다. 우리는 매 단계에서 탁월함을 보장합니다.",
      },
      jp: {
        heroTitle: "プレミアム製品",
        heroDesc: "品質とケアに基づくプロフェッショナルな提供をご覧ください。",
        services: "サービス",
        price: "価格",
        noData: "サービスが見つかりません。",
        safetyTitle: "純度へのこだわり",
        safetyDesc:
          "製品はすべて天然ミネラルを保ちながら丁寧に加工されています。",
      },
      cn: {
        heroTitle: "我们的优质产品",
        heroDesc: "探索我们以质量和关怀为基础的专业服务。",
        services: "服务项目",
        price: "价格",
        noData: "未找到服务。",
        safetyTitle: "我们对纯净的承诺",
        safetyDesc: "每种产品都精心加工，保留其天然矿物质和新鲜度。",
      },
    }[lang];
  }, [lang]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("../../api/product/getProducts", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#333]">
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0 bg-[url('https://media.discordapp.net/attachments/1342080785250779177/1360451754445115533/IMG_4867.jpg')] bg-cover bg-center opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFDF00] to-[#f2cc6b] opacity-90"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-light text-[#333] mb-6">
            {t?.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-[#555] max-w-3xl mx-auto">
            {t?.heroDesc}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-center text-[#333] mb-12">
            {t?.services}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.length > 0 ? (
              products.map((item, index) => {
                const subtitle =
                  lang === "en"
                    ? item.subTitleEn
                    : lang === "mn"
                    ? item.subTitleMn
                    : lang === "kr"
                    ? item.subTitleKr
                    : lang === "jp"
                    ? item.subTitleJp
                    : item.subTitleCn;

                const caption =
                  lang === "en"
                    ? item.captionEn
                    : lang === "mn"
                    ? item.captionMn
                    : lang === "kr"
                    ? item.captionKr
                    : lang === "jp"
                    ? item.captionJp
                    : item.captionCn;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-[#eee] p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="h-40 w-full mb-4 overflow-hidden rounded-lg">
                      <img
                        src={item.infoImg}
                        alt={subtitle}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-medium text-[#333] mb-2">
                      {subtitle}
                    </h3>
                    <p className="text-[#666] mb-4 text-sm">{caption}</p>
                    <p className="text-[#3a7ca5] font-semibold">
                      {t?.price}: {item.price}₮
                    </p>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                {t?.noData}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#f8f8f8] to-[#e8f4fc]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-[#333] mb-6">
            {t?.safetyTitle}
          </h2>
          <p className="text-lg text-[#555]">{t?.safetyDesc}</p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
