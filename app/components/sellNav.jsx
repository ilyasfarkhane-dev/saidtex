import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white py-4">
      {/* Top Navbar Content */}
      <div className="flex justify-center mb-4">
        <img src="/images/saidtexlogo.png" alt="Logo" className="h-16 w-auto" />
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-start mb-6 mt-8"></div>
      </div>

      {/* Bottom Navbar Content */}
      <div className="flex justify-center pt-[80px]">
        <Link
          className="flex items-center rounded-md bg-[#1a237e] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          href="/"
        >
          <span className="mr-2">Retour au site</span>
          <svg
            className="w-6 h-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.248 19C3.22 15.77 5.275 8.232 12.466 8.232V6.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861v-2.154C5.275 13.616 4.248 19 4.248 19Z"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
