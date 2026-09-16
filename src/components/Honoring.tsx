import Image from "next/image";
import { honoringContent } from "@/data/pageContent";
import { images } from "@/data/images";

export default function Honoring() {
  return (
    <section
      className="border-editorial"
      aria-label="Your Journey"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative min-h-[350px] lg:min-h-[500px] overflow-hidden order-2 lg:order-1">
          <Image
            src={images.honoring}
            alt="Santa Monica coastline at sunset with warm golden light"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right: Text */}
        <div className="section-padding flex items-center order-1 lg:order-2">
          <h2 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.15] text-[var(--color-text)]">
            {honoringContent.heading}{" "}
            <span className="text-script-accent text-[42px] md:text-[50px] lg:text-[58px]">
              {honoringContent.headingAccent}
            </span>{" "}
            {honoringContent.headingEnd}
          </h2>
        </div>
      </div>
    </section>
  );
}
