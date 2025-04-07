"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/app/_components/LanguageContext";

interface ContactInfo {
  _id: string;
  phone: number;
  email: string;
  address: string;
}

interface Service {
  _id: string;
  infoImg: string;
  subTitleMn: string;
  captionMn: string;
  subTitleEn: string;
  captionEn: string;
  price: string;
}
interface EditedService {
  infoImg: string;
  subTitleMn: string;
  captionMn: string;
  subTitleEn: string;
  captionEn: string;
  price: string;
}

interface Worker {
  _id: string;
  firstName: string;
  lastName: string;
  job: string;
  imgUrl: string;
}

interface Feedback {
  _id: string;
  name: string;
  email: string;
  feedback: string;
}
type FieldValue = ContactInfo | Service | Worker;

const AdminDashboard: React.FC = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [services, setServices] = useState<Service[]>([]);
  const [aboutEn, setAboutEn] = useState<string>("");
  const [aboutMn, setAboutMn] = useState<string>("");
  const [contact, setContact] = useState<ContactInfo>({
    _id: "",
    phone: 0,
    email: "",
    address: "",
  });
  const [newService, setNewService] = useState<EditedService>({
    infoImg: "",
    subTitleMn: "",
    captionMn: "",
    subTitleEn: "",
    captionEn: "",
    price: "",
  });
  const [newContact, setNewContact] = useState<ContactInfo>({
    _id: "",
    phone: 0,
    email: "",
    address: "",
  });
  const [newWorker, setNewWorker] = useState<Worker>({
    _id: "",
    firstName: "",
    lastName: "",
    job: "",
    imgUrl: "",
  });
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [section, setSection] = useState<string>("services");

  useEffect(() => {
    if (
      sessionStorage.getItem("token") !== "" ||
      !sessionStorage.getItem("token")
    ) {
      setIsAdmin(true);
    } else {
      router.push("/admin");
    }
  }, [router]);

  useEffect(() => {
    getContactInfo();
    getServices();
    getAbout();
    getWorkers();
    getFeedbacks();
  }, []);

  const getFeedbacks = async () => {
    const response = await fetch(
      "https://ihoch-backend.onrender.com/feedback/getFeedBacks"
    );
    const data = await response.json();
    setFeedbacks(data);
  };

  const deleteFeedback = async (id: string) => {
    try {
      const response = await fetch(
        `https://ihoch-backend.onrender.com/feedback/deleteFeedBack/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete feedback");
      }

      setFeedbacks(feedbacks.filter((feedback) => feedback._id !== id));
      alert(language === "en" ? "Feedback deleted!" : "Сэтгэгдэл устгагдлаа!");
    } catch (error) {
      console.error("Error deleting feedback", error);
      alert(
        language === "en"
          ? "Error deleting feedback"
          : "Сэтгэгдэл устгахад алдаа гарлаа"
      );
    }
  };
  const updateEditedService = (
    serviceId: string,
    field: string,
    value: string
  ) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service._id === serviceId ? { ...service, [field]: value } : service
      )
    );
  };

  const getAbout = async () => {
    const response = await fetch(
      "https://ihoch-backend.onrender.com/about/getAboutInfo"
    );
    const data = await response.json();
    setAboutEn(data.aboutEn);
    setAboutMn(data.aboutMn);
  };

  const getContactInfo = async () => {
    const response = await fetch(
      "https://ihoch-backend.onrender.com/contactUs/getContact"
    );
    const data = await response.json();
    if (data && data.length > 0) {
      setContact(data[0]);
    }
  };

  const getServices = async () => {
    const response = await fetch(
      "https://ihoch-backend.onrender.com/service/getServices"
    );
    const data = await response.json();
    setServices(data);
  };

  const getWorkers = async () => {
    const response = await fetch(
      "https://ihoch-backend.onrender.com/workers/getWorkers"
    );
    const data = await response.json();
    setWorkers(data);
  };

  const updateField = async (endpoint: string, value: FieldValue) => {
    try {
      let body;

      if (endpoint.includes("contact")) {
        const contactValue = value as ContactInfo;
        body = JSON.stringify({
          phone: contactValue.phone,
          email: contactValue.email,
          address: contactValue.address,
        });
      } else if (endpoint.includes("about")) {
        body = JSON.stringify(value);
      } else {
        body = JSON.stringify(value);
      }

      await fetch(`https://ihoch-backend.onrender.com/${endpoint}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body,
      });

      if (endpoint.includes("about")) getAbout();
      if (endpoint.includes("contact")) getContactInfo();
      if (endpoint.includes("service")) getServices();
      if (endpoint.includes("worker")) getWorkers();

      alert(
        language === "en" ? "Successfully updated!" : "Амжилттай шинэчлэгдлээ!"
      );
    } catch {
      console.error("Error updating field");
      alert(language === "en" ? "Error updating field" : "Алдаа гарлаа");
    }
  };

  const updateService = async (serviceId: string, updatedService: Service) => {
    try {
      if (
        !updatedService.infoImg ||
        !updatedService.subTitleEn ||
        !updatedService.subTitleMn ||
        !updatedService.captionEn ||
        !updatedService.captionMn ||
        !updatedService.price
      ) {
        alert(
          language === "en"
            ? "Please fill in all required fields!"
            : "Бүх талбарыг бөглөнө үү!"
        );
        return;
      }

      const response = await fetch(
        `https://ihoch-backend.onrender.com/service/update/${serviceId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedService),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update service: ${response.statusText}`);
      }

      const updatedServiceData = await response.json();

      setServices((prevServices) =>
        prevServices.map((service) =>
          service._id === serviceId ? updatedServiceData : service
        )
      );

      alert(language === "en" ? "Service updated!" : "Үйлчилгээ шинэчлэгдлээ!");
    } catch (error) {
      console.error("Error updating service:", error);
      alert(
        language === "en"
          ? "Error updating service"
          : "Үйлчилгээ шинэчлэхэд алдаа гарлаа"
      );
    }
  };

  const createService = async () => {
    try {
      if (
        !newService.infoImg ||
        !newService.subTitleEn ||
        !newService.subTitleMn ||
        !newService.captionEn ||
        !newService.captionMn ||
        !newService.price
      ) {
        alert(
          language === "en"
            ? "Please fill in all required fields!"
            : "Бүх талбарыг бөглөнө үү!"
        );
        return;
      }

      const response = await fetch(
        "https://ihoch-backend.onrender.com/service/createService",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newService),
        }
      );

      console.log("Sending data:", newService);

      if (!response.ok) {
        throw new Error(`Failed to create service: ${response.statusText}`);
      }

      await getServices();

      setNewService({
        infoImg: "",
        subTitleMn: "",
        captionMn: "",
        subTitleEn: "",
        captionEn: "",
        price: "",
      });

      setIsCreating(false);

      alert(language === "en" ? "Service created!" : "Үйлчилгээ нэмэгдлээ!");
    } catch (error) {
      console.error("Error adding service:", error);

      alert(
        language === "en"
          ? "Error adding service"
          : "Үйлчилгээ нэмэхэд алдаа гарлаа"
      );
    }
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editableWorkers, setEditableWorkers] = useState(workers);

  useEffect(() => {
    setEditableWorkers(workers);
  }, [workers]);

  useEffect(() => {
    fetchAboutInfo();
  }, []);

  const fetchAboutInfo = async () => {
    try {
      const response = await fetch(
        "https://ihoch-backend.onrender.com/about/getAboutInfo"
      );
      const data = await response.json();
      if (response.ok && data.length > 0) {
        setAboutEn(data[0].aboutEn || "");
        setAboutMn(data[0].aboutMn || "");
      }
    } catch (err) {
      setError("Failed to load about information.");
      console.log(error, err);
    }
  };

  const createAbout = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://ihoch-backend.onrender.com/about/createAbout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ aboutEn, aboutMn }),
        }
      );

      if (!response.ok) throw new Error("Error creating about info");

      await fetchAboutInfo();
      setIsCreating(false);
    } catch (err) {
      setError("Failed to create about information.");
      console.log(error, err);
    } finally {
      setLoading(false);
    }
  };

  const updateAboutField = async (
    field: "aboutEn" | "aboutMn",
    value: string
  ) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://ihoch-backend.onrender.com/about/aboutEdit",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ field, value }),
        }
      );

      if (!response.ok) throw new Error("Error updating about info");

      await fetchAboutInfo();
    } catch (err) {
      setError("Failed to update about information.");
      console.log(error, err);
    } finally {
      setLoading(false);
    }
  };

  const createContact = async () => {
    try {
      await fetch(
        "https://ihoch-backend.onrender.com/contactUs/createContact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newContact),
        }
      );
      getContactInfo();
      setNewContact({ phone: 0, email: "", address: "", _id: "" });
      setIsCreating(false);
      alert(
        language === "en"
          ? "Contact info created!"
          : "Холбоо барих мэдээлэл нэмэгдлээ!"
      );
    } catch {
      console.error("Error adding contact info");
      alert(
        language === "en"
          ? "Error adding contact info"
          : "Холбоо барих мэдээлэл нэмэхэд алдаа гарлаа"
      );
    }
  };
  const createWorker = async () => {
    try {
      if (!newWorker.firstName || !newWorker.lastName || !newWorker.job) {
        return alert(
          language === "en"
            ? "Please fill in all required fields!"
            : "Бүх шаардлагатай талбарыг бөглөнө үү!"
        );
      }

      const response = await fetch(
        "https://ihoch-backend.onrender.com/workers/createWorker",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: newWorker.firstName,
            lastName: newWorker.lastName,
            job: newWorker.job,
            imgUrl: newWorker.imgUrl || "",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create worker");
      }

      await getWorkers();

      setNewWorker({
        _id: "",
        firstName: "",
        lastName: "",
        job: "",
        imgUrl: "",
      });

      setIsCreating(false);

      alert(
        language === "en" ? "Team member created!" : "Багийн гишүүн нэмэгдлээ!"
      );
    } catch (error) {
      console.error("Error adding team member:", error);

      alert(
        language === "en"
          ? "Error adding team member"
          : "Багийн гишүүн нэмэхэд алдаа гарлаа"
      );
    }
  };

  return isAdmin ? (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        {language === "en" ? "Admin Dashboard" : "Админ Панел"}
      </h1>

      <div className="mb-4">
        <button
          onClick={() => setSection("services")}
          className="p-2 bg-indigo-500 text-white rounded-lg mr-4"
        >
          {language === "en" ? "Manage Services" : "Үйлчилгээ удирдах"}
        </button>
        <button
          onClick={() => setSection("team")}
          className="p-2 bg-indigo-500 text-white rounded-lg mr-4"
        >
          {language === "en" ? "Manage Team" : "Баг удирдах"}
        </button>
        <button
          onClick={() => setSection("contact")}
          className="p-2 bg-indigo-500 text-white rounded-lg mr-4"
        >
          {language === "en" ? "Manage Contact" : "Холбоо барих удирдах"}
        </button>
        <button
          onClick={() => setSection("about")}
          className="p-2 bg-indigo-500 text-white rounded-lg"
        >
          {language === "en" ? "Manage About" : "Тухай удирдах"}
        </button>
        <button
          onClick={() => setSection("feedback")}
          className="p-2 bg-indigo-500 text-white rounded-lg ml-4"
        >
          {language === "en" ? "Manage Feedback" : "Сэтгэгдлийг удирдах"}
        </button>
      </div>

      <div className="space-y-6">
        {section === "feedback" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {language === "en" ? "Feedback" : "Сэтгэгдэл"}
            </h2>
            {feedbacks && feedbacks.length > 0 ? (
              feedbacks.map((feedback) => (
                <div
                  key={feedback._id}
                  className="bg-white p-4 shadow rounded-lg mb-4"
                >
                  <p>
                    <strong>{language === "en" ? "Name:" : "Нэр:"} </strong>
                    {feedback.name}
                  </p>
                  <p>
                    <strong>{language === "en" ? "Email:" : "Имэйл:"} </strong>
                    {feedback.email}
                  </p>
                  <p>
                    <strong>
                      {language === "en" ? "Message:" : "Мэдээлэл:"}{" "}
                    </strong>
                    {feedback.feedback}
                  </p>
                  <button
                    onClick={() => deleteFeedback(feedback._id)}
                    className="mt-2 p-2 bg-red-500 text-white rounded-lg"
                  >
                    {language === "en" ? "Delete Feedback" : "Сэтгэгдэл устгах"}
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                {language === "en"
                  ? "No feedbacks found"
                  : "Сэтгэгдэл олдсонгүй"}
              </p>
            )}
          </div>
        )}
        {section === "services" && (
          <div>
            <button
              onClick={() => setIsCreating(!isCreating)}
              className="mb-4 p-2 bg-indigo-500 text-white rounded-lg"
            >
              {isCreating
                ? language === "en"
                  ? "Back to Edit Mode"
                  : "Засах горим руу буцах"
                : language === "en"
                ? "Create New Service"
                : "Шинэ үйлчилгээ нэмэх"}
            </button>

            {isCreating ? (
              <div className="p-5 bg-white shadow rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  {language === "en" ? "Create New Service" : "Шинэ үйлчилгээ"}
                </h2>
                <input
                  className="w-full p-2 border rounded mb-2"
                  placeholder={language === "en" ? "Image URL" : "Зураг URL"}
                  value={newService.infoImg}
                  onChange={(e) =>
                    setNewService({ ...newService, infoImg: e.target.value })
                  }
                />
                <input
                  className="w-full p-2 border rounded mb-2"
                  placeholder={
                    language === "en"
                      ? "Subtitle (English)"
                      : "Дэд гарчиг (Англи)"
                  }
                  value={newService.subTitleEn}
                  onChange={(e) =>
                    setNewService({ ...newService, subTitleEn: e.target.value })
                  }
                />
                <input
                  className="w-full p-2 border rounded mb-2"
                  placeholder={
                    language === "en"
                      ? "Subtitle (Mongolian)"
                      : "Дэд гарчиг (Монгол)"
                  }
                  value={newService.subTitleMn}
                  onChange={(e) =>
                    setNewService({ ...newService, subTitleMn: e.target.value })
                  }
                />
                <textarea
                  className="w-full p-2 border rounded mb-2"
                  placeholder={
                    language === "en" ? "Caption (English)" : "Тайлбар (Англи)"
                  }
                  value={newService.captionEn}
                  onChange={(e) =>
                    setNewService({ ...newService, captionEn: e.target.value })
                  }
                />
                <textarea
                  className="w-full p-2 border rounded mb-2"
                  placeholder={
                    language === "en"
                      ? "Caption (Mongolian)"
                      : "Тайлбар (Монгол)"
                  }
                  value={newService.captionMn}
                  onChange={(e) =>
                    setNewService({ ...newService, captionMn: e.target.value })
                  }
                />
                <input
                  className="w-full p-2 border rounded mb-2"
                  placeholder={language === "en" ? "Price" : "Үнэ"}
                  value={newService.price}
                  onChange={(e) =>
                    setNewService({ ...newService, price: e.target.value })
                  }
                />
                <button
                  onClick={createService}
                  className="w-full mt-2 p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  {language === "en" ? "Create Service" : "Үйлчилгээ нэмэх"}
                </button>
              </div>
            ) : (
              <div className="p-5 bg-white shadow-lg rounded-xl">
                <h2 className="text-2xl font-bold mb-6">
                  {language === "en" ? "Edit Services" : "Үйлчилгээ засах"}
                </h2>
                {services && services.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                      <div
                        key={service._id}
                        className="p-4 bg-gray-100 rounded-lg shadow-md"
                      >
                        <img
                          src={
                            service.infoImg || "https://via.placeholder.com/150"
                          }
                          alt={service.subTitleEn}
                          className="w-20 h-20 object-cover  mx-auto mb-4"
                        />
                        <input
                          className="w-full p-2 border rounded mb-2"
                          value={service.subTitleEn}
                          onChange={(e) =>
                            updateEditedService(
                              service._id,
                              "subTitleEn",
                              e.target.value
                            )
                          }
                        />
                        <input
                          className="w-full p-2 border rounded mb-2"
                          value={service.subTitleMn}
                          onChange={(e) =>
                            updateEditedService(
                              service._id,
                              "subTitleMn",
                              e.target.value
                            )
                          }
                        />
                        <textarea
                          className="w-full p-2 border rounded mb-2"
                          value={service.captionEn}
                          onChange={(e) =>
                            updateEditedService(
                              service._id,
                              "captionEn",
                              e.target.value
                            )
                          }
                        />
                        <textarea
                          className="w-full p-2 border rounded mb-2"
                          value={service.captionMn}
                          onChange={(e) =>
                            updateEditedService(
                              service._id,
                              "captionMn",
                              e.target.value
                            )
                          }
                        />
                        <input
                          className="w-full p-2 border rounded mb-2"
                          value={service.price}
                          onChange={(e) =>
                            updateEditedService(
                              service._id,
                              "price",
                              e.target.value
                            )
                          }
                        />
                        <button
                          onClick={() => updateService(service._id, service)}
                          className="w-full mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                          {language === "en" ? "Update" : "Шинэчлэх"}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center">
                    {language === "en"
                      ? "No services found"
                      : "Үйлчилгээ олдсонгүй"}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
        {section === "team" && (
          <div>
            <button
              onClick={() => setIsCreating(!isCreating)}
              className="mb-4 p-2 bg-indigo-500 text-white rounded-lg"
            >
              {isCreating
                ? language === "en"
                  ? "Back to Edit Mode"
                  : "Засах горим руу буцах"
                : language === "en"
                ? "Create New Team Member"
                : "Шинэ багийн гишүүн нэмэх"}
            </button>

            {isCreating ? (
              <div className="p-5 bg-white shadow rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  {language === "en"
                    ? "Create New Team Member"
                    : "Шинэ багийн гишүүн"}
                </h2>
                <input
                  className="w-full p-2 border rounded mb-2"
                  placeholder={language === "en" ? "First Name" : "Нэр"}
                  value={newWorker.firstName}
                  onChange={(e) =>
                    setNewWorker({ ...newWorker, firstName: e.target.value })
                  }
                />
                <input
                  className="w-full p-2 border rounded mb-2"
                  placeholder={language === "en" ? "Last Name" : "Овог"}
                  value={newWorker.lastName}
                  onChange={(e) =>
                    setNewWorker({ ...newWorker, lastName: e.target.value })
                  }
                />
                <input
                  className="w-full p-2 border rounded mb-2"
                  placeholder={language === "en" ? "Job Title" : "Албан тушаал"}
                  value={newWorker.job}
                  onChange={(e) =>
                    setNewWorker({ ...newWorker, job: e.target.value })
                  }
                />
                <input
                  className="w-full p-2 border rounded mb-2"
                  placeholder={language === "en" ? "Image URL" : "Зураг URL"}
                  value={newWorker.imgUrl}
                  onChange={(e) =>
                    setNewWorker({ ...newWorker, imgUrl: e.target.value })
                  }
                />
                <button
                  onClick={createWorker}
                  className="w-full mt-2 p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  {language === "en" ? "Create Member" : "Гишүүн нэмэх"}
                </button>
              </div>
            ) : (
              <div className="p-5 bg-white shadow-lg rounded-xl">
                <h2 className="text-2xl font-bold mb-6">
                  {language === "en"
                    ? "Edit Team Members"
                    : "Багийн гишүүд засах"}
                </h2>
                {editableWorkers && editableWorkers.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {editableWorkers.map((worker, index) => (
                      <div
                        key={worker._id}
                        className="p-4 bg-gray-100 rounded-lg shadow-md"
                      >
                        <img
                          src={
                            worker.imgUrl || "https://via.placeholder.com/150"
                          }
                          alt={worker.firstName}
                          className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                        />
                        <input
                          className="w-full p-2 border rounded mb-2"
                          value={worker.firstName}
                          onChange={(e) => {
                            const updatedWorkers = [...editableWorkers];
                            updatedWorkers[index].firstName = e.target.value;
                            setEditableWorkers(updatedWorkers);
                          }}
                        />
                        <input
                          className="w-full p-2 border rounded mb-2"
                          value={worker.lastName}
                          onChange={(e) => {
                            const updatedWorkers = [...editableWorkers];
                            updatedWorkers[index].lastName = e.target.value;
                            setEditableWorkers(updatedWorkers);
                          }}
                        />
                        <input
                          className="w-full p-2 border rounded mb-2"
                          value={worker.job}
                          onChange={(e) => {
                            const updatedWorkers = [...editableWorkers];
                            updatedWorkers[index].job = e.target.value;
                            setEditableWorkers(updatedWorkers);
                          }}
                        />
                        <input
                          className="w-full p-2 border rounded mb-2"
                          value={worker.imgUrl}
                          onChange={(e) => {
                            const updatedWorkers = [...editableWorkers];
                            updatedWorkers[index].imgUrl = e.target.value;
                            setEditableWorkers(updatedWorkers);
                          }}
                        />
                        <button
                          onClick={() =>
                            updateField(
                              `workers/editWorker/${worker._id}`,
                              worker
                            )
                          }
                          className="w-full mt-3 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                          {language === "en" ? "Update" : "Шинэчлэх"}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center">
                    {language === "en"
                      ? "No team members found"
                      : "Багийн гишүүд олдсонгүй"}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {section === "contact" && (
          <div>
            <button
              onClick={() => setIsCreating(!isCreating)}
              className="mb-4 p-2 bg-indigo-500 text-white rounded-lg"
            >
              {isCreating
                ? language === "en"
                  ? "Back to Edit Mode"
                  : "Засах горим руу буцах"
                : language === "en"
                ? "Create New Contact"
                : "Шинэ холбоо барих мэдээлэл нэмэх"}
            </button>

            {isCreating ? (
              <div className="p-5 bg-white shadow rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  {language === "en"
                    ? "Create New Contact"
                    : "Шинэ холбоо барих"}
                </h2>
                <input
                  className="w-full p-2 border mb-2"
                  placeholder={language === "en" ? "Phone" : "Утасны дугаар"}
                  value={newContact.phone}
                  onChange={(e) =>
                    setNewContact({
                      ...newContact,
                      phone: Number(e.target.value),
                    })
                  }
                />
                <input
                  className="w-full p-2 border mb-2"
                  placeholder={language === "en" ? "Email" : "И-мэйл"}
                  value={newContact.email}
                  onChange={(e) =>
                    setNewContact({ ...newContact, email: e.target.value })
                  }
                />
                <input
                  className="w-full p-2 border mb-2"
                  placeholder={language === "en" ? "Address" : "Хаяг"}
                  value={newContact.address}
                  onChange={(e) =>
                    setNewContact({ ...newContact, address: e.target.value })
                  }
                />
                <button
                  onClick={createContact}
                  className="mt-2 p-2 bg-green-500 text-white rounded"
                >
                  {language === "en" ? "Create Contact" : "Холбоо барих"}
                </button>
              </div>
            ) : (
              <div>
                <div className="p-5 bg-white shadow rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    {language === "en" ? "Edit Contact" : "Холбоо барих засах"}
                  </h2>
                  {contact ? (
                    <div>
                      <input
                        className="w-full p-2 border mb-2"
                        value={contact.phone}
                        onChange={(e) =>
                          setContact({
                            ...contact,
                            phone: Number(e.target.value),
                          })
                        }
                      />
                      <input
                        className="w-full p-2 border mb-2"
                        value={contact.email}
                        onChange={(e) =>
                          setContact({ ...contact, email: e.target.value })
                        }
                      />
                      <input
                        className="w-full p-2 border mb-2"
                        value={contact.address}
                        onChange={(e) =>
                          setContact({ ...contact, address: e.target.value })
                        }
                      />
                      <button
                        onClick={() =>
                          updateField(
                            `contactUs/contactEdit/${contact._id}`,
                            contact
                          )
                        }
                        className="p-2 bg-blue-500 text-white rounded mt-2"
                      >
                        {language === "en" ? "Update" : "Шинэчлэх"}
                      </button>
                    </div>
                  ) : (
                    <p className="text-gray-500">
                      {language === "en"
                        ? "No contact info found"
                        : "Холбоо барих мэдээлэл олдсонгүй"}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        {section === "about" && (
          <div>
            <button
              onClick={() => setIsCreating(!isCreating)}
              className="mb-4 p-2 bg-indigo-500 text-white rounded-lg"
            >
              {isCreating
                ? language === "en"
                  ? "Back to Edit Mode"
                  : "Засах горим руу буцах"
                : language === "en"
                ? "Create New About"
                : "Шинэ тухай мэдээлэл нэмэх"}
            </button>

            {isCreating ? (
              <div>
                <textarea
                  className="w-full p-2 border mb-2"
                  placeholder={
                    language === "en" ? "About (English)" : "Тухай (Ангил)"
                  }
                  value={aboutEn}
                  onChange={(e) => setAboutEn(e.target.value)}
                />
                <textarea
                  className="w-full p-2 border mb-2"
                  placeholder={
                    language === "en" ? "About (Mongolian)" : "Тухай (Монгол)"
                  }
                  value={aboutMn}
                  onChange={(e) => setAboutMn(e.target.value)}
                />
                <button
                  onClick={createAbout}
                  className="mt-2 p-2 bg-green-500 text-white rounded"
                  disabled={loading}
                >
                  {loading
                    ? "Creating..."
                    : language === "en"
                    ? "Create About"
                    : "Тухай мэдээлэл нэмэх"}
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <h3 className="font-semibold">English</h3>
                  <textarea
                    className="w-full p-2 border"
                    value={aboutEn}
                    onChange={(e) => setAboutEn(e.target.value)}
                  />
                  <button
                    onClick={() => updateAboutField("aboutEn", aboutEn)}
                    className="mt-2 p-2 bg-blue-500 text-white rounded"
                    disabled={loading}
                  >
                    {loading
                      ? "Updating..."
                      : language === "en"
                      ? "Update"
                      : "Шинэчлэх"}
                  </button>
                </div>

                <div>
                  <h3 className="font-semibold">Монгол</h3>
                  <textarea
                    className="w-full p-2 border"
                    value={aboutMn}
                    onChange={(e) => setAboutMn(e.target.value)}
                  />
                  <button
                    onClick={() => updateAboutField("aboutMn", aboutMn)}
                    className="mt-2 p-2 bg-blue-500 text-white rounded"
                    disabled={loading}
                  >
                    {loading
                      ? "Updating..."
                      : language === "en"
                      ? "Update"
                      : "Шинэчлэх"}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  ) : (
    <div>Unauthorized access</div>
  );
};

export default AdminDashboard;
