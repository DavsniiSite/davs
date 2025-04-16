import React from "react";

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

interface ProductCardProps {
  product: Product;
  updateField: (productId: string, field: keyof Product, value: string) => void;
  onUpdate: () => void;
  language: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  updateField,
  onUpdate,
  language,
}) => {
  const fields: [keyof Product, string][] = [
    ["subTitleEn", "Subtitle (English)"],
    ["subTitleMn", "Subtitle (Mongolian)"],
    ["subTitleKr", "Subtitle (Korean)"],
    ["subTitleCn", "Subtitle (Chinese)"],
    ["captionEn", "Caption (English)"],
    ["captionMn", "Caption (Mongolian)"],
    ["captionKr", "Caption (Korean)"],
    ["captionCn", "Caption (Chinese)"],
  ];

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <img
        src={product.infoImg || "https://via.placeholder.com/150"}
        alt={product.subTitleEn}
        className="w-20 h-20 object-cover mx-auto mb-4"
      />
      {fields.map(([field, label]) => (
        <input
          key={field}
          className="w-full p-2 border rounded mb-2"
          value={product[field]}
          onChange={(e) => updateField(product._id, field, e.target.value)}
        />
      ))}
      <input
        type="number"
        className="w-full p-2 border rounded mb-2"
        value={product.price}
        onChange={(e) => updateField(product._id, "price", e.target.value)}
      />
      <button
        onClick={onUpdate}
        className="w-full mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {language === "en" ? "Update" : "Шинэчлэх"}
      </button>
    </div>
  );
};

export default ProductCard;
