import React from "react";
import { navLists } from "../constants";
const Navbar = () => {
  return (
    <header className="w-full py-8 sm:py-10 px-5 flex justify-between items-center">
      <nav className="flex w-full justify-between">
        <div className="font-bold">RudreshJha.</div>
        <div className="flex gap-5">
          {navLists.map((nav) => (
            <div key={nav.id}>
              <nav.icon />
              {/* {nav.name} */}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
