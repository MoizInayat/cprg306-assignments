export default function Item({ name, quantity, category }) {
  return (
    <div className="p-2.5 m-3 bg-gray-900 text-black-500 max-w-sm">
      <h2 className="font text-2xl">{name}</h2>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}