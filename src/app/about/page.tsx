"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../_components/LanguageContext";

interface AboutInfo {
  aboutMn: string;
  aboutEn: string;
}
interface TeamMember {
  _id: string;
  firstName: string;
  lastName: string;
  job: string;
  imgUrl: string;
}
const AboutPage = () => {
  const { language } = useLanguage();
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [info, setInfo] = useState<AboutInfo>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamResponse = await fetch(
          "https://ihoch-backend.onrender.com/workers/getWorkers"
        );
        const teamData = await teamResponse.json();
        setTeam(teamData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getFromUsInfo = async () => {
    try {
      const response = await fetch(
        "https://ihoch-backend.onrender.com/about/getAboutInfo"
      );
      const data = await response.json();
      setInfo(data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFromUsInfo();
  }, []);

  return (
    <div>
      <section
        className="h-[60vh] bg-cover bg-center text-white flex flex-col items-center justify-center text-center p-10 sm:h-[50vh] lg:h-[60vh]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1719411321415-acfbe793c0aa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          {language === "en" ? "About Us" : "Бидний тухай"}
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mb-6">
          {info
            ? language === "en"
              ? info.aboutEn
              : info.aboutMn
            : "Loading..."}
        </p>
      </section>

      <section className="bg-gray-100 p-6 sm:p-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2D1E3C] mb-6">
          {language === "en"
            ? "Our Mission & Vision"
            : "Бидний Эрхэм зорилго ба Алсын хараа"}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto transition transform hover:scale-105 duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#2D1E3C] mb-4">
              {language === "en" ? "Mission" : "Үйл ажиллагаа"}
            </h3>
            <p className="text-gray-700">
              {language === "en"
                ? "Our mission is to provide the highest quality drilling and blasting services, while ensuring safety, efficiency, and environmental responsibility in every project."
                : "Манай эрхэм зорилго нь өрөмдлөг, тэсэлгээний үйлчилгээний хамгийн өндөр чанарыг үзүүлэх бөгөөд төслийн аюулгүй байдал, үр ашиг, байгаль орчны хариуцлагыг хангах зорилготой."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto transition transform hover:scale-105 duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#2D1E3C] mb-4">
              {language === "en" ? "Vision" : "Алсын Хараа"}
            </h3>
            <p className="text-gray-700">
              {language === "en"
                ? "Our vision is to be the most trusted provider of drilling and blasting services, recognized for our commitment to safety, quality, and environmental sustainability."
                : "Манай хараа нь аюулгүй байдал, чанар, байгаль орчны тогтвортой байдлын хариуцлагад бидний тууштай оролцож, өрөмдлөг, тэсэлгээний үйлчилгээний хамгийн итгэлтэй нийлүүлэгч байх явдал юм."}
            </p>
          </div>
        </div>
      </section>

      <section className="p-6 sm:p-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2D1E3C] mb-6">
          {language === "en" ? "Our Team" : "Манай Хамт Олон"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.length > 0 ? (
            team.map((member) => (
              <div
                key={member._id}
                className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300"
              >
                <img
                  src={member.imgUrl || "/default-profile.jpg"}
                  alt={member.firstName}
                  className="h-40 w-40 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-[#2D1E3C] mb-2">
                  {member.lastName} {member.firstName}
                </h3>
                <p className="text-gray-700">{member.job}</p>
              </div>
            ))
          ) : (
            <p>Loading team members...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
