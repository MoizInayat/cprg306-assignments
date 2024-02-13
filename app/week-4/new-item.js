"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            name: name,
            quantity: quantity,
            category: category
        }

        console.log(item);
        alert("Added item: " + name + ", Quantity: " + quantity + ", Category: " + category);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return(
        <main>
            <div className="flex flex-col items-center justify-between font-bold text-5xl text-white-500 mt-16 mb-0">
               <h1 > Selector🍗🥯🧈</h1>
            </div>
            <div className=" flex min-h-screen flex-col items-center justify-between p-24">
            <form className=" p-2 m-2 text-black bg-purple-500 max-w-sm w-full rounded-md" onSubmit={handleSubmit}>
                
                <div className="m-2">
                <input className="p-2 mb-2 rounded-md w-full" type="text" id="name" value={name} required placeholder="Item name" onChange={(event) => setName(event.target.value)} />
                </div>
                
                <div className=" flex justify-between mt-2">

                <input className="ml-2 p-1.5 w-16 rounded-md font-sans" type="number" id="quantity" value={quantity} min={1} max={99} required onChange={(event) => setQuantity(event.target.value)} />
                
                <select className="mr-2 p-1.5 w-36 rounded-md font-sans" id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>

                </div>
                <br />
                <button className="bg-indigo-500 w-full p-2 rounded-lg mb-2 text-black" type="submit">+</button>
            </form>
            </div>
        </main>
    );
}