import { CircuitBoard } from "lucide-react";
export const Header = () => {
  return (
    <header className="bg-black shadow-md py-3 px-20 flex justify-between items-center">
      <div className="flex items-center">
        <CircuitBoard color="white" />
        <h1 className=" text-lg pr-3 text-white font-semibold">Abstract</h1>
        <h1 className="text-lg pl-3 border-l border-white text-white font-normal">
          Help Center
        </h1>
      </div>
      <button className="bg-black text-md  text-white px-4 py-1 border border-gray-400 rounded">
        Submit a request
      </button>
    </header>
  );
};
