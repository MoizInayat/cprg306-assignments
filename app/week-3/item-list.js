import Item from "./item";

const item1 = {
  name: "Milk, 4 L 🥛",
  quantity: 1,
  category: "dairy",
};
 
const item2 = {
  name: "Bread 🍞",
  quantity: 2,
  category: "bakery",
};
 
const item3 = {
  name: "Eggs, dozen 🥚",
  quantity: 2,
  category: "dairy",
};
 
const item4 = {
  name: "Bananas 🍌",
  quantity: 6,
  category: "produce",
};
 
const item5 = {
  name: "Broccoli 🥦",
  quantity: 3,
  category: "produce",
};
 
const item6 = {
  name: "Chicken Breasts, 1 kg 🍗",
  quantity: 1,
  category: "meat",
};
 
const item7 = {
  name: "Pasta Sauce 🍝",
  quantity: 3,
  category: "canned goods",
};
 
const item8 = {
  name: "Spaghetti, 454 g 🍝",
  quantity: 2,
  category: "dry goods",
};
 
const item9 = {
  name: "Roilet Paper, 12 pack 🧻",
  quantity: 1,
  category: "household",
};
 
const item10 = {
  name: "Paper Towels, 6 pack",
  quantity: 1,
  category: "household",
};
 
const item11 = {
  name: "Dish Soap 🍽️",
  quantity: 1,
  category: "household",
};
 
const item12 = {
  name: "Hand Soap 🧼",
  quantity: 4,
  category: "household",
};

export default function ItemList() {
  const items = [];
  for (let i = 1; i <= 12; i++) {
    items.push(eval("item" + i));
  }
  return (
    <div>
      {items.map((item, index) => (
        <Item
          key={index} 
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}