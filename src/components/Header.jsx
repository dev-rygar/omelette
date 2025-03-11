import React from "react";
import omeletteImage from "../assets/omelette.jpg";

export default function Header() {
  return (
    <>
      <header className="mx-5 my-3">
        <img
          src={omeletteImage}
          alt=" Image of Omelette"
          className="w-sm md:w-5xl rounded-2xl"
        />
      </header>
      <section className="mx-5 mt-10">
        <h1 className="md:text-5xl text-3xl font-bold font-stretch-expanded font-serif tracking-wide text-gray-900 mb-5">
          Simple Omelette Recipe
        </h1>
        <p className="md:text-xl text-lg leading-relaxed text-gray-800 tracking-normal">
          An easy quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </section>
    </>
  );
}
