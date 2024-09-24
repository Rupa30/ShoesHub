import { item_list } from "../../assets/assets";
import Card from "../Card/Card";

const Arrivals = () => {
  const limitedCards = item_list.slice(4, 11);

  return (
    <div className="my-10 sm:my-auto">
      <div className="p-4">
        <h2 className="flex justify-center items-center text-3xl md:text-4xl font-bold">New</h2>
        <h3 className="flex justify-center items-center text-sm my-2 font-light italic">Arrivals</h3>
        <div className="grid grid-rows-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedCards.map((card, index) => (
            <div
              key={index}
              className={`${index === 0 ? "col-span-2 " : ""} w-full`}
            >
              <Card
                image={card.image}
                title={card.title}
                price={card.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Arrivals;
