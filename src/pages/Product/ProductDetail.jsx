import { useParams, useNavigate } from "react-router-dom";
import { item_list } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/CartSlice";
import { faTruck, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

const ProductDetail = () => {
    const { id } = useParams();
    const product = item_list.find((p) => p.id === parseInt(id, 10));

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);

    const [selectedSize, setSelectedSize] = useState(null);
    const sizes = [5, 6, 7, 8, 9, 10];

    if (!product) {
        return <div>Product not found!</div>;
    }

    const isInCart = cartItems.some((item) => item.id === product.id);

    const handleAddToCart = () => {
        if (isInCart) {
            navigate("/cart");
        }
        else {
            dispatch(addToCart({
                id: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
            }));
        }
    };

    return (
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-40 p-6">

            <div className="sm:w-3/5 w-full">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full max-w-xl h-80 sm:h-[80vh] object-contain bg-slate-100 p-4 sm:p-9 shadow-sm "
                />
            </div>

            <div className="sm:w-2/5 w-full h-full sm:h-[80vh] flex flex-col justify-between gap-3">
                <h1 className="text-4xl font-semibold ">{product.title}</h1>
                <div className="flex flex-row">
                    <FontAwesomeIcon icon={faStar} className="w-4 mr-1" />
                    <FontAwesomeIcon icon={faStar} className="w-4 mr-1" />
                    <FontAwesomeIcon icon={faStar} className="w-4 mr-1" />
                    <FontAwesomeIcon icon={faStar} className="w-4 mr-1" />
                    <FontAwesomeIcon icon={faStarHalf} className="w-4 mr-1" />
                </div>
                <p className="text-5xl text-gray-800 ">${product.price}</p>
                <p className=" ">Color: {product.color}</p>
                <p className=" ">Size: UK Men</p>
                <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`w-12 h-12 flex items-center justify-center border rounded-md ${selectedSize === size
                                ? "bg-black text-white border-black"
                                : "bg-white text-gray-700 border-gray-300 hover:border-black"
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>

                <p className=" ">Brand: {product.brand}</p>

                <div className="w-full">
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-slate-800 hover:bg-slate-700 rounded-lg text-white px-3 py-4 text-lg font-semibold"
                    >
                        {isInCart ? "Go To Cart" : "Add To Cart"}
                    </button>
                </div>

                <div className="mt-4">
                    <FontAwesomeIcon icon={faTruck} className="text-2xl mr-2" />
                    <span className="font-medium text-sm">Free Delivery on orders above $150</span>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;
