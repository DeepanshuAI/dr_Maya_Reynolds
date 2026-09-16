import Image from "next/image";
import Link from "next/link";
import { whoWeHelpContent } from "@/data/pageContent";
import { images } from "@/data/images";

const imageMap: Record<string, string> = {
  Adults: images.whoWeHelp.adults,
  Couples: images.whoWeHelp.couples,
  "Children & Teens": images.whoWeHelp.children,
};

const altMap: Record<string, string> = {
  Adults: "Two people walking together along a peaceful beach shoreline",
  Couples: "Couple holding hands walking on the beach at sunset",
  "Children & Teens":
    "Parent and child playing together on a sunny beach",
};

export default function WhoWeHelp() {
  return (
    <section
      className="section-padding border-editorial"
      aria-label="Who We Help"
    >
      {/* Heading */}
      <div className="mb-12 lg:mb-16">
        <h2 className="font-display text-[42px] md:text-[50px] lg:text-[60px] leading-[1.1] text-[var(--color-text)]">
          {whoWeHelpContent.heading}{" "}
          <span className="text-script-accent text-[48px] md:text-[56px] lg:text-[66px]">
            {whoWeHelpContent.headingAccent}
          </span>
        </h2>
      </div>

      {/* Three Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {whoWeHelpContent.items.map((item) => (
          <div key={item.title}>
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden mb-6">
              <Image
                src={imageMap[item.title]}
                alt={altMap[item.title]}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Title */}
            <h3 className="font-display text-[28px] md:text-[32px] leading-[1.2] text-[var(--color-text)] mb-4">
              {item.title}
            </h3>
            {/* Description */}
            <p className="font-body text-[15px] leading-[1.8] text-[var(--color-text-light)] mb-6">
              {item.description}
            </p>
            {/* Link */}
            <Link href={item.href} className="link-underline">
              LEARN MORE
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
