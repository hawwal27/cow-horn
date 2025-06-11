import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-100 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        <div>
          <h2 className="text-2xl font-bold text-amber-500 mb-2">CowHorn Craft</h2>
          <p className="text-gray-400">
            Preserving tradition through handcrafted excellence. Our cow horn products are made with passion, precision, and purpose.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link to="/testimonials" className="hover:text-white transition">Testimonials</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
          <p className="text-gray-400 mb-4">Get updates, exclusive deals & artisan tips directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row items-center sm:items-stretch">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg text-gray-900"
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-lg mt-2 sm:mt-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 my-8"></div>

      <div className="text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} CowHorn Craft. All rights reserved.</p>
        <p className="mt-1 italic">"Crafted with soul, shared with pride. image by freepik"</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
