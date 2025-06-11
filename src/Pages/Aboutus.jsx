import React from 'react'
import { Link } from 'react-router-dom'
import cow_horn2 from "../assets/craft2.jpg"

const Aboutus = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 py-20 px-6" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">
            About <span className="text-amber-600">CowHorn Craft</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
            At <span className="font-semibold text-gray-800 dark:text-white">CowHorn Craft</span>, we believe in preserving timeless traditions through the beauty of nature.
            Every product we create is carefully handcrafted from ethically sourced cow horns — turned into stunning mugs, décor, jewelry, tools, and more.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
            Our artisans use generations-old techniques, ensuring every item is unique and filled with meaning. No mass production. No shortcuts. Just true craftsmanship.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Sustainability is at the heart of everything we do. We use only by-products from local farms and give them new life through creativity, skill, and care.
          </p>

          <div className="mt-6">
            <p className="text-lg italic text-gray-500 dark:text-gray-400">
              "When you buy from us, you’re not just purchasing a product — you’re supporting heritage, artisans, and the earth."
            </p>
          </div>

          <div className="mt-8">
            <Link 
            onClick={() => {
                document.getElementById('Product').scrollIntoView({behavior: "smooth"});
            }}
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-xl transition duration-300"
            >
              Browse Our Collection
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={cow_horn2}
            alt="Cow horn craftsmanship"
            className="rounded-2xl shadow-xl h-[500px] w-[350px] object-cover"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Aboutus
