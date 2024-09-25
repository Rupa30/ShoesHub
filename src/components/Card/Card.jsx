
const Card = ({ image, title, price, size }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-32 sm:h-48 object-contain p-2 shadow-sm" />
            <div className="flex flex-col justify-center items-center p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600 mt-2">${price}</p>
                <p className="text-gray-600 mt-1 font-light text-md italic">Size: {size}</p>
            </div>
        </div>
    );
};

export default Card;
