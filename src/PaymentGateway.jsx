import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentGateway = () => {
   const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (paymentMethod === "creditCard") {
      alert(
        `Payment Successful! Details: \nCard Holder: ${formData.cardHolder}\nCard Number: ${formData.cardNumber}`
      );
    } else if (paymentMethod === "razorpay") {
      try {
        // Razorpay payment integration
        const options = {
          key: "rzp_test_UVwxEu8DrexcG2", // Replace with your Razorpay API Key
          amount: 50000, // Amount in paise (e.g., 50000 paise = ₹500)
          currency: "INR",
          name: "WorkSync",
          description: "Test Transaction",
          handler: function (response) {
            // alert(
            //   `Payment ID: ${response.razorpay_payment_id}\nPayment Successful!`
            // );
           navigate("/paid");
          },
          prefill: {
            name: formData.cardHolder || "Your Name",
            email: "user@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Corporate Office Address",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } catch (error) {
        console.error("Razorpay Error: ", error);
        alert("Payment Failed!");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-lg p-6 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
          Payment Gateway
        </h1>

        <form onSubmit={handlePayment} className="space-y-6">
          {/* Payment Method Selection */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Select Payment Method
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setPaymentMethod("creditCard")}
                className={`px-4 py-2 rounded-lg ${
                  paymentMethod === "creditCard"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                }`}
              >
                Credit Card
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("razorpay")}
                className={`px-4 py-2 rounded-lg ${
                  paymentMethod === "razorpay"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                }`}
              >
                Razorpay
              </button>
            </div>
          </div>

          {/* Payment Details */}
          {paymentMethod === "creditCard" && (
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9101 1121"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                required
              />

              <label className="block mt-4 mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Card Holder Name
              </label>
              <input
                type="text"
                name="cardHolder"
                value={formData.cardHolder}
                onChange={handleChange}
                placeholder="Bhadri Prashad"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                required
              />

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === "razorpay" && (
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Complete your payment securely using Razorpay.
              </p>
            </div>
          )}

          {/* Confirm Payment */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentGateway;
