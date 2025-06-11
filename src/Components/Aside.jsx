import React from 'react'
import { Link } from 'react-router-dom'
import homeicon from '../assets/home_house_icon (1).png'
import ordericon from '../assets/delivery_shipping_order_icon.png'
// import notificationicon from '../assets/alarm_alert_bell_internet_notice_icon.png'
import dashboardicon from '../assets/business_chart_dashboard_graph_icon.png'


const Aside = () => {
  return (
    <div className='min-h-screen flex bg-gray-100'>
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
    </div>
  )
}

export default Aside
