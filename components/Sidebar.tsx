"use client";

import { pages } from "@/libraries/pages";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <aside className="flex flex-col-reverse sm:flex-col min-w-full sm:min-w-[18rem] bg-black">
      <div className="flex justify-between p-4 z-10 bg-black">
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          <h3 className="font-semibold text-gray-300">Juno's Blog</h3>
        </Link>
        <button
          type="button"
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {
            (isOpen) ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )
          }
        </button>
      </div>
      <div className={clsx("p-4 overflow-y-scroll sm:static sm:block", {
        "fixed pb-16 min-w-full h-screen bg-black": isOpen,
        hidden: !isOpen
      })}>
        <nav className="text-sm space-y-8">
          {
            pages.map(page => {
              const name = page.name;
              const items = page.items;
              return (                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-400">{name}</h4>
                  <div className="space-y-2">
                    {
                      items.map(item => (
                        <Link href={item.path} className="block text-gray-500">{item.name}</Link>
                      ))
                    }
                  </div>
                </div>
              )
            })
          }
        </nav>
      </div>
    </aside>
  )
};

export default Sidebar;