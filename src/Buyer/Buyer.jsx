import React from "react";
import { useClerk, UserButton, useUser, UserProfile } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import homeicon from '../assets/home_house_icon (1).png'
import ordericon from '../assets/delivery_shipping_order_icon.png'
// import notificationicon from '../assets/alarm_alert_bell_internet_notice_icon.png'
import dashboardicon from '../assets/business_chart_dashboard_graph_icon.png'

const BuyerDashboard = () => {
  const stats = [
    { label: "Orders", value: "24", color: "bg-blue-100 text-blue-800" },
    { label: "inqured list", value: "8", color: "bg-pink-100 text-pink-800" },
    { label: "In Cart", value: "3", color: "bg-yellow-100 text-yellow-800" },
    { label: "Delivered", value: "21", color: "bg-green-100 text-green-800" },
  ];

  const orders = [
    {
      id: "#1023",
      product: "Polished Horn",
      status: "Delivered",
      date: "Apr 25, 2025",
    },
    {
      id: "#1024",
      product: "Raw Cow Horn",
      status: "Shipped",
      date: "Apr 27, 2025",
    },
    {
      id: "#1025",
      product: "Decor Horn Set",
      status: "Pending",
      date: "May 1, 2025",
    },
    {
      id: "#1025",
      product: "Decor Horn Set",
      status: "Pending",
      date: "May 1, 2025",
    },
    {
      id: "#1025",
      product: "Decor Horn Set",
      status: "Pending",
      date: "May 1, 2025",
    },
    {
      id: "#1025",
      product: "Decor Horn Set",
      status: "Pending",
      date: "May 1, 2025",
    },
    {
      id: "#1025",
      product: "Decor Horn Set",
      status: "Pending",
      date: "May 1, 2025",
    },
    {
      id: "#1025",
      product: "Decor Horn Set",
      status: "Pending",
      date: "May 1, 2025",
    },
    {
      id: "#1025",
      product: "Decor Horn Set",
      status: "Pending",
      date: "May 1, 2025",
    },
    {
      id: "#1025",
      product: "Decor Horn Set",
      status: "Pending",
      date: "May 1, 2025",
    },
    {
      id: "#1025",
      product: "Decor Horn Set",
      status: "Pending",
      date: "May 1, 2025",
    },
    {
      id: "#1025",
      product: "Decor Horn Set",
      status: "Pending",
      date: "May 1, 2025",
    },
    {
      id: "#1025",
      product: "Decor Horn Set",
      status: "Pending",
      date: "May 1, 2025",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="flex">
        <aside className="w-20 bg-white shadow-md flex flex-col items-center py-6 space-y-8 sticky top-0 h-screen  text-white p-4">
          <Link>
            
            <img src={homeicon} className="w-10 h-10 bg-gray-300 rounded-tl-xl rounded-br-sm" />
          </Link>
          <Link to="/Order">
            
            <img src={ordericon} className="w-10 h-10 bg-gray-300 rounded-tl-xl rounded-br-sm" />
          </Link>
          <Link>
           
            <img src={dashboardicon} className="w-10 h-10 bg-gray-300 rounded-tl-xl rounded-br-sm" />
          </Link>
          <Link>
            <img src={notificationicon} className="w-10 h-10 bg-gray-300 rounded-tl-xl rounded-br-sm" />
          </Link>
        </aside>
      </div>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Buyer Dashboard</h1>
          <div className="flex items-center space-x-3">
            <span className="text-gray-600"></span>
            <UserButton />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-sm ${stat.color} hover:shadow-md transition`}
            >
              <p className="text-sm font-medium">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
 
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Orders
          </h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2">Order ID</th>
                <th className="py-2">Product</th>
                <th className="py-2">Status</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-3">{order.id}</td>
                  <td className="py-3">{order.product}</td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default BuyerDashboard;
