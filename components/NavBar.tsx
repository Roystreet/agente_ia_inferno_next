"use client";

import {
  Navbar,
  NavbarBrand,
} from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar className="w-full">
      <NavbarBrand>
        <div className=" bg-clip-text ml-4 tex">
          <p className="text-xl font-semibold text-transparent text-center text-slate-100">
            Avatar Dante Inferno
          </p>
        </div>
      </NavbarBrand>

    </Navbar>
  );
}
