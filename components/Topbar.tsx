"use client";

import Link from "next/link";
import { useState } from "react";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <header>
      <div className="flex justify-between px-6 py-4">
        <Link href="/">
          <h1 className="font-bold">Juno</h1>
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      {
        isOpen &&
        <nav className="fixed inset-0 z-10 bg-[rgb(var(--background-rgb))]">
          <div className="flex justify-between px-6 py-4 text-sm">
            <h1>Menu</h1>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="px-6 py-4 space-y-4 text-xl">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/article">Articles</Link></li>
            <li><Link href="/catalog">Catalogs</Link></li>
          </ul>
        </nav>
      }
    </header>
  )
};

export default Topbar;