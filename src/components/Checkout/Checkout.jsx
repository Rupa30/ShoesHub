import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PaymentMethod from "../Payment/Payment";
import { clearCart } from "../../store/CartSlice";
import { useDispatch } from "react-redux";
// import OrderSuccess from "../../pages/OrderSuccess/OrderSuccess"

const Checkout = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sameAsBilling, setSameAsBilling] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("credit");


  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    city: '',
    zipCode: ''
  });
  const [isFormValid, setIsFormValid] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCheckboxChange = () => {
    setSameAsBilling(prev => !prev);
  };

  const handlePaymentChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, address, phone, email, city, zipCode } = billingInfo;
    // Check if all required fields are filled
    return firstName && lastName && address && phone && email && city && zipCode;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    setIsFormValid(isValid);
    setFormSubmitted(true);
    dispatch(clearCart());

    if (isValid) {
      // If form is valid, proceed with the order placement logic
      console.log('Form is valid. Placing order...');
      // Redirect after validation
      navigate('/OrderSuccess');
      
    } else {
      // Show the warning if form is not valid
      console.log('Form is not valid. Please fill out all fields.');
    }
  };

  return (
    <div className="mb-5">
      <h2 className="flex justify-start items-center text-xl sm:text-2xl text-red-500 font-semibold">Checkout→</h2>

      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 mx-auto max-w-7xl">
        {/* Left Column - Billing and Shipping */}
        <div className="sm:w-2/3">
          {/* Billing Information */}
          <div className="bg-white border rounded-md shadow-md p-5">
            <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
            <div className="grid grid-cols-2 gap-2">
              <input name="firstName" className="bg-gray-100 rounded text-sm p-2 text-left" type="text" placeholder="First Name" value={billingInfo.firstName} onChange={handleInputChange} />
              <input name="lastName" className="bg-gray-100 rounded text-sm p-2 text-left" type="text" placeholder="Last Name" value={billingInfo.lastName} onChange={handleInputChange} />
              <input name="address" className="col-span-2 h-16 bg-gray-100 rounded text-sm p-2 text-left" type="text" placeholder="Address" value={billingInfo.address} onChange={handleInputChange} />
              <input name="phone" className="bg-gray-100 rounded text-sm p-2 text-left" type="number" placeholder="Phone" value={billingInfo.phone} onChange={handleInputChange} />
              <input name="email" className="bg-gray-100 rounded text-sm p-2 text-left" type="email" placeholder="Email" value={billingInfo.email} onChange={handleInputChange} />
              <input name="city" className="bg-gray-100 rounded text-sm p-2 text-left" type="text" placeholder="City" value={billingInfo.city} onChange={handleInputChange} />
              <input name="zipCode" className="bg-gray-100 rounded text-sm p-2 text-left" type="number" placeholder="Zip Code" value={billingInfo.zipCode} onChange={handleInputChange} />
            </div>
            <div style={{ marginTop: '20px' }}>
              <label>
                <input type="checkbox" checked={sameAsBilling} onChange={handleCheckboxChange} />
                {' '}Ship to a different address
              </label>
            </div>
          </div>

          {/* Shipping Information */}
          {
            sameAsBilling && (
              <div className="bg-white border rounded-md shadow-md p-5 mt-4">
                <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-2">
                  <input className="bg-gray-100 rounded text-sm p-2 text-left" type="text" placeholder="First Name" />
                  <input className="bg-gray-100 rounded text-sm p-2 text-left" type="text" placeholder="Last Name" />
                  <input className="col-span-2 h-16 bg-gray-100 rounded text-sm p-2 text-left" type="text" placeholder="Address" />
                  <input className="bg-gray-100 rounded text-sm p-2 text-left" type="number" placeholder="Phone" />
                  <input className="bg-gray-100 rounded text-sm p-2 text-left" type="email" placeholder="Email" />
                  <input className="bg-gray-100 rounded text-sm p-2 text-left" type="text" placeholder="City" />
                  <input className="bg-gray-100 rounded text-sm p-2 text-left" type="number" placeholder="Zip Code" />
                </div>
              </div>)
          }

          <div className="shadow-md">
            <PaymentMethod 
            selectedMethod={selectedMethod}
            handlePaymentChange={handlePaymentChange}
            />
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="sm:w-1/3 h-96 bg-white border rounded-md shadow-md p-5 flex flex-col justify-between">
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
            <button className="w-full py-3 text-lg font-semibold" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>

          {/* Display warning if form is invalid */}
          {!isFormValid && formSubmitted && (
            <p className="text-red-500 text-sm mt-2 text-center">
              Please fill out all required fields before placing the order.
            </p>
          )}
        </div>
      </div>

    </div>
  )
}

export default Checkout;