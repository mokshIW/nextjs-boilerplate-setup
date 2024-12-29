import { BadgeCheckIcon } from "lucide-react";
import React from "react";

export default function Price() {
  // create dummy data for prices
  const prices = [
    {
      id: 1,
      title: "Hobby",
      description: "For small teams or projects",
      benefits: [
        "Hobby Benefit 1",
        "Hobby Benefit 2",
        "Hobby Benefit 3",
        "Hobby Benefit 4",
        "Hobby Benefit 5",
      ],
      price: 10,
    },
    {
      id: 2,
      title: "Pro",
      description: "For medium-sized teams",
      benefits: [
        "Pro Benefit 1",
        "Pro Benefit 2",
        "Pro Benefit 3",
        "Pro Benefit 4",
        "Pro Benefit 5",
      ],
      price: 50,
    },
    {
      id: 3,
      title: "Enterprise",
      description: "For large teams",
      benefits: [
        "Enterprise Benefit 1",
        "Enterprise Benefit 2",
        "Enterprise Benefit 3",
        "Enterprise Benefit 4",
        "Enterprise Benefit 5",
      ],
      price: 100,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-4 px-4 lg:py-8 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-6 w-full">
        {prices.map((price) => {
          return (
            <div
              key={price.id}
              className={`w-full bg-gray-800 rounded-md p-4 md:p-6 border border-gray-700 transition duration-300 ${
                price.id === 2
                  ? "shadow-2xl shadow-blue-600 scale-105 bg-gradient-to-br from-indigo-800 to-cyan-600"
                  : "shadow-lg shadow-slate-600"
              }`}
            >
              <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl text-gray-200 mb-2">
                {price.title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-4">
                {price.description}
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-300 mb-6">
                ${price.price}
                <span className="text-xs md:text-sm lg:text-base text-gray-400 font-normal">
                  /mo
                </span>
              </p>
              <ul className="space-y-2 md:space-y-4">
                {price.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <BadgeCheckIcon
                      size={16}
                      className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-400"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="mt-4 md:mt-6 w-full bg-blue-700 text-white font-bold py-2 px-3 md:py-2 md:px-4 lg:py-3 lg:px-6 rounded-lg shadow-md shadow-blue-600 hover:shadow-lime-700 hover:bg-lime-700 hover:scale-105 duration-200 transition">
                Choose {price.title}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
