import { useState } from "react";
import ShoesFilter from "../../components/ShoesFilter/ShoesFilter";
import { item_list } from "../../assets/assets";
import Card from "../../components/Card/Card";

const ShoesPage = () => {
    const [filteredShoes, setFilteredShoes] = useState(item_list);

    const handleFilter = (filteredData) => {
        setFilteredShoes(filteredData);
    };

    return (
        <div className="w-full mt-5 flex flex-col justify-center items-center">
            <h1 className="mb-3 text-4xl font-semibold">Categories</h1>
            <h2 className='mr-3 rounded  p-1 italic'>Filter</h2>

            <ShoesFilter shoes={item_list} onFilter={handleFilter} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
                {filteredShoes.map(shoe => (
                    <Card
                        key={shoe.id}
                        image={shoe.image}
                        title={shoe.title}
                        price={shoe.price}
                        size={shoe.size}
                        color={shoe.color}
                        brand={shoe.brand}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShoesPage;