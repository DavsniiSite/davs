"use client";

import { usePathname } from "next/navigation";

interface Translation {
  whyUs: string;
  points: string[];
  safetyTitle: string;
  safetyDesc: string;
  companyTitle: string;
  companyDesc: string;
  historyTitle: string;
  historyDesc: string;
  missionTitle: string;
  missionDesc: string;
  certificationTitle: string;
  certificationDesc: string;
  socialTitle: string;
  socialDesc: string;
}

const Page = () => {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "mn";

  const t: Record<string, Translation> = {
    en: {
      whyUs: "Premium Himalayan Rock Salt for Livestock",
      points: [
        "Hand-harvested from Shüden Mountain mines",
        "Contains 67+ essential minerals",
        "No additives or processing",
        "Improves digestion and health",
        "Strengthens bones and immunity",
        "Maintains fluid balance",
      ],
      safetyTitle: "Certified Quality",
      safetyDesc:
        "Jamtse Salt meets all Mongolian food safety standards for livestock consumption. Laboratory tested for purity.",
      companyTitle: "Jamtse Salt LLC",
      companyDesc:
        "Leading Himalayan salt producer since 2013, operating in Uvs Province's Shüden Mountain.",
      historyTitle: "Our Heritage",
      historyDesc:
        "Licensed since 2022, combining traditional mining with modern quality control methods.",
      missionTitle: "Our Commitment",
      missionDesc:
        "Deliver authentic Himalayan salt while supporting sustainable mining and local herders.",
      certificationTitle: "Certifications",
      certificationDesc:
        "Approved by Mongolian Food Safety Authority for livestock consumption.",
      socialTitle: "Community Support",
      socialDesc:
        "Invested 400M+ MNT in local projects including museum renovations and free salt distribution.",
    },
    mn: {
      whyUs: "Малын эрүүл мэндэд зориулсан Гималайн давс",
      points: [
        "Шүдэн уулын уурхайнаас гараар олборлосон",
        "67+ эрдэс бодис агуулдаг",
        "Нэмэлт бодисгүй",
        "Хоол боловсруулалт, эрүүл мэндийг сайжруулдаг",
        "Яс, дархлааг бэхжүүлнэ",
        "Шингэний тэнцвэрийг хадгална",
      ],
      safetyTitle: "Батлагдсан чанар",
      safetyDesc:
        "Жамц Давс нь малын тэжээлийн Монголын стандартад нийцсэн. Цэвэршилд нь шинжилгээ хийгдсэн.",
      companyTitle: "Жамц Давс ХХК",
      companyDesc:
        "2013 оноос хойш Увс аймгийн Шүдэн уулын давсны тэргүүлэх үйлдвэрлэгч.",
      historyTitle: "Бидний түүх",
      historyDesc:
        "2022 оноос лицензтэйгээр уламжлалт арга, орчин үеийн чанарын хяналтыг хослуулсан.",
      missionTitle: "Бидний зорилго",
      missionDesc:
        "Жинхэнэ Гималайн давс хүргэхээс гадна тогтвортой олборлолт, малчидтай хамтран ажиллах.",
      certificationTitle: "Гэрчилгээ",
      certificationDesc:
        "Монгол Улсын ХАА-ны яамнаас малын тэжээлд зориулан баталгаажсан.",
      socialTitle: "Нийгмийн хариуцлага",
      socialDesc:
        "Орон нутгийн төслүүдэд 400 сая төгрөгөөс дээш хөрөнгө оруулсан.",
    },
    jp: {
      whyUs: "家畜用プレミアムヒマラヤ岩塩",
      points: [
        "シュデン山鉱山から手作業で採掘",
        "67種類以上の必須ミネラル含有",
        "添加物なし",
        "消化と健康を改善",
        "骨と免疫力を強化",
        "体液バランスを維持",
      ],
      safetyTitle: "認証品質",
      safetyDesc:
        "ジャムツ塩はモンゴルの家畜飼料安全基準を満たしています。純度テスト済み。",
      companyTitle: "ジャムツ塩LLC",
      companyDesc:
        "2013年からウブス県シュデン山で操業するヒマラヤ塩の主要生産者。",
      historyTitle: "私たちの歴史",
      historyDesc:
        "2022年から採掘ライセンスを取得し、伝統的方法と現代の品質管理を組み合わせています。",
      missionTitle: "私たちの約束",
      missionDesc:
        "本物のヒマラヤ塩を提供するとともに、持続可能な採掘と地域の遊牧民を支援します。",
      certificationTitle: "認証",
      certificationDesc: "モンゴル食品安全当局により家畜飼料として認証済み。",
      socialTitle: "社会貢献",
      socialDesc:
        "博物館改修や無料塩配布などの地域プロジェクトに4億トゥグルグ以上を投資。",
    },
    cn: {
      whyUs: "优质喜马拉雅岩盐（牲畜专用）",
      points: [
        "手工开采自舒登山盐矿",
        "含有67种以上必需矿物质",
        "无添加剂",
        "改善消化和健康",
        "强健骨骼和免疫力",
        "维持体液平衡",
      ],
      safetyTitle: "认证质量",
      safetyDesc: "Jamtse盐符合蒙古国牲畜饲料安全标准。经过纯度测试。",
      companyTitle: "Jamtse盐业有限公司",
      companyDesc: "自2013年起在乌布苏省舒登山运营的领先喜马拉雅盐生产商。",
      historyTitle: "我们的历史",
      historyDesc: "自2022年获得采矿许可证，结合传统方法与现代质量控制。",
      missionTitle: "我们的承诺",
      missionDesc: "提供正宗喜马拉雅盐的同时支持可持续采矿和当地牧民。",
      certificationTitle: "认证",
      certificationDesc: "经蒙古食品安全部门批准用于牲畜饲料。",
      socialTitle: "社会责任",
      socialDesc: "已投资超过4亿图格里克用于博物馆修缮和免费盐分发等当地项目。",
    },
    kr: {
      whyUs: "가축용 프리미엄 히말라야 암염",
      points: [
        "슈덴 산 광산에서 수작업으로 채굴",
        "67가지 이상의 필수 미네랄 함유",
        "첨가물 없음",
        "소화 및 건강 개선",
        "뼈와 면역력 강화",
        "체액 균형 유지",
      ],
      safetyTitle: "인증 품질",
      safetyDesc:
        "잠체 소금은 몽골의 가축 사료 안전 기준을 충족합니다. 순도 테스트 완료.",
      companyTitle: "잠체 소금 LLC",
      companyDesc:
        "2013년부터 우브스 주 슈덴 산에서 운영하는 히말라야 소금의 주요 생산업체.",
      historyTitle: "우리의 역사",
      historyDesc:
        "2022년부터 채굴 라이선스를 취득하여 전통적인 방법과 현대적인 품질 관리를 결합했습니다.",
      missionTitle: "우리의 약속",
      missionDesc:
        "진정한 히말라야 소금을 제공하는 동시에 지속 가능한 채굴과 지역 목축민을 지원합니다.",
      certificationTitle: "인증",
      certificationDesc: "몽골 식품 안전 당국에 의해 가축 사료로 승인됨.",
      socialTitle: "사회적 책임",
      socialDesc:
        "박물관 리모델링 및 무료 소금 배포와 같은 지역 프로젝트에 4억 투그릭 이상 투자.",
    },
  };

  return (
    <div className="pt-[90px]">
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50">
          <img
            src="https://i.ibb.co/9kgGQfwB/davs7.jpg"
            alt="Himalayan Salt for Livestock"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center h-full px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t[lang]?.companyTitle}
          </h1>
          <p className="text-xl text-[#f5d58e] max-w-3xl mx-auto font-medium">
            {t[lang]?.companyDesc}
          </p>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-[#f9f9f9] to-[#e6f0f7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0a2540] mb-4">
              {t[lang]?.whyUs}
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-lg text-[#555] max-w-2xl mx-auto">
              {lang === "en"
                ? "Natural mineral supplement for livestock health"
                : lang === "mn"
                ? "Малын эрүүл мэндэд зориулсан байгалийн эрдэс"
                : lang === "jp"
                ? "家畜の健康のための天然ミネラル補助食品"
                : lang === "cn"
                ? "牲畜健康的天然矿物质补充剂"
                : "가축 건강을 위한 천연 미네랄 보충제"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t[lang]?.points.map((point: string, idx: number) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-[#e0e0e0] group"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-[#f5d58e] text-[#0a2540] p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#0a2540] group-hover:text-[#d4af37] transition-colors">
                    {point}
                  </h3>
                </div>
                <p className="text-[#555] pl-12">
                  {lang === "en"
                    ? [
                        "From pristine Himalayan deposits",
                        "Including sodium, iron, calcium",
                        "100% natural composition",
                        "Enhances nutrient absorption",
                        "Reduces disease incidence",
                        "Vital for metabolic functions",
                      ][idx]
                    : lang === "mn"
                    ? [
                        "Эрдэс баялагтай Гималайн орд",
                        "Натри, төмөр, кальци агуулдаг",
                        "Бүрэн байгалийн бүтэц",
                        "Шим тэжээлийн шимэгдэлтийг нэмэгдүүлнэ",
                        "Өвчлөлийг бууруулна",
                        "Бодисын солилцоонд зайлшгүй",
                      ][idx]
                    : lang === "jp"
                    ? [
                        "原始のヒマラヤ堆積層から",
                        "ナトリウム、鉄、カルシウムを含む",
                        "100%天然組成",
                        "栄養吸収を向上",
                        "疾病発生率を低減",
                        "代謝機能に不可欠",
                      ][idx]
                    : lang === "cn"
                    ? [
                        "来自原始喜马拉雅矿藏",
                        "包含钠、铁、钙",
                        "100%天然成分",
                        "增强营养吸收",
                        "降低疾病发生率",
                        "对代谢功能至关重要",
                      ][idx]
                    : [
                        "원시 히말라야 광상에서",
                        "나트륨, 철분, 칼슘 포함",
                        "100% 천연 구성",
                        "영양 흡수 향상",
                        "질병 발생률 감소",
                        "대사 기능에 필수적",
                      ][idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#0a2540] mb-6">
                {t[lang]?.safetyTitle}
              </h2>
              <p className="text-lg text-[#555] mb-8">{t[lang]?.safetyDesc}</p>
              <div className="bg-[#f8f5ec] p-6 rounded-lg border-l-4 border-[#d4af37]">
                <h3 className="text-xl font-semibold text-[#0a2540] mb-2">
                  {t[lang]?.certificationTitle}
                </h3>
                <p className="text-[#0a2540]">{t[lang]?.certificationDesc}</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://i.ibb.co/2x4ZMw7/davs8.jpg"
                alt="Salt Minerals"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#0a2540] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#f5d58e] mb-4">
              {t[lang]?.socialTitle}
            </h2>
            <div className="w-24 h-1 bg-[#f5d58e] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-8">{t[lang]?.socialDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title:
                      lang === "en"
                        ? "Museum Renovation"
                        : lang === "mn"
                        ? "Музейн засвар"
                        : lang === "jp"
                        ? "博物館改修"
                        : lang === "cn"
                        ? "博物馆修缮"
                        : "박물관 리모델링",
                    amount: "150M MNT",
                    year: "2015",
                  },
                  {
                    title:
                      lang === "en"
                        ? "Sports Hall Repair"
                        : lang === "mn"
                        ? "Спорт залын засвар"
                        : lang === "jp"
                        ? "体育館修理"
                        : lang === "cn"
                        ? "体育馆修复"
                        : "체육관 수리",
                    amount: "250M MNT",
                    year: "2019",
                  },
                  {
                    title:
                      lang === "en"
                        ? "Free Salt Distribution"
                        : lang === "mn"
                        ? "Үнэ төлбөргүй давс"
                        : lang === "jp"
                        ? "無料塩配布"
                        : lang === "cn"
                        ? "免费盐分发"
                        : "무료 소금 배포",
                    amount: "200M+ MNT",
                    year: "2019-",
                  },
                  {
                    title:
                      lang === "en"
                        ? "Emergency Support"
                        : lang === "mn"
                        ? "Онцгой байдлын тусламж"
                        : lang === "jp"
                        ? "緊急支援"
                        : lang === "cn"
                        ? "紧急援助"
                        : "긴급 지원",
                    amount: "4M MNT",
                    year: "2023",
                  },
                ].map((project, index) => (
                  <div key={index} className="bg-[#1a4b6d] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#f5d58e]">
                      {project.title}
                    </h3>
                    <p className="text-white mt-2">
                      <span className="font-medium">{project.amount}</span> (
                      {project.year})
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://i.imgur.com/a6kifX0.jpeg",
                "https://i.imgur.com/bEnNHxu.jpeg",
                "https://i.imgur.com/aTlmBDG.jpeg",
                "https://i.ibb.co/270xp3wV/davs9.jpg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="h-64 overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={`${src}?auto=format&fit=crop&w=600&q=80`}
                    alt="Salt Products"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
