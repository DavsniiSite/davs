"use client";

import { useLanguage } from "@/app/_components/LanguageContext";
import { useState } from "react";
import Link from "next/link";

const HomePage = () => {
  const { language } = useLanguage();
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleServiceHover = (id: number) => {
    setHoveredService(id);
  };

  const handleServiceLeave = () => {
    setHoveredService(null);
  };

  return (
    <div>
      <section
        className="h-screen bg-cover bg-center text-[#EFEFEF] flex flex-col items-center justify-center text-center p-6 sm:p-10 md:p-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1719411321415-acfbe793c0aa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {language === "en"
            ? "IKH OCH Drilling & Blasting Service"
            : "Их Оч өрөмдлөг, тэсэлгээний үйлчилгээ"}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-3xl mx-auto">
          {language === "en"
            ? "IKH OCH is a leading provider of drilling and blasting services. With a strong commitment to safety, efficiency, and environmental responsibility, we offer high-quality solutions for mining, construction, and infrastructure projects."
            : "Их Оч нь өрөмдлөг, тэсэлгээний үйлчилгээний тэргүүлэгч компани юм. Бид аюулгүй байдал, үр ашиг, байгаль орчны хариуцлагыг эрхэмлэн, уул уурхай, барилга, дэд бүтцийн төслүүдэд чанартай шийдлүүдийг санал болгодог."}
        </p>
      </section>
      <section className="py-16 bg-[#f9f9f9]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            {language === "en" ? "Our Services" : "Манай Үйлчилгээ"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className={`service-card p-6 bg-white rounded-lg shadow-lg transition-all ${
                hoveredService === 1 ? "scale-105" : ""
              }`}
              onMouseEnter={() => handleServiceHover(1)}
              onMouseLeave={handleServiceLeave}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                {language === "en" ? "Drilling" : "Өрөмдлөг"}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === "en"
                  ? "We provide high-quality drilling services for various needs."
                  : "Бид олон төрлийн хэрэгцээний тулд өндөр чанартай бурилтын үйлчилгээ үзүүлдэг."}
              </p>
              <Link
                href="/services"
                className="px-6 py-2 bg-[#FF8A00] text-[#EFEFEF] rounded-lg hover:bg-[#FF8A00] transition-all"
              >
                {language === "en" ? "Learn More" : "Дэлгэрэнгүй"}
              </Link>
            </div>
            <div
              className={`service-card p-6 bg-white rounded-lg shadow-lg transition-all ${
                hoveredService === 2 ? "scale-105" : ""
              }`}
              onMouseEnter={() => handleServiceHover(2)}
              onMouseLeave={handleServiceLeave}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                {language === "en" ? "Blasting" : "Тэсэлгээ"}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === "en"
                  ? "Our blasting services are safe, effective, and reliable."
                  : "Манай тэсэлгээний үйлчилгээ нь аюулгүй, үр дүнтэй, найдвартай."}
              </p>
              <Link
                href="/services"
                className="px-6 py-2 bg-[#FF8A00] text-[#EFEFEF] rounded-lg hover:bg-[#FF8A00] transition-all"
              >
                {language === "en" ? "Learn More" : "Дэлгэрэнгүй"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
