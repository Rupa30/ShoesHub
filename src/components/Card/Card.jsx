import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from "../../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

const Card = ({ id, image, title, price, size, color, brand }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/products/${id}`);
    };

    const addProductToCart = () => {
        dispatch(addToCart({
            id: id,
            title: title,
            price: price,
            image: image,
        }));
    };

    // const removeProductFromCart = () => {
    //     dispatch(removeFromCart(id));
    // };

    const incrementProductQuantity = () => {
        dispatch(incrementQuantity(id));
    };

    const decrementProductQuantity = () => {
        dispatch(decrementQuantity(id));
    };

    const isInCart = cartItems.find(item => item.id === id);
    const quantity = isInCart ? isInCart.quantity : 0;

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 duration-200"
        >
            <div onClick={handleNavigate}>
                <img src={image} alt={title} className="w-full h-32 sm:h-48 object-contain bg-slate-100 p-2 shadow-sm" />
            </div>

            <div className="flex flex-col justify-center items-start p-4 relative">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-700 mt-2 font-semibold">${price}</p>

                {isInCart ? (
                    <div className="absolute bottom-4 right-2 flex gap-2">
                        <button
                            onClick={decrementProductQuantity}
                            className="bg-red-600 rounded-lg text-white px-3 py-2 text-xs">
                            -
                        </button>
                        <div className="flex justify-center items-center p-1"><span>{quantity}</span></div>
                        <button
                            onClick={incrementProductQuantity}
                            className="bg-slate-800 rounded-lg text-white px-3 py-2 text-xs">
                            +
                        </button>
                    </div>
                ) : (
                    <div className="absolute bottom-4 right-2 flex gap-2">
                        <button
                            onClick={addProductToCart}
                            className="bg-slate-800 rounded-lg text-white px-3 py-2 text-xs">
                            Add to Cart
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
