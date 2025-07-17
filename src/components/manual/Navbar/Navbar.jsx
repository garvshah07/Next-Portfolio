"use client";

import React from "react";

const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Projects", href: "/projects" },
  { id: 4, name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <section>
      <div className="fixed left-1/2 top-0 -translate-x-1/2 max-w-fit z-50 flex justify-center items-center p-4 mt-4 bg-gray-400/10 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm border-[0.5px] border-gray-800">
        <div className="flex gap-4 text-sm font-normal uppercase">
          {navLinks.map((link) => {
            return (
              <ul key={link.id}>
                <li className="text-white ">{link.name}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
