import React from "react";

export default function PreparationTime() {
  return (
    <section className="bg-[#fff5c6] mt-10 mx-5 p-5 text-gray-900 rounded-2xl">
      <h2 className="md:text-3xl text-xl text-[#dd7a02] font-semibold mb-4">
        Preparation Time
      </h2>
      <ul role="list" className="list-disc ml-8 md:text-lg">
        <li className="my-1">
          <strong>Total:</strong>{" "}
          <span className="text-gray-800">Approximately 10 minutes</span>
        </li>
        <li className="my-1">
          <strong>Preparation:</strong>{" "}
          <span className="text-gray-800">5-7 minutes</span>
        </li>
        <li className="my-1">
          <strong>Cooking:</strong>{" "}
          <span className="text-gray-800">5 minutes</span>
        </li>
      </ul>
    </section>
  );
}
