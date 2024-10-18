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
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-red-500 my-6">Your Cart →</h2>

      <div className="flex flex-col sm:flex-row justify-between gap-8 mt-8">
        {/* Cart Items Section */}
        <div className="sm:w-2/3">
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center sm:justify-between">
                  {/* Product Image */}
                  <img src={item.image} alt={item.title} className="w-24 h-24 object-contain sm:w-28 sm:h-28" />

                  {/* Product Details */}
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-start">
                      <p className="text-lg font-medium">{item.title}</p>
                      <button
                        onClick={() => removeProductFromCart(item.id)}
                        className="text-red-400 font-semibold text-xl hover:text-red-600"
                      >
                        ×
                      </button>
                    </div>

                    {/* Quantity and Pricing */}
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decrementProductQuantity(item.id, item.quantity)}
                          className="bg-gray-300 text-sm rounded-full w-8 h-8 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="text-base">{item.quantity}</span>
                        <button
                          onClick={() => incrementProductQuantity(item.id)}
                          className="bg-gray-300 text-sm rounded-full w-8 h-8 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-bold">${Number(item.totalPrice).toFixed(2)}</p>
                        <p className="text-sm text-red-500">60% OFF</p>
                      </div>
                    </div>

                    {/* Return Policy */}
                    <div className="flex items-center mt-4 text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                      </svg>
                      <span>7 days return available</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Order Summary Section */}
        <div className="sm:w-1/3 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-lg">
              <span>Total Quantity:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Subtotal:</span>
              <span>${totalAmount}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Shipping:</span>
              <span className="text-green-500 line-through mr-2">$9</span><span className="text-green-500">Free</span>
            </div>
            <div className="flex justify-between text-sm text-green-600 cursor-pointer">
              <span>Add coupon code</span>
              <span>→</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>${Number(totalAmount).toFixed(2)}</span>
            </div>
          </div>

          <Link to="/checkout" className="block mt-6 bg-green-500 text-white text-center text-lg font-semibold rounded-md py-3">
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
