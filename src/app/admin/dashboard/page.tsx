"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Product from "../_components/Product";

const AdminDashboard = () => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const lang = "mn";

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token && token !== "") {
      setIsAdmin(true);
    } else {
      router.push(`/admin/login`);
    }
  }, [router]);

  const getLocalizedString = (
    key: "adminDashboard" | "manageProducts" | "unauthorizedAccess"
  ) => {
    const localizedStrings = {
      mn: {
        adminDashboard: "Админ Панел",
        manageProducts: "Бүтээгдэхүүн удирдах",
        unauthorizedAccess: "Нэвтрэх эрхгүй",
      },
    };

    return localizedStrings[lang][key];
  };

  return isAdmin ? (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        {getLocalizedString("adminDashboard")}
      </h1>

      <div className="mb-4">
        <button className="p-2 bg-indigo-500 text-white rounded-lg mr-4">
          {getLocalizedString("manageProducts")}
        </button>
      </div>

      <div className="space-y-6">
        <Product language={lang} />
      </div>
    </div>
  ) : (
    <div className="text-center mt-10 text-red-600 text-lg">
      {getLocalizedString("unauthorizedAccess")}
    </div>
  );
};

export default AdminDashboard;
