import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="p-4">
      <h2>Your Cart</h2>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${Number(totalAmount).toFixed(2)}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
            {item.title} - ${item.price} x {item.quantity} = ${Number(item.totalPrice).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
