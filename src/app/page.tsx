import Link from "next/link";
import Image from "next/image";
import HeroVideo from "@/components/site/HeroVideo";
import Section from "@/components/site/Section";
import CategoryCard from "@/components/site/CategoryCard";
import FadeIn from "@/components/anim/FadeIn";

export default function Home() {
  return (
    <>
      {/* HERO VIDEO */}
      <div className="-mt-16">
        <HeroVideo src="/videos/hero.mp4" offsetTop={false} />
      </div>

      {/* SHOP BY JEWELRY CATEGORY */}
      <Section>
        <FadeIn>
          <h2 className="text-center text-xs tracking-[0.25em] text-muted">
            SHOP BY JEWELRY CATEGORY
          </h2>
        </FadeIn>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { href: "/jewelry/necklaces", label: "Necklaces", img: "/images/necklaces.jpg" },
            { href: "/jewelry/rings", label: "Rings", img: "/images/rings.jpg" },
            { href: "/jewelry/earrings", label: "Earrings", img: "/images/earrings.jpg" },
            { href: "/jewelry/bracelets", label: "Bracelets", img: "/images/bracelets.jpg" },
          ].map((c, i) => (
            <FadeIn key={c.href} delayMs={80 * i}>
              <CategoryCard {...c} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* SHOP MENS JEWELRY BANNER */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <FadeIn>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-border">
              <Image src="/images/mens.jpg" alt="Mens jewelry selection" fill className="object-cover" />
            </div>
          </FadeIn>

          <FadeIn delayMs={120}>
            <div>
              <h3 className="text-3xl font-semibold">Shop Mens Jewelry</h3>
              <p className="mt-3 text-sm text-muted">Rings, chains, and bracelets curated for men.</p>
              <Link href="/jewelry" className="mt-6 inline-block rounded-md bg-gold text-gold-ink px-5 py-3">
                Shop All
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* SHOP BY (Watches for Him / Her) */}
      <Section>
        <FadeIn>
          <h2 className="text-center text-xs tracking-[0.25em] text-muted">SHOP BY</h2>
        </FadeIn>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            { href: "/watches/men", label: "Watches for Him", img: "/images/watches-him.jpg" },
            { href: "/watches/women", label: "Watches for Her", img: "/images/watches-her.jpg" },
          ].map((c, i) => (
            <FadeIn key={c.href} delayMs={120 * i}>
              <Link href={c.href} className="group relative overflow-hidden rounded-md border border-border">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={c.img}
                    alt={c.label}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="absolute left-4 top-4 text-sm font-medium bg-[rgb(0_0_0/0.6)] px-3 py-1 rounded">
                  {c.label}
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* SHOP THE LOOK */}
      <Section>
        <FadeIn>
          <h2 className="text-center text-xs tracking-[0.25em] text-muted">SHOP THE LOOK</h2>
        </FadeIn>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["/images/look-1.jpg", "/images/look-2.jpg", "/images/look-3.jpg"].map((src, i) => (
            <FadeIn key={src} delayMs={100 * i}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-border">
                <Image src={src} alt={`Look ${i + 1}`} fill className="object-cover" />
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* INFO STRIP + NEWSLETTER */}
      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          <FadeIn>
            <div>
              <h3 className="text-sm font-medium">Our Retail Store</h3>
              <p className="mt-2 text-sm text-muted">
                34 Waverly St, STE W13
                <br />
                New York, NY 10036
              </p>
              <p className="mt-2 text-sm text-muted">Mon–Fri: 10–6 pm</p>
              <Link href="#" className="mt-3 inline-block rounded-md border border-border bg-card px-4 py-2 hover:text-gold">
                Get Directions
              </Link>
            </div>
          </FadeIn>

          <FadeIn delayMs={120}>
            <div>
              <h3 className="text-sm font-medium">Info</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <Link href="/shipping" className="hover:text-gold">
                    Shipping Information
                  </Link>
                </li>
                <li>
                  <Link href="/terms-returns" className="hover:text-gold">
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility" className="hover:text-gold">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delayMs={200}>
            <form className="max-w-sm">
              <h3 className="text-sm font-medium">Sign up and save</h3>
              <p className="mt-2 text-sm text-muted">
                Subscribe for special offers, free giveaways, and once-in-a-lifetime deals.
              </p>
              <div className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-md border border-border bg-card px-3 py-2 outline-none focus:ring-2 focus:ring-gold"
                />
                <button className="rounded-md bg-gold text-gold-ink px-4 py-2">Subscribe</button>
              </div>
            </form>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
