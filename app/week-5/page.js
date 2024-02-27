import ItemList from "./item-list";

export default function Page() {
    return (
      <main>
         <h1 className="font-bold text-4xl text-white-500 items-center justify-between px-10">Shopping List</h1>
         <ItemList />
      </main>
    );
  }