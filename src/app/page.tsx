import Link from "next/link";
import Image from "next/image";
import HeroVideo from "@/components/site/HeroVideo";
import Section from "@/components/site/Section";
import CategoryCard from "@/components/site/CategoryCard";

export default function Home() {
  return (
    <>
      {/* HERO VIDEO */}
      <HeroVideo src="/videos/hero.mp4" />

      {/* SHOP BY JEWELRY CATEGORY */}
      <Section>
        <h2 className="text-center text-xs tracking-[0.25em] text-muted">
          SHOP BY JEWELRY CATEGORY
        </h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <CategoryCard href="/jewelry/necklaces" label="Necklaces" img="/images/necklaces.jpg" />
          <CategoryCard href="/jewelry/rings" label="Rings" img="/images/rings.jpg" />
          <CategoryCard href="/jewelry/earrings" label="Earrings" img="/images/earrings.jpg" />
          <CategoryCard href="/jewelry/bracelets" label="Bracelets" img="/images/bracelets.jpg" />
        </div>
      </Section>

      {/* SHOP MENS JEWELRY BANNER */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="relative aspect-4/3 rounded-md overflow-hidden border border-border">
            <Image src="/images/mens.jpg" alt="Shop mens jewelry" fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Shop Mens Jewelry</h3>
            <p className="mt-3 text-sm text-muted">Rings, chains, and bracelets curated for men.</p>
            <Link href="/jewelry" className="mt-6 inline-block rounded-md bg-(--gold) text-(--gold-ink) px-5 py-3">
              Shop All
            </Link>
          </div>
        </div>
      </Section>

      {/* SHOP BY (Watches for Him / Her) */}
      <Section>
        <h2 className="text-center text-xs tracking-[0.25em] text-muted">SHOP BY</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            { href: "/watches/men", label: "Watches for Him", img: "/images/watches-him.jpg" },
            { href: "/watches/women", label: "Watches for Her", img: "/images/watches-her.jpg" },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="group relative overflow-hidden rounded-md border border-border">
              <div className="relative aspect-4/3">
                <Image src={c.img} alt={c.label} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <span className="absolute left-4 top-4 text-sm font-medium bg-[rgb(0_0_0/0.6)] px-3 py-1 rounded">
                {c.label}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* SHOP THE LOOK */}
      <Section>
        <h2 className="text-center text-xs tracking-[0.25em] text-muted">SHOP THE LOOK</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["/images/look-1.jpg", "/images/look-2.jpg", "/images/look-3.jpg"].map((src) => (
            <div key={src} className="relative aspect-4/5 overflow-hidden rounded-md border border-border">
              <Image src={src} alt="Look" fill className="object-cover" />
            </div>
          ))}
        </div>
      </Section>

      {/* INFO STRIP + NEWSLETTER mimic */}
      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-medium">Our Retail Store</h3>
            <p className="mt-2 text-sm text-muted">34 Waverly St, STE W13<br />New York, NY 10036</p>
            <p className="mt-2 text-sm text-muted">Mon–Fri: 10–6 pm</p>
            <Link href="#" className="mt-3 inline-block rounded-md border border-border bg-card px-4 py-2 hover:text-(--gold)">
              Get Directions
            </Link>
          </div>
          <div>
            <h3 className="text-sm font-medium">Info</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/shipping" className="hover:text-(--gold)">Shipping Information</Link></li>
              <li><Link href="/terms-returns" className="hover:text-(--gold)">Returns & Refunds</Link></li>
              <li><Link href="/accessibility" className="hover:text-(--gold)">Accessibility</Link></li>
            </ul>
          </div>
          <form className="max-w-sm">
            <h3 className="text-sm font-medium">Sign up and save</h3>
            <p className="mt-2 text-sm text-muted">Subscribe for special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <div className="mt-3 flex gap-2">
              <input type="email" placeholder="Enter your email" className="min-w-0 flex-1 rounded-md border border-border bg-card px-3 py-2 outline-none focus:ring-2 focus:ring-(--gold)" />
              <button className="rounded-md bg-(--gold) text-(--gold-ink) px-4 py-2">Subscribe</button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
