import React from 'react';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser, UserProfile,  } from "@clerk/clerk-react";
import homeicon from '../assets/home_house_icon (1).png'
import ordericon from '../assets/delivery_shipping_order_icon.png'
// import notificationicon from '../assets/alarm_alert_bell_internet_notice_icon.png'
import dashboardicon from '../assets/business_chart_dashboard_graph_icon.png'

const SupplierDashboard = () => {
  const stats = [
    { label: 'Total Sales', value: '#120,340' },
    { label: 'Orders', value: '230' },
    { label: 'Stock', value: '128 Items' },
    { label: 'Shipped', value: '180' },
  ];

  const orders = [
    
    { id: '#001', item: 'Polished Horn', customer: 'mr qozeem', status: 'Shipped' },
    { id: '#002', item: 'Raw Horn', customer: 'MR. hawwal', status: 'Processing' },
    { id: '#002', item: 'Raw Horn', customer: 'MR. Rahman', status: 'Processing' },
    { id: '#002', item: 'Raw Horn', customer: 'MR. Mustapha', status: 'Processing' },
    { id: '#002', item: 'Raw Horn', customer: 'MR. Abayomi', status: 'Processing' },
    { id: '#002', item: 'Raw Horn', customer: 'MR. Habeeb', status: 'Processing' },
    { id: '#002', item: 'Raw Horn', customer: 'MR. Isaac', status: 'Processing' },
    { id: '#002', item: 'Raw Horn', customer: 'MR. Kunle', status: 'Processing' },

  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className='flex'>
      <aside className="w-20 bg-white shadow-lg flex flex-col items-center py-6 space-y-6 sticky top-0 h-screen  text-white p-4">
       <Link><img src={homeicon} alt='' className="w-10 h-10 bg-gray-300 rounded-full" /></Link>
        <Link><img src={dashboardicon} alt='' className="w-10 h-10 bg-gray-300 rounded-tl-xl rounded-br-sm" /></Link>
        <Link><img src={ordericon} alt='' className="w-10 h-10 bg-gray-300 rounded-tl-xl rounded-br-sm" /></Link>
        <Link><img src={notificationicon} alt='' className="w-10 h-10 bg-gray-300 rounded-full" /></Link>
      </aside>
      </div>
     
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Supplier Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span>Wellcome  </span>
              <UserButton/>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-xl font-bold text-gray-800 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {orders.map((order, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-100 transition">
                <div>
                  <p className="text-gray-800 font-medium">{order.item}</p>
                  <p className="text-sm text-gray-500">{order.customer}</p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    order.status === 'Shipped'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {order.status}
                </div>
              </div>
            ))}
          </div>
        
        </div>
      </main>
    </div>
  );
};

export default SupplierDashboard;
