"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Главная" },
  { href: "/events", label: "События" },
  { href: "/favorites", label: "Избранное" },
  { href: "/about", label: "О проекте" },
  { href: "/contacts", label: "Контакты" },
]
export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-7 text-sm">
      {links.map((link) => {
        const isActive = link.href === "/"
          ? pathname === "/"
          : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? "text-amber-400" : "text-slate-300"}>
            {link.label}
          </Link>
        )
        })}
    </nav>
  );
}