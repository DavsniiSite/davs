"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Product from "../../_components/Product";

const AdminDashboard = () => {
  const router = useRouter();
  const { lang } = useParams();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

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
      en: {
        adminDashboard: "Admin Dashboard",
        manageProducts: "Manage Products",
        unauthorizedAccess: "Unauthorized access",
      },
      mn: {
        adminDashboard: "Админ Панел",
        manageProducts: "Бүтээгдэхүүн удирдах",
        unauthorizedAccess: "Нэвтрэх эрхгүй",
      },
      kr: {
        adminDashboard: "관리자 대시보드",
        manageProducts: "제품 관리",
        unauthorizedAccess: "권한이 없습니다",
      },
      ch: {
        adminDashboard: "管理员面板",
        manageProducts: "管理产品",
        unauthorizedAccess: "无权限访问",
      },
      jp: {
        adminDashboard: "管理者ダッシュボード",
        manageProducts: "商品を管理する",
        unauthorizedAccess: "許可されていないアクセス",
      },
    };

    const language = lang as keyof typeof localizedStrings;
    return localizedStrings[language][key];
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
        <Product language={Array.isArray(lang) ? lang[0] : lang || "en"} />
      </div>
    </div>
  ) : (
    <div className="text-center mt-10 text-red-600 text-lg">
      {getLocalizedString("unauthorizedAccess")}
    </div>
  );
};

export default AdminDashboard;
