import { assets } from "../../assets/assets";

const Card = ({ image, title, price, size }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
            <div>
                <img src={image} alt={title} className="w-full h-32 sm:h-48 object-contain p-2 shadow-sm " />

            </div>

            <div className="flex flex-col justify-center items-start p-4 relative">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-700 mt-2 font-semibold">${price}</p>
                {/* <p className="text-gray-600 mt-1 font-light text-md italic">Size: {size}</p> */}
                {/* <img className="absolute right-0 bottom-0 w-8" src={assets.add_button} alt="add" /> */}
                <button className="absolute bottom-4 right-2 bg-slate-200 rounded-xl px-3 py-1 text-sm">Add to Cart</button>
            </div>
        </div>
    );
};

export default Card;