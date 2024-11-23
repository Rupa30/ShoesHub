import { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineAccountBalance, MdQrCodeScanner } from "react-icons/md";


const PaymentMethod = ({selectedMethod, handlePaymentChange}) => {

    return (
        <div className="my-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

            {/* Payment Options */}
            <div className="space-y-4">
                {/* Credit/Debit Card */}
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="credit-card"
                        name="payment-method"
                        value="credit"
                        checked={selectedMethod === "credit"}
                        onChange={handlePaymentChange}
                        className="form-radio text-green-500 h-5 w-5"
                    />
                    <label htmlFor="credit-card" className="ml-3 flex items-center">
                        <FaCreditCard className="text-2xl text-gray-700 mr-2" />
                        <span className="text-md">Credit/Debit Card</span>
                    </label>
                </div>

                {/* Netbanking */}
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="netbanking"
                        name="payment-method"
                        value="netbanking"
                        checked={selectedMethod === "netbanking"}
                        onChange={handlePaymentChange}
                        className="form-radio text-green-500 h-5 w-5"
                    />
                    <label htmlFor="netbanking" className="ml-3 flex items-center">
                        <MdOutlineAccountBalance className="text-2xl text-gray-700 mr-2" />
                        <span className="text-md">Netbanking</span>
                    </label>
                </div>

                {/* UPI */}
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="upi"
                        name="payment-method"
                        value="upi"
                        checked={selectedMethod === "upi"}
                        onChange={handlePaymentChange}
                        className="form-radio text-green-500 h-5 w-5"
                    />
                    <label htmlFor="upi" className="ml-3 flex items-center">
                        <MdQrCodeScanner className="text-2xl text-gray-700 mr-2" />
                        <span className="text-md">UPI</span>
                    </label>
                </div>
            </div>

            {/* Credit/Debit Card Form */}
            {selectedMethod === "credit" && (
                <div className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="card-number"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            placeholder="1234 5678 9012 3456"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">
                                Expiry Date
                            </label>
                            <input
                                type="text"
                                id="expiry-date"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                placeholder="MM/YY"
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                CVC
                            </label>
                            <input
                                type="text"
                                id="cvc"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                placeholder="123"
                            />
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default PaymentMethod;
