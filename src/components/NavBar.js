import React from "react";

export default function NavBar() {
  return (
    <div class="text-white p-4 bg-emerald-700 flex">
      <nav class="flex items-center justify-between">
        <div>
          <a href="#" class="hover:bg-emerald-950 px-4 py-2 rounded">
            Home
          </a>
          <a href="#" class="hover:bg-emerald-950 px-4 py-2 rounded">
            About Us
          </a>
          <a href="#" class="hover:bg-emerald-950 px-4 py-2 rounded">
            Recipes
          </a>
          <a href="#" class="hover:bg-emerald-950 px-4 py-2 rounded">
            Articles
          </a>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
}
