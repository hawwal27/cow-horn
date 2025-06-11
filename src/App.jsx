import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Aboutus from './Pages/Aboutus';
import SupplierDashboard from './Supplier/supplier';
import BuyerOrderPage from './Buyer/Order';
import BuyerDashboard from './Buyer/Buyer';
import Aside from './Components/Aside';
import Product from './Product/ProductPage';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<Aboutus />} />
        <Route path='/supplier' element={<SupplierDashboard/>}/>
        <Route path='/BuyerDashboard' element={<BuyerDashboard/>}/>
        <Route path='/Order' element={<BuyerOrderPage/>}/>
        <Route path='/Product' element={<Product/>}/>
    </Routes>
    </div>
  )
}

export default App
