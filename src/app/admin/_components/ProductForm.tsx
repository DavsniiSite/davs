import React from "react";

type EditedProduct = {
  infoImg: string;
  subTitleMn: string;
  subTitleKr: string;
  subTitleC: string;
  subTitleEn: string;
  captionEn: string;
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
}

const ProductForm: React.FC<ProductFormProps> = ({
  product,
  setProduct,
  onSubmit,
  language,
}) => {
  const handleChange = (field: keyof EditedProduct, value: string) => {
    setProduct({
      ...product,
      [field]: field === "price" ? Number(value) : value,
    });
  };

  const fields: [keyof EditedProduct, string][] = [
    ["infoImg", "Image URL"],
    ["subTitleEn", "Subtitle (English)"],
    ["subTitleMn", "Subtitle (Mongolian)"],
    ["subTitleKr", "Subtitle (Korean)"],
    ["subTitleC", "Subtitle (Chinese)"],
    ["captionEn", "Caption (English)"],
    ["captionMn", "Caption (Mongolian)"],
    ["captionKr", "Caption (Korean)"],
    ["captionCn", "Caption (Chinese)"],
  ];

  return (
    <div className="p-5 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        {language === "en" ? "Create New Product" : "Шинэ бүтээгдэхүүн"}
      </h2>
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
        value={product.price}
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
