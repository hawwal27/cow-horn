import React, { useState } from "react";
import Aside from "../Components/Aside";
import { Link } from "react-router-dom";
import homeicon from '../assets/home_house_icon (1).png'
import ordericon from '../assets/delivery_shipping_order_icon.png'
// import notificationicon from '../assets/alarm_alert_bell_internet_notice_icon.png'
import dashboardicon from '../assets/business_chart_dashboard_graph_icon.png'

const BuyerOrderPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    alert("Order submitted successfully!");
    setFormData({ name: "", email: "", product: "", quantity: "", notes: "" });
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="flex">
        <aside className="w-20 bg-white shadow-md flex flex-col items-center py-6 space-y-8 sticky top-0 h-screen  text-white p-4">
          <Link>
            <img
              src={homeicon}
              className="w-10 h-10 bg-gray-300 rounded-tl-xl rounded-br-sm"
            />
          </Link>
          <Link to="/Order">
            <img
              src={ordericon}
              className="w-10 h-10 bg-gray-300 rounded-tl-xl rounded-br-sm"
            />
          </Link>
          <Link>
            <img
              src={dashboardicon}
              className="w-10 h-10 bg-gray-300 rounded-tl-xl rounded-br-sm"
            />
          </Link>
          <Link>
            <img
              src={notificationicon}
              className="w-10 h-10 bg-gray-300 rounded-tl-xl rounded-br-sm"
            />
          </Link>
        </aside>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl justify-center items-center"
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Place Your Order
        </h2>

        <div className="grid grid-cols-1 gap-5">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Product</option>
            <option value="Polished Cow Horn">Polished Cow Horn</option>
            <option value="Raw Cow Horn">Raw Cow Horn</option>
            <option value="Decorative Horn Piece">Decorative Horn Piece</option>
          </select>

          <input
            name="quantity"
            type="number"
            min="1"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="notes"
            placeholder="Any special instructions..."
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition"
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyerOrderPage;
