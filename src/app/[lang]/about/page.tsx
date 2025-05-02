"use client";

import { usePathname } from "next/navigation";
import { GiCrystalBars } from "react-icons/gi";
import { motion } from "framer-motion";

interface AboutInfo {
  aboutMn: string;
  aboutEn: string;
  aboutKr: string;
  aboutCn: string;
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
    aboutCn:
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
    cta: {
      en: "Discover Our Products",
      mn: "Бүтээгдэхүүнүүдээ үзэх",
      kr: "제품 살펴보기",
      cn: "探索我们的产品",
      jp: "製品を見る",
    },
  };

  return (
    <div className="bg-gradient-to-b from-[#f9f9f9] to-[#f0f0f0]">
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/RkFMbPDG/davs5.jpg')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/90 to-[#f2cc6b]/90"></div>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#ffffff]/40"
            style={{
              fontSize: `${Math.random() * 2 + 1}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <GiCrystalBars />
          </motion.div>
        ))}

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            {t.about[language]}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white opacity-90 mb-8"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            {
              sampleInfo[
                `about${
                  language.charAt(0).toUpperCase() + language.slice(1)
                }` as keyof AboutInfo
              ]
            }
          </motion.p>
          <motion.a
            href={`/${language}/products`}
            className="inline-flex items-center px-6 py-3 bg-white text-[#0a2540] font-bold rounded-md hover:bg-[#f8f8f8] transition-colors shadow-lg hover:shadow-xl"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            {t.cta[language]}
          </motion.a>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-[#333] mb-16 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t.missionVision[language]}
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#d4af37] rounded-full"></span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#d4a3a6]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#d4af37] p-2 rounded-full mr-4">
                  <GiCrystalBars className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#3a7ca5]">
                  {t.mission[language]}
                </h3>
              </div>
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
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#7fb3d5]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#d4af37] p-2 rounded-full mr-4">
                  <GiCrystalBars className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#3a7ca5]">
                  {t.vision[language]}
                </h3>
              </div>
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
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f0f7fc] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#d4af37]/20"
              style={{
                fontSize: `${Math.random() * 2 + 1}rem`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                rotate: `${Math.random() * 360}deg`,
              }}
              animate={{
                y: [0, Math.random() * 40 - 20],
                x: [0, Math.random() * 40 - 20],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <GiCrystalBars />
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-3xl font-bold text-[#333] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t.sustainability[language]}
          </motion.h2>

          <motion.p
            className="text-lg text-[#555] mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {language === "en"
              ? "We prioritize sustainability in every step of our production process, from sourcing the finest quality salt to minimizing our environmental footprint. By using eco-friendly packaging and supporting fair trade practices, we ensure that our products benefit both people and the planet."
              : language === "mn"
              ? "Бид үйлдвэрлэлийн бүх алхамдаа тогтвортой байдлыг тэргүүлэх ач холбогдол өгдөг. Бид хамгийн өндөр чанартай давсыг олох, байгаль орчны нөлөөллийг бууруулах зорилгоор экологийн хуванцар баглаа боодлыг ашиглаж, шударга худалдааг дэмжиж, манай бүтээгдэхүүнийг хүмүүс болон дэлхийд ашигтай байлгахыг хичээдэг."
              : language === "kr"
              ? "우리는 생산 과정의 모든 단계에서 지속 가능성을 우선시합니다. 최고의 품질의 소금을 공급하는 것부터 환경에 미치는 영향을 최소화하는 것까지. 환경 친화적인 포장을 사용하고 공정 거래 관행을 지원함으로써 우리의 제품이 사람들과 지구에 모두 이익을 주도록 보장합니다."
              : language === "cn"
              ? "我们在生产过程的每个步骤中都优先考虑可持续性，从采购最优质的盐到尽量减少我们的环境足迹。通过使用环保包装和支持公平贸易实践，我们确保我们的产品既造福人类也造福地球。"
              : "私たちは生産過程のすべての段階で持続可能性を最優先にしています。最高品質の塩を調達することから、環境への影響を最小限に抑えることまで。エコフレンドリーなパッケージを使用し、公正取引の実践を支援することで、私たちの製品が人々と地球に利益をもたらすことを保証します。"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href={`/${language}/products`}
              className="inline-flex items-center px-6 py-3 bg-[#d4af37] text-[#0a2540] font-bold rounded-lg hover:bg-[#c19b2e] transition-colors shadow-lg"
            >
              <GiCrystalBars className="mr-2" />
              {t.cta[language]}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
