"use client";

export function NavLinks({ onClick }: { onClick?: () => void }) {
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            onClick={onClick}
            className="hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
    </>
  );
}
