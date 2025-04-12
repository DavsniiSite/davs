"use client";

import { usePathname } from "next/navigation";

interface AboutInfo {
  aboutMn: string;
  aboutEn: string;
  aboutKr: string;
  aboutCh: string;
  aboutJp: string;
}

const AboutPage = () => {
  const pathname = usePathname();

  const sampleInfo: AboutInfo = {
    aboutMn:
      "Манай компани нь байгаль орчинд ээлтэй, экологийн нөхцөлд нийцсэн роза давс бүтээгдэхүүнийг үйлдвэрлэж, хэрэглэгчдэдээ хүргэдэг.",
    aboutEn:
      "Our company specializes in producing eco-friendly pink salt products that meet ecological standards and are delivered to our customers worldwide.",
    aboutKr:
      "저희 회사는 환경 친화적인 로즈 소금 제품을 생산하여 전 세계 고객에게 제공합니다.",
    aboutCh:
      "我们的公司专注于生产符合生态标准的环保粉红盐产品，并将其提供给全球客户。",
    aboutJp:
      "私たちの会社はエコフレンドリーなローズソルト製品を製造し、世界中のお客様にお届けしています。",
  };

  const getLanguageFromPath = (
    pathname: string
  ): keyof typeof t.sustainability => {
    const pathSegments = pathname.split("/");
    const lang = pathSegments[1];
    if (["en", "mn", "kr", "cn", "jp"].includes(lang)) {
      return lang as keyof typeof t.sustainability;
    }
    return "en";
  };

  const language: keyof typeof t.sustainability = getLanguageFromPath(pathname);

  const t = {
    about: {
      en: "About Us",
      mn: "Бидний тухай",
      kr: "회사 소개",
      cn: "关于我们",
      jp: "私たちについて",
    },
    missionVision: {
      en: "Our Mission & Vision",
      mn: "Бидний Эрхэм зорилго ба Алсын хараа",
      kr: "우리의 미션 및 비전",
      cn: "我们的使命与愿景",
      jp: "私たちの使命とビジョン",
    },
    mission: {
      en: "Mission",
      mn: "Үйл ажиллагаа",
      kr: "미션",
      cn: "使命",
      jp: "ミッション",
    },
    vision: {
      en: "Vision",
      mn: "Алсын Хараа",
      kr: "비전",
      cn: "愿景",
      jp: "ビジョン",
    },
    sustainability: {
      en: "Our Sustainability Practices",
      mn: "Манай Тогтвортой Үйл ажиллагаа",
      kr: "우리의 지속 가능성 실천",
      cn: "我们的可持续实践",
      jp: "私たちの持続可能な実践",
    },
  };

  return (
    <div className="bg-[#f9f9f9]">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0 bg-[url('https://media.discordapp.net/attachments/1342080785250779177/1360451754445115533/IMG_4867.jpg')] bg-cover bg-center opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8e5e6] to-[#e2f1f8] opacity-90"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-light text-[#333] mb-4">
            {t.about[language]}
          </h1>
          <p className="text-lg md:text-xl text-[#555] max-w-3xl mx-auto">
            {language === "en"
              ? sampleInfo.aboutEn
              : language === "mn"
              ? sampleInfo.aboutMn
              : language === "kr"
              ? sampleInfo.aboutKr
              : language === "cn"
              ? sampleInfo.aboutCh
              : sampleInfo.aboutJp}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-center text-[#333] mb-12">
            {t.missionVision[language]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f8f8f8] p-8 rounded-lg border-l-4 border-[#d4a3a6]">
              <h3 className="text-2xl font-medium text-[#3a7ca5] mb-4">
                {t.mission[language]}
              </h3>
              <p className="text-[#555]">
                {language === "en"
                  ? "Our mission is to provide the highest quality pink salt products, ensuring health, wellness, and sustainability in every batch we produce."
                  : language === "mn"
                  ? "Манай эрхэм зорилго нь хамгийн өндөр чанартай роза давс бүтээгдэхүүнүүдийг хангаж, эрүүл мэнд, сайн сайхан байдал, тогтвортой байдлыг хангах явдал юм."
                  : language === "kr"
                  ? "우리의 미션은 최고 품질의 분홍색 소금 제품을 제공하여 건강, 웰빙 및 지속 가능성을 보장하는 것입니다."
                  : language === "cn"
                  ? "我们的使命是提供最高质量的粉红盐产品，确保每一批产品的健康、福祉和可持续性。"
                  : "私たちの使命は、健康、ウェルネス、持続可能性を保証する最高品質のピンクソルト製品を提供することです。"}
              </p>
            </div>

            <div className="bg-[#f8f8f8] p-8 rounded-lg border-l-4 border-[#7fb3d5]">
              <h3 className="text-2xl font-medium text-[#3a7ca5] mb-4">
                {t.vision[language]}
              </h3>
              <p className="text-[#555]">
                {language === "en"
                  ? "Our vision is to become a globally recognized brand for high-quality and eco-friendly pink salt products that contribute to better health worldwide."
                  : language === "mn"
                  ? "Манай хараа нь дэлхий даяар эрүүл мэндэд эерэг нөлөө үзүүлдэг байгаль орчинд ээлтэй, өндөр чанартай роза давс бүтээгдэхүүний олон улсын брэнд болох явдал юм."
                  : language === "kr"
                  ? "우리의 비전은 전 세계적으로 인정받는 고품질 친환경 핑크 소금 제품 브랜드가 되어 전 세계 건강에 기여하는 것입니다."
                  : language === "cn"
                  ? "我们的愿景是成为全球公认的高品质环保粉红盐品牌，为全球健康做出贡献。"
                  : "私たちのビジョンは、世界中の健康に貢献する高品質で環境に優しいピンクソルト製品のブランドとして世界的に認知されることです。"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f0f7fc]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-[#333] mb-8">
            {t.sustainability[language]}
          </h2>
          <p className="text-lg text-[#555]">
            {language === "en"
              ? "We prioritize sustainability in every step of our production process, from sourcing the finest quality salt to minimizing our environmental footprint. By using eco-friendly packaging and supporting fair trade practices, we ensure that our products benefit both people and the planet."
              : language === "mn"
              ? "Бид үйлдвэрлэлийн бүх алхамдаа тогтвортой байдлыг тэргүүлэх ач холбогдол өгдөг. Бид хамгийн өндөр чанартай давсыг олох, байгаль орчны нөлөөллийг бууруулах зорилгоор экологийн хуванцар баглаа боодлыг ашиглаж, шударга худалдааг дэмжиж, манай бүтээгдэхүүнийг хүмүүс болон дэлхийд ашигтай байлгахыг хичээдэг."
              : language === "kr"
              ? "우리는 생산 과정의 모든 단계에서 지속 가능성을 우선시합니다. 최고의 품질의 소금을 공급하는 것부터 환경에 미치는 영향을 최소화하는 것까지. 환경 친화적인 포장을 사용하고 공정 거래 관행을 지원함으로써 우리의 제품이 사람들과 지구에 모두 이익을 주도록 보장합니다."
              : language === "cn"
              ? "我们在生产过程的每个步骤中都优先考虑可持续性，从采购最优质的盐到尽量减少我们的环境足迹。通过使用环保包装和支持公平贸易实践，我们确保我们的产品既造福人类也造福地球。"
              : "私たちは生産過程のすべての段階で持続可能性を最優先にしています。最高品質の塩を調達することから、環境への影響を最小限に抑えることまで。エコフレンドリーなパッケージを使用し、公正取引の実践を支援することで、私たちの製品が人々と地球に利益をもたらすことを保証します。"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
