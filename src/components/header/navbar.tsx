"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-lg">Yuri Santos</Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* <ThemeToggle /> */}
          {/* Botão mobile */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {open && (
        <ul className="md:hidden flex flex-col items-center bg-background border-t border-border py-4 space-y-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
