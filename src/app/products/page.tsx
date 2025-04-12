"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../_components/LanguageContext";

interface Service {
  _id: string;
  subTitleEn: string;
  subTitleMn: string;
  captionEn: string;
  captionMn: string;
  price: number;
  infoImg: string;
}

const ServicesPage = () => {
  const { language } = useLanguage();
  const [services, setServices] = useState<Service[]>([]);

  const getServices = async () => {
    const response = await fetch(
      "https://ihoch-backend.onrender.com/service/getServices"
    );
    const data = await response.json();
    setServices(data);
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div>
      <section
        className="h-[60vh] bg-cover bg-center text-white flex flex-col items-center justify-center text-center p-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1719411321415-acfbe793c0aa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {language === "en" ? "Our Expertise" : "Бидний туршлага"}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-6">
          {language === "en"
            ? "IKH OCH specializes in drilling and blasting services for mining, construction, and infrastructure projects. Our commitment to safety, efficiency, and environmental responsibility sets us apart as industry leaders."
            : "Их Оч нь уул уурхай, барилга, дэд бүтцийн төслүүдэд зориулсан өрөмдлөг, тэсэлгээний үйлчилгээний чиглэлээр мэргэшсэн. Аюулгүй байдал, үр ашиг, байгаль орчны хариуцлагыг эрхэмлэдэг нь биднийг салбартаа тэргүүлэгч болгодог."}
        </p>
      </section>

      <section className="p-10 bg-[#F5F5F5] text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#24182E] mb-6">
          {language === "en" ? "Our Services" : "Манай Үйлчилгээ"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.length > 0 ? (
            services.map((service) => (
              <div
                key={service._id}
                className="bg-white p-6 rounded-xl shadow-xl transition-all transform hover:scale-105 duration-300 relative group hover:shadow-2xl"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={service.infoImg}
                    alt={service.subTitleEn}
                    className="h-32 w-32 rounded-full object-cover shadow-lg transition-all transform group-hover:scale-110 duration-300"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#24182E] mb-2">
                  {language === "en" ? service.subTitleEn : service.subTitleMn}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === "en" ? service.captionEn : service.captionMn}
                </p>
                <p className="text-gray-700 font-semibold mt-4">
                  {language === "en"
                    ? `Price: ${service.price} ₮`
                    : `Үнийн мэдээлэл: ${service.price} ₮`}
                </p>

                <div className="absolute inset-0 bg-gradient-to-tl from-[#2196F3] to-[#4CAF50] opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-xl"></div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              {language === "en" ? "No services found" : "Үйлчилгээ олдсонгүй"}
            </p>
          )}
        </div>
      </section>

      <section className="p-10 bg-[#F5F5F5] text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#24182E] mb-6">
          {language === "en"
            ? "Our Commitment to Safety"
            : "Аюулгүй байдалд бидний хариуцлага"}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6">
          {language === "en"
            ? "At IKH OCH, safety and efficiency are our top priorities. We adhere to the highest standards in the industry to ensure the well-being of our teams and the success of our projects."
            : "Их Оч компанид аюулгүй байдал, үр ашиг нь хамгийн тэргүүнд тавигддаг. Бид салбарын хамгийн өндөр стандартуудыг мөрдөж, манай багуудын аюулгүй байдал болон төслүүдийн амжилттай хэрэгжилтийг хангадаг."}
        </p>
      </section>
    </div>
  );
};

export default ServicesPage;
