"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

type EditedProduct = {
  infoImg: string;
  subTitleMn: string;
  subTitleKr: string;
  subTitleCn: string;
  subTitleEn: string;
  subTitleJp: string;
  captionEn: string;
  captionJp: string;
  captionMn: string;
  captionKr: string;
  captionCn: string;
  price: number;
};

interface ProductFormProps {
  product: EditedProduct;
  setProduct: (product: EditedProduct) => void;
  onSubmit: () => void;
  language: string;
  images: FileList | null;
  setImages: React.Dispatch<React.SetStateAction<FileList | null>>;
  uploadImages: () => void;
  uploading: boolean;
  uploadedImages: string[];
}

const ProductForm: React.FC<ProductFormProps> = ({
  product,
  setProduct,
  onSubmit,
  language,
  setImages,
  uploadImages,
  uploading,
  uploadedImages,
}) => {
  const handleChange = (field: keyof EditedProduct, value: string) => {
    setProduct({
      ...product,
      [field]: field === "price" ? Number(value) : value,
    });
  };

  const fields: [keyof EditedProduct, string][] = [
    ["subTitleEn", "Subtitle (English)"],
    ["subTitleMn", "Subtitle (Mongolian)"],
    ["subTitleKr", "Subtitle (Korean)"],
    ["subTitleCn", "Subtitle (Chinese)"],
    ["subTitleJp", "Subtitle (Japanese)"],
    ["captionEn", "Caption (English)"],
    ["captionMn", "Caption (Mongolian)"],
    ["captionKr", "Caption (Korean)"],
    ["captionCn", "Caption (Chinese)"],
    ["captionJp", "Caption (Japanese)"],
  ];

  return (
    <div className="p-5 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        {language === "en" ? "Create New Product" : "Шинэ бүтээгдэхүүн"}
      </h2>
      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Upload your image"
        onChange={(e) => {
          const files = e.target.files;
          if (files) {
            setImages(files);
          }
        }}
        type="file"
      />
      <Button onClick={uploadImages} className="hover:cursor-pointer mb-3">
        {uploading ? "Uploading" : "Upload"}
      </Button>
      <div className="w-90% pb-3">
        {uploadedImages.map((img, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <img
              src={img}
              className="aspect-auto rounded-lg shadow-lg w-[300px]"
              alt="Uploaded"
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
      {fields.map(([key, label]) => (
        <input
          key={key}
          className="w-full p-2 border rounded mb-2"
          placeholder={language === "en" ? label : `${label} (Localized)`}
          value={product[key]}
          onChange={(e) => handleChange(key, e.target.value)}
        />
      ))}
      <input
        type="number"
        className="w-full p-2 border rounded mb-2"
        placeholder={language === "en" ? "Price" : "Үнэ"}
        onChange={(e) => handleChange("price", e.target.value)}
      />
      <button
        onClick={onSubmit}
        className="w-full mt-2 p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        {language === "en" ? "Create Product" : "Бүтээгдэхүүн нэмэх"}
      </button>
    </div>
  );
};

export default ProductForm;
