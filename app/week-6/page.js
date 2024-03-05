
"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Home() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-gray-950 text-white min-h-screen py-2">
      <div className="">
        <h1 className="font-bold text-4xl text-white-500 items-center justify-between px-10">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}