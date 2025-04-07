"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../_components/LanguageContext";

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}
interface Feedback {
  name: string;
  email: string;
  feedback: string;
}

const ContactPage = () => {
  const { language } = useLanguage();
  const [contactInfo, setContactInfo] = useState<ContactInfo>();
  const [formData, setFormData] = useState<Feedback>({
    name: "",
    email: "",
    feedback: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch(
          "https://ihoch-backend.onrender.com/contactUs/getContact"
        );
        const data = await response.json();
        setContactInfo(data[0]);
      } catch (error) {
        console.error("Error fetching contact information:", error);
      }
    };

    fetchContactInfo();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        "https://ihoch-backend.onrender.com/feedback/createFeedBack",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert(
          language === "en"
            ? "Message sent successfully!"
            : "Мэдээлэл амжилттай илгээгдсэн!"
        );
        setFormData({ name: "", email: "", feedback: "" });
      } else {
        setSubmitError(
          language === "en"
            ? "Failed to send message"
            : "Мэдээлэл илгээхэд алдаа гарлаа"
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        language === "en"
          ? "Failed to send message"
          : "Мэдээлэл илгээхэд алдаа гарлаа"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        className="h-[60vh] bg-cover bg-center text-white flex flex-col items-center justify-center text-center p-6 sm:p-10 md:p-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1719411321415-acfbe793c0aa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {language === "en" ? "Contact Us" : "Холбоо барих"}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-3xl mx-auto">
          {language === "en"
            ? "Get in touch with IKH OCH today. We're here to answer your questions and provide the best solutions for your drilling and blasting needs."
            : "Их Оч компанитай холбоо барина уу. Бид таны асуултанд хариу өгөх бөгөөд өрөмдлөг, тэсэлгээний шаардлагад хамгийн сайн шийдлийг санал болгох болно."}
        </p>
      </section>

      <section className="p-6 sm:p-10 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1E3C] mb-6">
          {language === "en"
            ? "Our Contact Information"
            : "Холбоо барих мэдээлэл"}
        </h2>
        {contactInfo ? (
          <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-lg mb-2">
              <strong>{language === "en" ? "Phone:" : "Утас:"}</strong>{" "}
              {contactInfo.phone}
            </p>
            <p className="text-lg mb-2">
              <strong>{language === "en" ? "Email:" : "Имэйл:"}</strong>{" "}
              {contactInfo.email}
            </p>
            <p className="text-lg mb-2">
              <strong>{language === "en" ? "Address:" : "Хаяг:"}</strong>{" "}
              {contactInfo.address}
            </p>
          </div>
        ) : (
          <p>Loading contact information...</p>
        )}
      </section>

      <section className="p-6 sm:p-10 bg-gray-100 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1E3C] mb-6">
          {language === "en"
            ? "Find Us on Google Maps"
            : "Google газрын зураг дээр"}
        </h2>
        <div className="w-full h-[300px] sm:h-[400px]">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.1746170850817!2d106.8959159!3d47.9240179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96925f67fe0b0f%3A0x9e283949267fdda5!2sWWF2%2BJ86%20%20%D0%AF%D0%BB%D0%B0%D0%BB%D1%82%20%D0%9F%D0%BB%D0%B0%D0%B7%D0%B0%2C%20CHD%20-%205%20khoroo%2C%20Ulaanbaatar%2019000!5e0!3m2!1sen!2smn!4v1719411321415"
          ></iframe>
        </div>
      </section>

      <section className="p-6 sm:p-10 bg-gray-100 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1E3C] mb-6">
          {language === "en" ? "Send Us a Message" : "Мэдээлэл илгээх"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-[#2D1E3C] mb-2"
              >
                {language === "en" ? "Your Name" : "Таны нэр"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder={
                  language === "en" ? "Enter your name" : "Нэрээ оруулна уу"
                }
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-[#2D1E3C] mb-2"
              >
                {language === "en" ? "Your Email" : "Таны имэйл"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder={
                  language === "en" ? "Enter your email" : "Имэйлээ оруулна уу"
                }
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="feedback"
              className="block text-lg font-medium text-[#2D1E3C] mb-2"
            >
              {language === "en" ? "Your Feedback" : "Таны мэдэгдэл"}
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder={
                language === "en"
                  ? "Enter your feedback"
                  : "Мэдээллээ оруулна уу"
              }
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full p-3 bg-[#F7941D] text-white rounded-lg hover:bg-[#D87A14]"
          >
            {isSubmitting
              ? language === "en"
                ? "Sending..."
                : "Илгээж байна..."
              : language === "en"
              ? "Send Message"
              : "Мэдээлэл илгээх"}
          </button>

          {submitError && <p className="mt-4 text-red-500">{submitError}</p>}
        </form>
      </section>
    </>
  );
};

export default ContactPage;
