import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../store/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const removeProductFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const incrementProductQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };

  const decrementProductQuantity = (id, quantity) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className="">
      <h2 className="flex justify-start ml-0 sm:ml-6 items-center text-xl sm:text-2xl text-red-500 font-semibold">Your Cart→</h2>

      <div className="flex flex-col sm:flex-row flex-wrap justify-around mt-10 mx-auto">
        <div className="">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="flex justify-normal items-center gap-2 sm:gap-20 outline outline-1 outline-gray-300 rounded-sm mb-3 p-3">
                  <div>
                    <img src={item.image} alt={item.title} className="w-28 h-28 object-contain" />
                  </div>

                  <div className="flex flex-col justify-between gap-3">
                    <p className="text-base font-medium">{item.title}</p>
                    <div className="flex flex-row justify-start items-start gap-2 text-sm">
                      <button
                        onClick={() => decrementProductQuantity(item.id, item.quantity)}
                        className="bg-gray-300 rounded-full px-2 py-1 text-xs">
                        -
                      </button>
                      <div className="flex justify-center items-center p-1"><span>{item.quantity}</span></div>
                      <button
                        onClick={() => incrementProductQuantity(item.id)}
                        className="bg-gray-300 rounded-full px-2 py-1 text-xs">
                        +
                      </button>
                    </div>

                    <div className="flex flex-row gap-3 sm:gap-5 text-sm font-medium">
                      <p className="font-bold">${Number(item.totalPrice).toFixed(2)}</p>
                      <p className="text-red-500">60% OFF</p>
                    </div>

                    <div className="flex flex-row gap-3 justify-center items-center text-sm font-light">
                      <div className="p-1 rounded-full outline outline-1 outline-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-2 sm:size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                      </svg></div>
                      <p className=" text-xs"><span className="font-semibold">7 days</span> return available</p>
                    </div>

                  </div>
                  <div>
                    <p onClick={() => removeProductFromCart(item.id)} className="cursor-pointer p-1 bg-white border rounded-full w-8 h-8 flex justify-center items-center">x</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full sm:w-2/4 text-xs mx-auto sm:mx-0 h-96 p-5 bg-white border rounded-md shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          </div>

          <div className="mb-2">
            <div className="flex justify-between items-center text-base">
              <p className="text-gray-600">Total Quantity:</p>
              <p className="font-semibold">{totalQuantity}</p>
            </div>
            <div className="flex justify-between items-center text-base">
              <p className="text-gray-600">Subtotal:</p>
              <p className="font-semibold">${totalAmount}</p>
            </div>
            <div className="flex justify-between items-center text-base">
              <p className="text-gray-600">Shipping:</p>
              <span className="text-green-500"><span className="line-through text-black">$9</span> Free</span>
            </div>
            <div className="flex justify-between items-center mt-2 text-sm text-green-600 cursor-pointer">
              <p>Add coupon code</p>
              <p>→</p>
            </div>
          </div>

          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between items-center font-bold">
              <p className="text-lg">Total:</p>
              <p className="text-lg">${Number(totalAmount).toFixed(2)}</p>
            </div>
          </div>

          <div className="bg-green-500 text-white rounded-md mt-4">
            <Link to="/checkout">
              <button className="w-full py-3 text-lg font-semibold">
                CHECKOUT TO PROCEED
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
