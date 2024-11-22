import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTruck, faGift } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      {/* Container */}
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full text-center">
        {/* Success Icon */}
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-6xl mb-4" />

        {/* Success Message */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-600">
          Thank you for shopping with us. Your order has been placed and will be delivered soon.
        </p>

        {/* Delivery and Gift Icons */}
        <div className="flex justify-around mt-8 text-gray-600">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faTruck} className="text-4xl" />
            <p className="mt-2">Fast Delivery</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faGift} className="text-4xl" />
            <p className="mt-2">Special Packaging</p>
          </div>
        </div>

        {/* Continue Shopping Button */}
        <button className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 my-3 hover:opacity-75 mt-8">
          <Link to="/">Continue Shopping</Link>
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
