import { useEffect } from "react";
import { getCards } from "../api";
import { useRecoilState } from "recoil";
import { cardAtom } from "../store";

export const HelpCards = () => {
  const [cards, setCards] = useRecoilState(cardAtom);
  const fetchCards = async () => {
    const resp = await getCards();

    setCards(resp.data.result);

    return resp;
  };
  useEffect(() => {
    fetchCards();
  }, []);
  return (
    <section className="py-10 px-20 grid grid-cols-1  sm:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <div className=" flex justify-center">
          <div
            key={index}
            className=" cursor-pointer bg-[#F4F6F8] py-3 w-[34vw] border border-[#D7DFEA]  rounded-lg shadow-md"
          >
            <h3 className="text-md px-6 py-1 border-b border-[#D7DFEA] font-semibold mb-2">
              {card.title}
            </h3>
            <p className="px-6  text-md">{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
