"use client";
import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductCard from "./ProductCard";
import { log } from "console";

type Product = {
  _id: string;
  infoImg: string;
  subTitleMn: string;
  subTitleKr: string;
  subTitleCn: string;
  subTitleEn: string;
  subTitleJp: string;
  captionEn: string;
  captionMn: string;
  captionKr: string;
  captionCn: string;
  captionJp: string;
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
    subTitleJp: "",
    captionEn: "",
    captionMn: "",
    captionJp: "",
    captionKr: "",
    captionCn: "",
    price: 0,
  });
  const [images, setImages] = useState<FileList | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [uploading, setUploading] = useState(false);

  const requiredFields: (keyof EditedProduct)[] = [
    "infoImg",
    "subTitleEn",
    "subTitleMn",
    "subTitleKr",
    "subTitleCn",
    "subTitleJp",
    "captionEn",
    "captionJp",
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
  const uploadImages = async () => {
    if (!images) return;

    setUploading(true);

    try {
      const uploadPromises = Array.from(images).map(async (image) => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "ace_area");
        formData.append("cloud_name", "dl93ggn7x");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dl93ggn7x/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to upload image");
        }

        const result = await response.json();
        console.log(result.secure_url);
        return result.secure_url;
      });

      const uploadedUrls = await Promise.all(uploadPromises);
      setUploadedImages(uploadedUrls.filter((url) => url !== null) as string[]);
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    if (uploadedImages.length > 0) {
      setNewProduct((prev) => ({
        ...prev,
        infoImg: uploadedImages[0],
      }));
    }
  }, [uploadedImages]);

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
      infoImg: uploadedImages[0],
      subTitleMn: "",
      subTitleKr: "",
      subTitleCn: "",
      subTitleEn: "",
      subTitleJp: "",
      captionEn: "",
      captionJp: "",
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
          images={images}
          setImages={setImages}
          uploadImages={uploadImages}
          uploading={uploading}
          uploadedImages={uploadedImages}
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
