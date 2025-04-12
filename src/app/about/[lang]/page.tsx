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

  const getLanguageFromPath = (pathname: string) => {
    const pathSegments = pathname.split("/");
    return pathSegments[pathSegments.length - 1];
  };

  const language = getLanguageFromPath(pathname);

  return (
    <div>
      <section
        className="h-[60vh] bg-cover bg-center text-white flex flex-col items-center justify-center text-center p-10 sm:h-[50vh] lg:h-[60vh]"
        style={{
          backgroundImage:
            "url('https://media.discordapp.net/attachments/1342080785250779177/1360451754445115533/IMG_4867.jpg?ex=67fb2aee&is=67f9d96e&hm=8d85a793a5d2d7745069b8bbc647562d7758b5f3a252f18c4f0ff0dfb1064db6&=&format=webp&width=816&height=1088')",
        }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          {language === "en"
            ? "About Us"
            : language === "mn"
            ? "Бидний тухай"
            : language === "kr"
            ? "회사 소개"
            : language === "ch"
            ? "关于我们"
            : "私たちについて"}
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mb-6">
          {language === "en"
            ? sampleInfo.aboutEn
            : language === "mn"
            ? sampleInfo.aboutMn
            : language === "kr"
            ? sampleInfo.aboutKr
            : language === "ch"
            ? sampleInfo.aboutCh
            : sampleInfo.aboutJp}
        </p>
      </section>

      <section className="bg-[#F9F9F9] p-6 sm:p-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2D1E3C] mb-6">
          {language === "en"
            ? "Our Mission & Vision"
            : language === "mn"
            ? "Бидний Эрхэм зорилго ба Алсын хараа"
            : language === "kr"
            ? "우리의 미션 및 비전"
            : language === "ch"
            ? "我们的使命与愿景"
            : "私たちの使命とビジョン"}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
          <div className="bg-[#FFCCE1] p-6 rounded-lg shadow-lg max-w-sm mx-auto transition transform hover:scale-105 duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#2D1E3C] mb-4">
              {language === "en"
                ? "Mission"
                : language === "mn"
                ? "Үйл ажиллагаа"
                : language === "kr"
                ? "미션"
                : language === "ch"
                ? "使命"
                : "ミッション"}
            </h3>
            <p className="text-gray-700">
              {language === "en"
                ? "Our mission is to provide the highest quality pink salt products, ensuring health, wellness, and sustainability in every batch we produce."
                : language === "mn"
                ? "Манай эрхэм зорилго нь хамгийн өндөр чанартай роза давс бүтээгдэхүүнүүдийг хангаж, эрүүл мэнд, сайн сайхан байдал, тогтвортой байдлыг хангах явдал юм."
                : language === "kr"
                ? "우리의 미션은 최고 품질의 분홍색 소금 제품을 제공하여 건강, 웰빙 및 지속 가능성을 보장하는 것입니다."
                : language === "ch"
                ? "我们的使命是提供最高质量的粉红盐产品，确保每一批产品的健康、福祉和可持续性。"
                : "私たちの使命は、健康、ウェルネス、持続可能性を保証する最高品質のピンクソルト製品を提供することです。"}
            </p>
          </div>

          <div className="bg-[#A9D3F2] p-6 rounded-lg shadow-lg max-w-sm mx-auto transition transform hover:scale-105 duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#2D1E3C] mb-4">
              {language === "en"
                ? "Vision"
                : language === "mn"
                ? "Алсын Хараа"
                : language === "kr"
                ? "비전"
                : language === "ch"
                ? "愿景"
                : "ビジョン"}
            </h3>
            <p className="text-gray-700">
              {language === "en"
                ? "Our vision is to become a globally recognized brand for high-quality and eco-friendly pink salt products that contribute to better health worldwide."
                : language === "mn"
                ? "Манай хараа нь дэлхий даяар эрүүл мэндэд эерэг нөлөө үзүүлдэг байгаль орчинд ээлтэй, өндөр чанартай роза давс бүтээгдэхүүний олон улсын брэнд болох явдал юм."
                : language === "kr"
                ? "우리의 비전은 전 세계적으로 인정받는 고품질 친환경 핑크 소금 제품 브랜드가 되어 전 세계 건강에 기여하는 것입니다."
                : language === "ch"
                ? "我们的愿景是成为全球公认的高品质环保粉红盐品牌，为全球健康做出贡献。"
                : "私たちのビジョンは、世界中の健康に貢献する高品質で環境に優しいピンクソルト製品のブランドとして世界的に認知されることです。"}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#E9F8FB] p-6 sm:p-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2D1E3C] mb-6">
          {language === "en"
            ? "Our Sustainability Practices"
            : language === "mn"
            ? "Манай Тогтвортой Үйл ажиллагаа"
            : language === "kr"
            ? "우리의 지속 가능성 실천"
            : language === "ch"
            ? "我们的可持续实践"
            : "私たちの持続可能な実践"}
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-6">
            {language === "en"
              ? "We prioritize sustainability in every step of our production process, from sourcing the finest quality salt to minimizing our environmental footprint. By using eco-friendly packaging and supporting fair trade practices, we ensure that our products benefit both people and the planet."
              : language === "mn"
              ? "Бид үйлдвэрлэлийн бүх алхамдаа тогтвортой байдлыг тэргүүлэх ач холбогдол өгдөг. Бид хамгийн өндөр чанартай давсыг олох, байгаль орчны нөлөөллийг бууруулах зорилгоор экологийн хуванцар баглаа боодлыг ашиглаж, шударга худалдааг дэмжиж, манай бүтээгдэхүүнийг хүмүүс болон дэлхийд ашигтай байлгахыг хичээдэг."
              : language === "kr"
              ? "우리는 생산 과정의 모든 단계에서 지속 가능성을 우선시합니다. 최고의 품질의 소금을 공급하는 것부터 환경에 미치는 영향을 최소화하는 것까지. 환경 친화적인 포장을 사용하고 공정 거래 관행을 지원함으로써 우리의 제품이 사람들과 지구에 모두 이익을 주도록 보장합니다."
              : language === "ch"
              ? "我们在生产过程的每个步骤中都优先考虑可持续性，从采购最优质的盐到尽量减少我们的环境足迹。通过使用环保包装和支持公平贸易实践，我们确保我们的产品既造福人类也造福地球。"
              : "私たちは生産過程のすべての段階で持続可能性を最優先にしています。最高品質の塩を調達することから、環境への影響を最小限に抑えることまで。エコフレンドリーなパッケージを使用し、公正取引の実践を支援することで、私たちの製品が人々と地球に利益をもたらすことを保証します。"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
