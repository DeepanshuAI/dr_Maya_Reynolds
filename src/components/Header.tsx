"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <header>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <p>{navigation.announcementBar}</p>
      </div>

      {/* Main Header */}
      <div className="header-main flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex flex-col items-center">
          <span className="font-display text-[24px] leading-none tracking-wide text-[var(--color-text)]">{navigation.logo.line1}</span>
          <span className="font-body text-[8px] tracking-[4px] uppercase text-[var(--color-text-light)] mt-1">{navigation.logo.line2}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" role="navigation">
          {navigation.links.map((link) => (
            <div
              key={link.label}
              className="nav-item relative"
              onMouseEnter={() =>
                link.dropdown ? setOpenDropdown(link.label) : null
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="font-body text-[11px] tracking-[2.5px] uppercase text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 py-4 inline-block"
              >
                {link.label}
              </Link>

              {/* Dropdown */}
              {link.dropdown && (
                <div
                  className={`nav-dropdown absolute top-full left-0 bg-white shadow-md py-3 min-w-[240px] z-50 ${
                    openDropdown === link.label
                      ? "!opacity-100 !visible !translate-y-0"
                      : ""
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-2 text-[12px] tracking-[1.5px] text-[var(--color-text)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface)] transition-colors duration-200 font-body"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <Link href={navigation.cta.href} className="btn-pill ml-4">
            {navigation.cta.label}
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-6 h-[1px] bg-[var(--color-text)]"></span>
          <span className="block w-6 h-[1px] bg-[var(--color-text)]"></span>
          <span className="block w-6 h-[1px] bg-[var(--color-text)]"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay lg:hidden">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="text-2xl font-light p-2"
            >
              ✕
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {navigation.links.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className="block py-3 text-[12px] tracking-[2.5px] uppercase text-[var(--color-text)] font-body"
                    onClick={() => {
                      if (!link.dropdown) setMobileMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === link.label ? null : link.label
                        )
                      }
                      className="p-3 text-sm"
                      aria-label={`Toggle ${link.label} submenu`}
                    >
                      {mobileDropdown === link.label ? "−" : "+"}
                    </button>
                  )}
                </div>
                {link.dropdown && mobileDropdown === link.label && (
                  <div className="pl-4 pb-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-2 text-[11px] tracking-[1.5px] text-[var(--color-text-light)] font-body"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href={navigation.cta.href}
              className="btn-pill text-center mt-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              {navigation.cta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
