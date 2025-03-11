import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import PreparationTime from "./components/PreparationTime";
import Ingredients from "./components/Ingredients";
import Instruction from "./components/Instruction";
import Nutrition from "./components/Nutrition";

const omeletteOwner =
  "https://unsplash.com/photos/a-plate-of-food-with-eggs-potatoes-and-sausage-8qTCKisD3RQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash";

function App() {
  return (
    <>
      <div className="md:my-30 md:mx-auto md:w-5xl md:rounded-4xl py-12 px-7 shadow-2xl">
        <Header />
        <main>
          <PreparationTime />
          <Ingredients />
          <Instruction />
          <Nutrition />
        </main>
      </div>
    </>
  );
}

export default App;
