import React from "react";

export default function Instruction() {
  return (
    <section className="text-gray-900 mx-5 mt-10 border-gray-600 border-b-2 pb-3">
      <h2 className="md:text-3xl text-2xl text-[#94410c] font-bold mb-4">
        Instructions
      </h2>
      <ol
        role="list"
        className="md:text-lg list-decimal ml-8 font-medium text-gray-900 marker:text-[#94410c]"
      >
        <li className="my-1">
          <strong>Beat the eggs: </strong>{" "}
          <span className="text-gray-800 font-normal">
            In a bowl, beat the eggs with a pinch of salt and pepper until they
            are well mixed. You can add a tablespoon of water or milk for a
            fluffier texture.
          </span>
        </li>
        <li className="my-1">
          <strong>Heat the pan: </strong>{" "}
          <span className="text-gray-800 font-normal">
            Place a non-stick frying pan over medium heat and add butter or oil.
          </span>
        </li>
        <li className="my-1">
          <strong>Cook the omelette: </strong>{" "}
          <span className="text-gray-800 font-normal">
            Once the butter is melted and bubbling, pour in the eggs. Tilt the
            pan to ensure the eggs evenly coat the surface.
          </span>
        </li>
        <li className="my-1">
          <strong>Add fillings(optional): </strong>{" "}
          <span className="text-gray-800 font-normal">
            {" "}
            When the eggs begin to set at the edges but are still slightly runny
            in the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </span>
        </li>
        <li className="my-1">
          <strong>Fold and serve: </strong>{" "}
          <span className="text-gray-800 font-normal">
            As the omelette continues to cook, carefully lift one edge and fold
            it over the fillings. Let it cook for another minute, then slide it
            onto a plate.
          </span>
        </li>
        <li className="my-1">
          <strong>Enjoy: </strong>{" "}
          <span className="text-gray-800 font-normal">
            Serve hot, with additional salt and pepper if needed.
          </span>
        </li>
      </ol>
    </section>
  );
}
