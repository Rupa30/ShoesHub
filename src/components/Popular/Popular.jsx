import Card from "../Card/Card"
import { item_list } from "../../assets/assets"

const Popular = () => {

  // limit the number of cards displayed to 4
  const limitedCards = item_list.slice(0, 4);

  return (
    <div className="my-10 sm:my-auto">
      <div className="p-4">
        <h2 className="flex justify-center items-center text-3xl md:text-4xl font-bold ">Popular</h2>
        <h3 className="flex justify-center items-center text-sm my-2 font-light italic">Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedCards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              price={card.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Popular