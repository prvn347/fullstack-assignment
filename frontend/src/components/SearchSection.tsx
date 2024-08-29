import { useState } from "react";
import { useRecoilValue } from "recoil";
import { cardAtom } from "../store";
import { cardType } from "../types/cardTypes";

export const SearchSection = () => {
  const cardData = useRecoilValue(cardAtom);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searching, setSearching] = useState(false);
  const [filteredCards, setFilteredCards] = useState<cardType[]>(cardData);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearching(true);
    const searchQuery = event.target.value.toLowerCase();
    setSearchTerm(searchQuery);

    const filtered = cardData.filter((card) =>
      card.title.toLowerCase().includes(searchQuery)
    );

    setFilteredCards(filtered);
  };
  return (
    <section className="  px-20 bg-[#DADBF0] py-10 text-center">
      <div className="  h-[20vh]  flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold mb-4">How can we help?</h2>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border shadow-md border-gray-500 p-2 rounded w-1/2 placeholder:text-sm"
        />
      </div>
      {searching && (
        <div className=" cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCards.map((card, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
              <h2 className="font-bold mb-2">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
