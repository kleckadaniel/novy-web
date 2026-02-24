"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Služby", href: "#sluzby" },
  { label: "Proč já", href: "#proc-ja" },
  { label: "O mně", href: "#o-mne" },
  { label: "Reference", href: "#reference" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-c-surface/95 backdrop-blur-sm border-b border-c-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo / Name */}
          <a
            href="#"
            className="text-sm font-medium tracking-wide text-c-text hover:text-c-text-2 transition-colors"
          >
            Daniel Klečka
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-c-text-2 hover:text-c-text transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="text-sm font-medium bg-c-text text-white px-5 py-2.5 rounded-full hover:bg-c-accent transition-colors"
            >
              Kontakt
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-c-text-2 hover:text-c-text transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Otevřít menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-current transition-transform duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-transform duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-c-surface border-t border-c-border transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-content py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-base text-c-text-2 hover:text-c-text transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={handleNavClick}
            className="inline-block w-fit text-sm font-medium bg-c-text text-white px-6 py-3 rounded-full hover:bg-c-accent transition-colors"
          >
            Kontakt
          </a>
        </div>
      </div>
    </header>
  );
}
