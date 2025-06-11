import React from "react";
import { Link } from "react-router-dom";
import cowHorn1 from "../assets/Hrons.jpg";
import cowHorn2 from "../assets/cowdr.jpg";
import cowHorn3 from "../assets/craft.jpg";
import cowHorn4 from "../assets/cowset.jpg";

const Hero = () => {
  return (
    <section className="bg-cover bg-gradient-to-r from-blue-50 to-purple-100 relative pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 relative z-10">

        <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold dark:text-gray-300 leading-tight">
            Premium Handcrafted{" "}
            <span className="text-amber-600">Cow Horns</span>
          </h1>
          <p className="mt-4 text-lg dark:text-gray-300">
            Discover authentic cow horn products crafted with tradition and
            sustainability. Perfect for decor, tools, and collectors.
          </p>
          <p className="mt-4 text-sm dark:text-gray-300 italic">
            Tradition. Quality. Craftsmanship.
          </p>
          <div className="mt-6 space-x-4">
            <Link
              to="/Product"
              onClick={() => {
                document
                  .getElementById("Product")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-amber-600 text-white px-6 py-3 rounded-xl shadow hover:bg-amber-700 transition duration-300"
            >
              Browse Products
            </Link>
            <Link
              to="/ContactPage"
              className="bg-transparent border-2 border-white dark:text-gray-300 px-6 py-3 rounded-xl shadow hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>


        <div className="w-full md:w-1/2 relative h-[600px] flex items-end justify-start">
          <div className="flex gap-24 pl-4 pb-4">

            <div className="relative">
              <img
                src={cowHorn1}
                alt="Bottom Image 1"
                className="w-48 h-64 object-cover rounded-xl shadow-md"
              />
              <img
                src={cowHorn2}
                alt="Top Image 1"
                className="w-48 h-64 object-fit rounded-xl shadow-md absolute bottom-full left-[80px]"
              />
            </div>

            <div className="relative">
              <img
                src={cowHorn4}
                alt="Bottom Image 2"
                className="w-48 h-64 object-fit rounded-xl shadow-md"
              />
              <img
                src={cowHorn3}
                alt="Top Image 2"
                className="w-48 h-64 object-fit rounded-xl shadow-md absolute bottom-full left-[80px]"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
