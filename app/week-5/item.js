export default function Item({item}) {
  return (
    <div className="p-2 m-4 bg-yellow-900 text-white-500 max-w-sm">
      <h2 className="font-bold text-xl">{item.name}</h2>
      <p>
        Buy {item.quantity} in {item.category}
      </p>
    </div>
  );
}