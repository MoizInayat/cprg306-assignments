"use client";

import Item from "./item";
import { useState } from "react";
import itemData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Map JSON data to array of items
  let itemArray = itemData.map(item => ({ ...item }));

  // Sorting function
  itemArray = itemArray.sort((a, b) => {
    if (isNaN(parseInt(a[sortBy]))) {
      // Sort alphabetically
      let nameA = a[sortBy].toUpperCase();
      let nameB = b[sortBy].toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    } else {
      // Sort numerically
      return a[sortBy] - b[sortBy];
    }
  });

  return (
    <div className="flex min-h-screen flex-col  ">
      <div className="flex pl-10 pt-5 pb-5 pr-10 bg-grey-300">
        <div className="flex items-center space-x-4">
          <label className="text-gray-600 font-medium">Sort by: </label>
          <button
            className={`text-white rounded-md px-3 py-1 transition duration-300 ease-in-out ${sortBy === "name" ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => setSortBy("name")}>
            Name
          </button>
          <button
            className={`text-white rounded-md px-3 py-1 transition duration-300 ease-in-out ${sortBy === "category" ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => setSortBy("category")}>
            Category
          </button>
        </div>
      </div>

      <div className="mt-5">
        {itemArray.map(item => (
          <div key={item.id} className="border-b pb-4 mb-4">
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
