import Link from "next/link";
import { expertiseContent } from "@/data/pageContent";

export default function Expertise() {
  return (
    <section
      className="section-padding border-editorial"
      aria-label="Areas of Expertise"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Heading */}
        <div>
          <h2 className="font-display text-[42px] md:text-[50px] lg:text-[60px] leading-[1.1] text-[var(--color-text)]">
            {expertiseContent.heading}{" "}
            <span className="text-script-accent text-[48px] md:text-[56px] lg:text-[66px]">
              {expertiseContent.headingAccent}
            </span>
          </h2>
        </div>

        {/* Right: Two Column List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
          {/* Left List */}
          <div>
            {expertiseContent.leftColumn.map((item) => (
              <Link key={item.label} href={item.href} className="expertise-item">
                {item.label}
              </Link>
            ))}
          </div>
          {/* Right List */}
          <div>
            {expertiseContent.rightColumn.map((item) => (
              <Link key={item.label} href={item.href} className="expertise-item">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
