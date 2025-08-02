// components/HorizontalTabs.js
import { useEffect, useState } from "react";


export default function HorizontalTabs({products, onSelect}) {
  const [activeTab, setActiveTab] = useState(null);
  
  return (
    <div>
      {/* Tab Bar */}
      <div className="flex border-b border-gray-300">
        {products?.map((product) => (
          <button
            key={product.type}
            onClick={() => {
              setActiveTab(product._id);
              onSelect(product._id);
            }}
            className={`flex-1 px-4 py-2 text-center transition ${
              activeTab === product._id
                ? "border-b-2 border-purple-600 text-purple-700 font-semibold"
                : "text-gray-600 hover:text-purple-600"
            }`}
          >
            {product.type}
          </button>
        ))}
      </div>
    </div>
  );
}
