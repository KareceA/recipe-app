import React from "react";
import NavBar from "../components/NavBar";

export default function () {
  return (
    <div>
      <NavBar />
      <div class="flex bg-white h-full">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt="Party"
                  src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Grow your audience
                </h2>

                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <div class="flex-1 p-4">
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
        </div> */}
        {/* <div class="flex-1 p-4">
          <p>This is the second div.</p>
        </div> */}
      </div>
      <div className="text-5xl">Popular Recipes this week</div>
      <p className="text-gray-400">Our Popular recipes of this week</p>
      <div>See all</div>
      redirect to page to see all recipes
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
        <div>
          <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              class="h-56 w-full object-cover"
            />

            <div class="bg-white p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-gray-500">
                {" "}
                10th Oct 2022{" "}
              </time>

              <a href="#">
                <h3 class="mt-0.5 text-lg text-gray-900">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </article>
        </div>
        <div>
          <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              class="h-56 w-full object-cover"
            />

            <div class="bg-white p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-gray-500">
                {" "}
                10th Oct 2022{" "}
              </time>

              <a href="#">
                <h3 class="mt-0.5 text-lg text-gray-900">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </article>
        </div>
        <div>
          <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              class="h-56 w-full object-cover"
            />

            <div class="bg-white p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-gray-500">
                {" "}
                10th Oct 2022{" "}
              </time>

              <a href="#">
                <h3 class="mt-0.5 text-lg text-gray-900">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </article>
        </div>
      </div>{" "}
    </div>
  );
}
