"use client";
import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    name: 'Client Name',
    profession: 'Profession',
    image: '../../images/testimonials/testimonial-1.jpg',
  },
  {
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    name: 'Client Name',
    profession: 'Profession',
    image: '../../images/testimonials/testimonial-2.jpg',
  },
  {
    text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    name: 'Client Name',
    profession: 'Profession',
    image: '../../images/testimonials/testimonial-3.jpg',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <div className="text-center mb-8">
        <h5 className="text-primary text-xl font-secondary tracking-wider">Testimonial</h5>
        <h1 className="text-2xl lg:text-4xl font-extrabold">Our Clients Say!!!</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`w-full md:w-1/3 p-6 border rounded-lg transition-all duration-300 ${
              index === activeIndex
                ? 'bg-primary text-white'
                : 'bg-white text-gray-900'
            }`}
          >
            <FaQuoteLeft className="text-2xl mb-3" />
            <p className="mb-4">{testimonial.text}</p>
            <div className="flex items-center space-x-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h5 className="font-extrabold">{testimonial.name}</h5>
                <small>{testimonial.profession}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
