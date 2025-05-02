"use client";

import { usePathname } from "next/navigation";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { GiCrystalBars } from "react-icons/gi";
import { motion } from "framer-motion";

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
  getDirections: string;
  locationLabel: string;
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
      map: "Our Location",
      visit: "Visit Our Store",
      hours: "Store Hours",
      monFri: "Monday – Friday: 9:00 AM – 6:00 PM",
      sat: "Saturday: 10:00 AM – 4:00 PM",
      sun: "Sunday: Closed",
      getDirections: "Get Directions",
      locationLabel: "Davst Salt Mine",
    },
    mn: {
      title: "Холбоо барих",
      subtitle:
        "Манай байгалийн ягаан давсны талаар асуух зүйл байвал холбогдоорой.",
      contact: "Холбоо барих мэдээлэл",
      phone: "Утас",
      email: "Имэйл",
      address: "Хаяг",
      map: "Байршил",
      visit: "Манай дэлгүүрээр зочлоорой",
      hours: "Ажлын цаг",
      monFri: "Даваа – Баасан: 09:00 – 18:00",
      sat: "Бямба: 10:00 – 16:00",
      sun: "Ням: Амарна",
      getDirections: "Чиглэл авах",
      locationLabel: "Давст Давсны Уурхай",
    },
    jp: {
      title: "お問い合わせ",
      subtitle: "天然ピンクソルト製品に関するお問い合わせはこちらまで。",
      contact: "連絡先情報",
      phone: "電話番号",
      email: "メール",
      address: "住所",
      map: "ロケーション",
      visit: "店舗情報",
      hours: "営業時間",
      monFri: "月曜日～金曜日: 9:00～18:00",
      sat: "土曜日: 10:00～16:00",
      sun: "日曜日: 定休日",
      getDirections: "道順を取得",
      locationLabel: "ダブスト塩鉱山",
    },
    kr: {
      title: "연락처",
      subtitle: "천연 핑크 소금 제품에 대한 문의사항이 있으시면 연락주세요.",
      contact: "연락처 정보",
      phone: "전화번호",
      email: "이메일",
      address: "주소",
      map: "위치",
      visit: "매장 방문",
      hours: "영업 시간",
      monFri: "월요일 ~ 금요일: 오전 9시 ~ 오후 6시",
      sat: "토요일: 오전 10시 ~ 오후 4시",
      sun: "일요일: 휴무",
      getDirections: "길 찾기",
      locationLabel: "다브스트 소금 광산",
    },
    cn: {
      title: "联系我们",
      subtitle: "有关我们天然粉盐产品的查询，请随时联系我们。",
      contact: "联系信息",
      phone: "电话",
      email: "电子邮件",
      address: "地址",
      map: "我们的位置",
      visit: "访问我们的商店",
      hours: "营业时间",
      monFri: "周一至周五: 上午9点 - 下午6点",
      sat: "周六: 上午10点 - 下午4点",
      sun: "周日: 休息",
      getDirections: "获取路线",
      locationLabel: "Davst盐矿",
    },
  };

  const info = {
    phone: "+976 99119911",
    email: "info@shuden.mn",
    address: "Ulaanbaatar, Sukhbaatar District, Peace Avenue 47",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.123456789012!2d92.4021244!3d50.6105868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d37a88a7d657a6d%3A0x2dc1050dcc94478c!2sDavst%2C%20Uvs!5e0!3m2!1sen!2smn!4v1234567890123!5m2!1sen!2smn",
    mapPin: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    coordinates: { lat: 50.6105868, lng: 92.4021244 },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-[#f9f9f9] to-[#f0f0f0]">
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/0yMNFqG1/davs6.jpg')] bg-cover bg-center opacity-80"></div>
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
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            variants={itemVariants}
          >
            {t[lang]?.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white opacity-90 mb-8"
            variants={itemVariants}
          >
            {t[lang]?.subtitle}
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            variants={itemVariants}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-[#0a2540] font-bold rounded-md hover:bg-[#f8f8f8] transition-colors shadow-lg hover:shadow-xl"
            >
              {t[lang]?.contact}
            </a>
            <a
              href="#map"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-[#0a2540] transition-colors shadow-lg hover:shadow-xl"
            >
              {t[lang]?.map}
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center text-[#333] mb-16 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t[lang]?.contact}
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#d4af37] rounded-full"></span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 border border-[#e0e0e0]"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center text-4xl text-[#d4af37] mb-4">
                <FaPhone />
              </div>
              <h3 className="text-xl font-semibold text-[#333] mb-2">
                {t[lang]?.phone}
              </h3>
              <p className="text-[#555] font-medium">{info.phone}</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 border border-[#e0e0e0]"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center text-4xl text-[#d4af37] mb-4">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-semibold text-[#333] mb-2">
                {t[lang]?.email}
              </h3>
              <p className="text-[#555] font-medium">{info.email}</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 border border-[#e0e0e0]"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center text-4xl text-[#d4af37] mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-semibold text-[#333] mb-2">
                {t[lang]?.address}
              </h3>
              <p className="text-[#555] font-medium">{info.address}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="map" className="py-20 relative overflow-hidden">
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

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.h2
            className="text-3xl font-bold text-center text-[#333] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t[lang]?.map}
          </motion.h2>

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[500px] relative">
              <iframe
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`${info.mapUrl}&zoom=14&markers=icon:${info.mapPin}|${info.coordinates.lat},${info.coordinates.lng}`}
              ></iframe>

              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow-md">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-[#d4af37] mr-2" />
                  <span className="font-medium text-[#333]">
                    {t[lang]?.locationLabel}
                  </span>
                </div>
              </div>

              <div className="absolute top-4 right-4 flex gap-2">
                <div className="bg-white/90 p-2 rounded-full shadow-md">
                  <GiCrystalBars className="text-[#d4af37] text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#d4af37] to-[#f2cc6b] p-4 text-center text-white font-medium">
              {lang === "en" && "Visit our salt mine in Davst, Uvs"}
              {lang === "mn" &&
                "Увс аймгийн Давст сумын давсны уурхайг зочлоорой"}
              {lang === "jp" && "ウブス県ダブスト郡の塩鉱山を訪問"}
              {lang === "kr" &&
                "우브스 주 다브스트 지역의 소금 광산을 방문하세요"}
              {lang === "cn" && "参观我们在乌布苏省Davst的盐矿"}
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${info.coordinates.lat},${info.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#d4af37] text-white font-bold rounded-lg hover:bg-[#c19b2e] transition-colors shadow-lg"
            >
              <FaMapMarkerAlt className="mr-2" />
              {t[lang]?.getDirections}
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-[#333] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t[lang]?.visit}
          </motion.h2>
          <motion.p
            className="text-lg text-[#555] mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t[lang]?.hours}
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-b from-[#f8f8f8] to-[#f0f0f0] p-6 rounded-xl hover:shadow-lg transition-all border border-[#e0e0e0]"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-center text-3xl text-[#d4af37] mb-4">
                <FaClock />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {lang === "en" && "Weekdays"}
                {lang === "mn" && "Ажлын өдрүүд"}
                {lang === "jp" && "平日"}
                {lang === "kr" && "평일"}
                {lang === "cn" && "工作日"}
              </h3>
              <p className="text-[#555]">{t[lang]?.monFri}</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-b from-[#f8f8f8] to-[#f0f0f0] p-6 rounded-xl hover:shadow-lg transition-all border border-[#e0e0e0]"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-center text-3xl text-[#d4af37] mb-4">
                <FaClock />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {lang === "en" && "Saturday"}
                {lang === "mn" && "Бямба"}
                {lang === "jp" && "土曜日"}
                {lang === "kr" && "토요일"}
                {lang === "cn" && "周六"}
              </h3>
              <p className="text-[#555]">{t[lang]?.sat}</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-b from-[#f8f8f8] to-[#f0f0f0] p-6 rounded-xl hover:shadow-lg transition-all border border-[#e0e0e0]"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-center text-3xl text-[#d4af37] mb-4">
                <FaClock />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {lang === "en" && "Sunday"}
                {lang === "mn" && "Ням"}
                {lang === "jp" && "日曜日"}
                {lang === "kr" && "일요일"}
                {lang === "cn" && "周日"}
              </h3>
              <p className="text-[#555]">{t[lang]?.sun}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
