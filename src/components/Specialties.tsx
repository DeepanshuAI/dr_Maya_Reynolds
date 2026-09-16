import Link from "next/link";
import { specialtiesContent } from "@/data/pageContent";

export default function Specialties() {
  return (
    <section
      className="section-padding border-editorial"
      aria-label="Our Specialties"
    >
      {/* Heading */}
      <div className="mb-12 lg:mb-16">
        <h2 className="font-display text-[42px] md:text-[50px] lg:text-[60px] leading-[1.1] text-[var(--color-text)]">
          {specialtiesContent.heading}{" "}
          <span className="text-script-accent text-[48px] md:text-[56px] lg:text-[66px]">
            {specialtiesContent.headingAccent}
          </span>{" "}
          {specialtiesContent.headingEnd}
        </h2>
      </div>

      {/* Specialty Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 lg:gap-y-16">
        {specialtiesContent.items.map((item) => (
          <div
            key={item.title}
            className="border-t border-[var(--color-border)] pt-8"
          >
            <h3 className="font-display text-[28px] md:text-[34px] leading-[1.2] text-[var(--color-text)] mb-5">
              {item.title}
            </h3>
            <p className="font-body text-[15px] leading-[1.8] text-[var(--color-text-light)] mb-6">
              {item.description}
            </p>
            <Link href={item.cta.href} className="link-underline">
              {item.cta.label}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
