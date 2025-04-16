"use client";
import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductCard from "./ProductCard";

type Product = {
  _id: string;
  infoImg: string;
  subTitleMn: string;
  subTitleKr: string;
  subTitleCn: string;
  subTitleEn: string;
  captionEn: string;
  captionMn: string;
  captionKr: string;
  captionCn: string;
  price: number;
};

type EditedProduct = Omit<Product, "_id">;

const Product = ({ language }: { language: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isCreating, setIsCreating] = useState(true);
  const [newProduct, setNewProduct] = useState<EditedProduct>({
    infoImg: "",
    subTitleMn: "",
    subTitleKr: "",
    subTitleCn: "",
    subTitleEn: "",
    captionEn: "",
    captionMn: "",
    captionKr: "",
    captionCn: "",
    price: 0,
  });

  const requiredFields: (keyof EditedProduct)[] = [
    "infoImg",
    "subTitleEn",
    "subTitleMn",
    "subTitleKr",
    "subTitleCn",
    "captionEn",
    "captionMn",
    "captionKr",
    "captionCn",
    "price",
  ];

  const getProducts = async () => {
    const res = await fetch("/api/product/getProducts", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setProducts(data);
  };

  const updateField = (id: string, field: keyof Product, value: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p._id === id
          ? { ...p, [field]: field === "price" ? Number(value) : value }
          : p
      )
    );
  };

  const createProduct = async () => {
    if (requiredFields.some((field) => !newProduct[field])) {
      alert("Бүх талбарыг бөглөнө үү!");
      return;
    }

    const res = await fetch("/api/product/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    if (!res.ok) return alert("Error creating product");

    await getProducts();
    setNewProduct({
      infoImg: "",
      subTitleMn: "",
      subTitleKr: "",
      subTitleCn: "",
      subTitleEn: "",
      captionEn: "",
      captionMn: "",
      captionKr: "",
      captionCn: "",
      price: 0,
    });
    setIsCreating(false);
  };

  const updateProduct = async (product: Product) => {
    const res = await fetch(
      `https://ihoch-backend.onrender.com/product/update/${product._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      }
    );

    if (!res.ok) return alert("Error updating product");

    const updated = await res.json();
    setProducts((prev) =>
      prev.map((p) => (p._id === product._id ? updated : p))
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
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
          ? "Create New Product"
          : "Шинэ бүтээгдэхүүн нэмэх"}
      </button>

      {isCreating ? (
        <ProductForm
          product={newProduct}
          setProduct={setNewProduct}
          onSubmit={createProduct}
          language={language}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              updateField={updateField}
              onUpdate={() => updateProduct(product)}
              language={language}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
