import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import cowHorn from '../assets/Cow-horn1.jpg';

const testimonials = [
  {
    text: "Absolutely stunning craftsmanship. The cow horn mug I ordered exceeded expectations — it's both rustic and elegant.",
    name: "Mr Hawwal",
    title: "Collector",
    image: cowHorn,
  },
  {
    text: "I love the authenticity. The horns are handcrafted with care — each piece tells a story.",
    name: "Isiaka Quazeem",
    title: "Interior Designer",
    image: cowHorn,
  },
  {
    text: "Absolutely stunning craftsmanship. The cow horn mug I ordered exceeded expectations — it's both rustic and elegant.",
    name: "Mr Hawwal",
    title: "Collector",
    image: cowHorn,
  },
  {
    text: "The detailing is incredible. I bought a decorative horn as a gift and it was a huge hit. Will order again!",
    name: "MR Isaac",
    title: "Supplier",
    image: cowHorn,
  },
  {
    text: "Absolutely stunning craftsmanship. The cow horn mug I ordered exceeded expectations — it's both rustic and elegant.",
    name: "Mr Hawwal",
    title: "Collector",
    image: cowHorn,
  },
  {
    text: "The detailing is incredible. I bought a decorative horn as a gift and it was a huge hit. Will order again!",
    name: "MR Isaac",
    title: "Supplier",
    image: cowHorn,
  },
  {
    text: "I love the authenticity. The horns are handcrafted with care — each piece tells a story.",
    name: "Isiaka Quazeem",
    title: "Interior Designer",
    image: cowHorn,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-amber-600 dark:text-white mb-12">
          What Our Customers Say
        </h2>

        <div className="relative">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 md:p-14 max-w-3xl mx-auto transition-all duration-500 ease-in-out border border-gray-200 dark:border-gray-700">
            <FaQuoteLeft className="text-4xl text-gray-300 dark:text-gray-600 mb-6 mx-auto" />
            <p className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed mb-8">
              {testimonials[currentIndex].text}
            </p>

            <div className="flex items-center justify-center gap-4 mt-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-300 dark:ring-gray-600 shadow"
              />
              <div className="text-left">
                <p className="font-semibold text-lg text-amber-600 dark:text-white">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-xl px-4 py-2 rounded-full shadow-md transition-transform hover:scale-110"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-xl px-4 py-2 rounded-full shadow-md transition-transform hover:scale-110"
            aria-label="Next"
          >
            →
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gray-800 dark:bg-white scale-125'
                  : 'bg-gray-400 dark:bg-gray-600'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
