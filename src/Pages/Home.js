import React from "react";
import NavBar from "../components/NavBar";

export default function () {
  return (
    <div>
      <NavBar />
      <div class="flex bg-emerald-700 h-full">
        <div class="flex-1 p-4">
          <h1 className="text-7xl text-white">
            The Easiest Way To Make Your Favourite Meal
          </h1>
          <p>
            Discover 1000+ recipes in your hand with the best recipe. Help you
            find the easiest way yo cook
          </p>
          <button>
            <p>Explore Recipes</p>
          </button>
        </div>
        <div class="flex-1 p-4">
          <p>This is the second div.</p>
        </div>
      </div>
      <div className="text-5xl">Popular Recipes this week</div>
      <p className="text-gray-400">Our Popular recipes of this week</p>
      <div>See all</div>
      redirect to page to see all recipes
      <div class="grid grid-cols-3 gap-4">
        <div>01</div>
        <div>09</div>
        <div>09</div>
      </div>{" "}
    </div>
  );
}
