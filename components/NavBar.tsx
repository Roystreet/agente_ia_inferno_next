"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar className="w-full">
      <NavbarBrand>
        <div className="bg-gradient-to-br from-sky-300 to-indigo-500 bg-clip-text ml-4 tex">
          <p className="text-xl font-semibold text-transparent text-center">
            Avatar Dante Inferno
          </p>
        </div>
      </NavbarBrand>

    </Navbar>
  );
}
