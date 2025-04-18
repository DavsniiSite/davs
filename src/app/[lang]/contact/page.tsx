"use client";

import { usePathname } from "next/navigation";
interface Translation {
  title: string;
  subtitle: string;
  contact: string;
  phone: string;
  email: string;
  address: string;
  map: string;
  visit: string;
  hours: string;
  monFri: string;
  sat: string;
  sun: string;
  whyUs: string;
  points: string[];
}
const ContactPage = () => {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "mn";

  const t: Record<string, Translation> = {
    en: {
      title: "Contact Us",
      subtitle: "Reach out for inquiries about our natural pink salt products.",
      contact: "Our Contact Information",
      phone: "Phone",
      email: "Email",
      address: "Address",
      map: "Find Us on Google Maps",
      visit: "Visit Our Store",
      hours: "Store Hours",
      monFri: "Monday – Friday: 9:00 AM – 6:00 PM",
      sat: "Saturday: 10:00 AM – 4:00 PM",
      sun: "Sunday: Closed",
      whyUs: "Why Choose Our Pink Salt?",
      points: [
        "100% natural and hand-harvested.",
        "Rich in essential minerals.",
        "Perfect for gourmet and wellness use.",
      ],
    },
    mn: {
      title: "Холбоо барих",
      subtitle:
        "Манай байгалийн ягаан давсны талаар асуух зүйл байвал холбогдоорой.",
      contact: "Холбоо барих мэдээлэл",
      phone: "Утас",
      email: "Имэйл",
      address: "Хаяг",
      map: "Google газрын зураг дээр",
      visit: "Манай дэлгүүрээр зочлоорой",
      hours: "Ажлын цаг",
      monFri: "Даваа – Баасан: 09:00 – 18:00",
      sat: "Бямба: 10:00 – 16:00",
      sun: "Ням: Амарна",
      whyUs: "Яагаад бидний ягаан давсыг сонгох вэ?",
      points: [
        "100% байгалийн гаралтай, гараар олборлосон.",
        "Эрдэс бодисоор баялаг.",
        "Хоол болон эрүүл мэндэд төгс зохицолтой.",
      ],
    },
    jp: {
      title: "お問い合わせ",
      subtitle:
        "私たちの天然ピンクソルト製品に関するご質問はお気軽にご連絡ください。",
      contact: "連絡先情報",
      phone: "電話番号",
      email: "メール",
      address: "住所",
      map: "Googleマップで見る",
      visit: "店舗にお越しください",
      hours: "営業時間",
      monFri: "月曜～金曜: 午前9時～午後6時",
      sat: "土曜: 午前10時～午後4時",
      sun: "日曜: 定休日",
      whyUs: "なぜ私たちのピンクソルト？",
      points: [
        "100％天然・手作業で採取。",
        "必須ミネラルが豊富。",
        "グルメや健康目的に最適。",
      ],
    },
    cn: {
      title: "联系我们",
      subtitle: "欢迎咨询我们的天然粉盐产品，我们很乐意为您服务。",
      contact: "联系方式",
      phone: "电话",
      email: "电子邮件",
      address: "地址",
      map: "在 Google 地图上查看",
      visit: "欢迎到店参观",
      hours: "营业时间",
      monFri: "周一至周五：上午9点至下午6点",
      sat: "周六：上午10点至下午4点",
      sun: "周日：休息",
      whyUs: "为什么选择我们的粉盐？",
      points: [
        "100% 天然，手工采集。",
        "富含人体所需矿物质。",
        "适合美食烹饪和健康生活。",
      ],
    },
    kr: {
      title: "문의하기",
      subtitle:
        "자연산 핑크 소금 제품에 대해 문의 사항이 있으시면 언제든지 연락 주세요.",
      contact: "연락처 정보",
      phone: "전화번호",
      email: "이메일",
      address: "주소",
      map: "Google 지도에서 보기",
      visit: "저희 매장을 방문하세요",
      hours: "운영 시간",
      monFri: "월요일 ~ 금요일: 오전 9시 ~ 오후 6시",
      sat: "토요일: 오전 10시 ~ 오후 4시",
      sun: "일요일: 휴무",
      whyUs: "왜 저희 핑크 소금을 선택해야 하나요?",
      points: [
        "100% 천연, 손으로 수확한 소금.",
        "필수 미네랄이 풍부.",
        "고급 요리 및 건강에 이상적.",
      ],
    },
  };

  const info = {
    phone: "+976 99119911",
    email: "info@shuden.mn",
    address: "Ulaanbaatar, Sukhbaatar District, Peace Avenue 47",
  };

  return (
    <div className="bg-[#f9f9f9]">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0 bg-[url('https://media.discordapp.net/attachments/1342080785250779177/1360451754445115533/IMG_4867.jpg')] bg-cover bg-center opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8e5e6] to-[#e2f1f8] opacity-90"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-light text-[#333] mb-4">
            {t[lang]?.title}
          </h1>
          <p className="text-lg md:text-xl text-[#555] max-w-2xl mx-auto">
            {t[lang]?.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-center text-[#333] mb-12">
            {t[lang]?.contact}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8f8f8] p-6 rounded-lg text-center">
              <h3 className="text-xl font-medium text-[#3a7ca5] mb-2">
                {t[lang]?.phone}
              </h3>
              <p className="text-[#555]">{info.phone}</p>
            </div>
            <div className="bg-[#f8f8f8] p-6 rounded-lg text-center">
              <h3 className="text-xl font-medium text-[#3a7ca5] mb-2">
                {t[lang]?.email}
              </h3>
              <p className="text-[#555]">{info.email}</p>
            </div>
            <div className="bg-[#f8f8f8] p-6 rounded-lg text-center">
              <h3 className="text-xl font-medium text-[#3a7ca5] mb-2">
                {t[lang]?.address}
              </h3>
              <p className="text-[#555]">{info.address}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f0f7fc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-center text-[#333] mb-12">
            {t[lang]?.map}
          </h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.1746170850817!2d106.8959159!3d47.9240179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96925f67fe0b0f%3A0x9e283949267fdda5!2sWWF2%2BJ86%20%20%D0%AF%D0%BB%D0%B0%D0%BB%D1%82%20%D0%9F%D0%BB%D0%B0%D0%B7%D0%B0%2C%20CHD%20-%205%20khoroo%2C%20Ulaanbaatar%2019000!5e0!3m2!1sen!2smn!4v1719411321415"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-[#333] mb-6">
            {t[lang]?.visit}
          </h2>
          <p className="text-lg text-[#555] mb-8">{t[lang]?.hours}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            <div className="bg-[#f8f8f8] p-4 rounded-lg">
              <p className="font-medium">{t[lang]?.monFri}</p>
            </div>
            <div className="bg-[#f8f8f8] p-4 rounded-lg">
              <p className="font-medium">{t[lang]?.sat}</p>
            </div>
            <div className="bg-[#f8f8f8] p-4 rounded-lg">
              <p className="font-medium">{t[lang]?.sun}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f0f7fc]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light text-center text-[#333] mb-12">
            {t[lang]?.whyUs}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t[lang]?.points.map((point: string, idx: number) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-[#555]">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1605705712924-ab42d6bb9de7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGluayUyMHNhbHQlMjB3b29kZW4lMjBzcG9vbnxlbnwwfHwwfHx8MA%3D%3D",
              "https://plus.unsplash.com/premium_photo-1680543345572-045d41910092?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1614759258004-39da973d3268?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBpbmslMjBzYWx0JTIwc3BhfGVufDB8fDB8fHww",
            ].map((src, i) => (
              <div key={i} className="h-64 overflow-hidden rounded-lg">
                <img
                  src={`${src}?auto=format&fit=crop&w=600&q=60`}
                  alt="Pink Salt"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
