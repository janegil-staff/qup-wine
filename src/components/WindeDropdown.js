// components/WineDropdown.js
import { useState } from "react";

const wineTypes = ["Rødviner", "Chilensk", "Spansk", "Rose", "Piesporter", "Dessertvin", "Eple", "Fersken", "Kiwi", "Bringebær", "Plomme"];

export default function WineDropdown({ onSelect, selected, setSelected }) {
  
  const [open, setOpen] = useState(false);

  const handleSelect = (type) => {
    setSelected(type);
    setOpen(false);
    if (onSelect) onSelect(type);
  };

  return (
    <div className="relative w-64">
      <button
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
        className="w-full bg-gray-900 border border-gray-700 rounded-md shadow-md px-4 py-2 text-left text-gray-200 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-wine focus:border-wine"
      >
        {selected || "Select wine type"}
        <span className="float-right text-gray-400">&#9662;</span>
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
          {wineTypes.map((type) => (
            <li
              key={type}
              onClick={() => handleSelect(type)}
              className="px-4 py-2 text-gray-200 hover:bg-wine hover:text-white cursor-pointer transition-colors"
            >
              {type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
