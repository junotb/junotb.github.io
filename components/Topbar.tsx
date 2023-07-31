"use client";

import Link from "next/link";
import { useState } from "react";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <header>
      <div className="flex justify-between px-6 py-8 text-sm">
        <Link
          href="/"
          className=""
          onClick={() => setIsOpen(false)}
        >
          <h1 className="font-semibold">J&nbsp;u&nbsp;n&nbsp;o</h1>
        </Link>
        <button
          type="button"
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {
            (isOpen) ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )
          }
        </button>
      </div>
    </header>
  )
};

export default Topbar;