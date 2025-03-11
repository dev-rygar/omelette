import React from "react";

export default function Ingredients() {
  return (
    <section className="text-gray-900 mx-5 mt-10 border-gray-600 border-b-2 pb-3">
      <h2 className="md:text-3xl text-2xl text-[#94410c] font-bold mb-4">
        Ingredients
      </h2>
      <ul
        role="list"
        className="list-disc ml-8 font-medium text-gray-800 md:text-lg"
      >
        <li className="my-1">2-3 large eggs</li>
        <li className="my-1">Salt</li>
        <li className="my-1">Pepper</li>
        <li className="my-1">
          Optional: Cheese, diced vegetables, cooked meats and herbs
        </li>
      </ul>
    </section>
  );
}
