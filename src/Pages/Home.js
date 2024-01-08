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
        <div>
          <a href="#" class="block">
            <img
              alt="Art"
              src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="h-64 w-2/3 object-cover sm:h-80 lg:h-96"
            />

            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              Lorem, ipsum dolor.
            </h3>

            <p class="mt-2 max-w-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              reiciendis sequi ipsam incidunt.
            </p>
          </a>
        </div>
        <div>09</div>
        <div>09</div>
      </div>{" "}
    </div>
  );
}
