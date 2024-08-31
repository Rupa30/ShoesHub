import { useState } from "react"
import ShoesFilter from "../../components/ShoesFilter/ShoesFilter"

const ShoesPage = ({ shoes }) => {
    const [filteredShoes, setFilteredShoes] = useState(shoes);

    const handleFilter = (filteredData) => {
        setFilteredShoes(filteredData);
    };

    return (
        <div className="w-full mt-5 flex flex-col justify-center items-center">
            <h1 className="mb-5 text-4xl font-semibold">Our Shoes Collection👟</h1>
            <ShoesFilter shoes={shoes} onFilter={handleFilter} />
            <div className="w-full grid grid-cols-4 mt-5 p-5" >
                {filteredShoes.map(shoe => (
                    <div className="rounded bg-sky-200 m-2" key={shoe.id}>
                        <p className="p-1">{shoe.brand} - Size {shoe.size} - Color {shoe.color} - ${shoe.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoesPage;