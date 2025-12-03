"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLinks } from "./navlinks";
import { MenuMobile } from "./menu-mobile";
import { ToggleTheme } from "../toggle/toggle-theme";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" container mx-auto border-b border-border z-50">
      {/* <header className="container mx-auto py-6 px-4 border-b"></header> */}
      <nav className=" mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-lg">Yuri Santos</Link>

        <ul className="hidden md:flex gap-6">
          <NavLinks />
        </ul>

        <ToggleTheme />

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      
      <MenuMobile open={open} closeMenu={() => setOpen(false)} />
        
    </header>
  );
}
