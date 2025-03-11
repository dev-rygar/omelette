import React from "react";

export default function Nutrition() {
  return (
    <section className="text-gray-900 mx-5 mt-10 border-gray-600 pb-3">
      <h2 className="md:text-3xl text-2xl text-[#94410c] font-bold mb-4">
        Nutrition
      </h2>
      <p className="text-gray-800">
        The table below shows nutritional values per serving withouth the
        additional fillings.
      </p>
      <ul role="list" className="md:text-lg font-medium text-gray-800">
        <li className="border-gray-400 border-b-1 my-3 flex px-2 justify-around">
          <span className="block w-xs pl-2">Calories</span>
          <span className="block text-[#94410c]">277kcal</span>
        </li>
        <li className="border-gray-400 border-b-1 my-3 flex px-2 justify-around">
          <span className="block w-xs">Carbs</span>
          <span className="block text-[#94410c]">0g</span>
        </li>
        <li className="border-gray-400 border-b-1 my-3 flex px-2 justify-around">
          <span className="block w-xs">Protein</span>
          <span className="block text-[#94410c]">20g</span>
        </li>
        <li className="border-gray-400 border-b-1 my-3 flex px-2 justify-around">
          <span className="block w-xs">Fat</span>
          <span className="block text-[#94410c]">22g</span>
        </li>
      </ul>
    </section>
  );
}
