import Link from "next/link";
import Image from "next/image";
import {
  footerNav,
  footerTeam,
  footerLegal,
} from "@/data/navigation";
import { footerContent } from "@/data/pageContent";
import { images } from "@/data/images";

export default function Footer() {
  return (
    <footer className="footer-section" role="contentinfo">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Branding */}
          <div>
            <Link href="/" className="inline-flex flex-col mb-6">
              <span className="font-display text-[26px] leading-none tracking-wide text-[var(--color-text)]">Conejo Valley</span>
              <span className="font-body text-[8px] tracking-[4px] uppercase text-[var(--color-text-light)] mt-1">FAMILY COUNSELING</span>
            </Link>
            <p className="font-body text-[13px] leading-[1.8] text-[var(--color-text-light)]">
              {footerContent.description}
            </p>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <h4 className="font-body text-[11px] tracking-[2.5px] uppercase text-[var(--color-text)] mb-6">
              NAVIGATE
            </h4>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2">
                {footerNav.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-body text-[13px] text-[var(--color-text-light)] hover:text-[var(--color-accent)] transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Our Team */}
          <div>
            <h4 className="font-body text-[11px] tracking-[2.5px] uppercase text-[var(--color-text)] mb-6">
              OUR TEAM
            </h4>
            <ul className="space-y-2">
              {footerTeam.map((member) => (
                <li key={member.name}>
                  <Link
                    href={member.href}
                    className="font-body text-[13px] text-[var(--color-text-light)] hover:text-[var(--color-accent)] transition-colors duration-300"
                  >
                    {member.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-body text-[11px] tracking-[2.5px] uppercase text-[var(--color-text)] mb-6">
              CONTACT
            </h4>
            <div className="space-y-3">
              <p className="font-body text-[13px] leading-[1.7] text-[var(--color-text-light)]">
                {footerContent.address}
              </p>
              <p className="font-body text-[13px] text-[var(--color-text-light)]">
                <a
                  href={`tel:${footerContent.phone.replace(/\./g, "")}`}
                  className="hover:text-[var(--color-accent)] transition-colors duration-300"
                >
                  {footerContent.phone}
                </a>
              </p>
              <p className="font-body text-[13px] text-[var(--color-text-light)]">
                <a
                  href={`mailto:${footerContent.email}`}
                  className="hover:text-[var(--color-accent)] transition-colors duration-300"
                >
                  {footerContent.email}
                </a>
              </p>
              <p className="font-body text-[11px] tracking-[1px] text-[var(--color-text-light)] mt-4 italic">
                {footerContent.serviceAreas}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          {footerLegal.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white/80 hover:text-white text-[11px] tracking-[1px] uppercase transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <a
            href={footerContent.websiteCredit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-[11px] tracking-[1px] transition-colors duration-300"
          >
            {footerContent.websiteCredit.label}
          </a>
          <p className="text-white/60 text-[11px]">
            © {new Date().getFullYear()} Conejo Valley Family Counseling
          </p>
        </div>
      </div>
    </footer>
  );
}
