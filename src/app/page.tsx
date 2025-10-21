import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <p className="text-sm tracking-widest text-[var(--muted)]">CURATED LUXURY</p>
      <h1 className="mt-3 text-5xl font-semibold leading-tight">
        Watches & Jewelry
        <span className="block text-[var(--gold)]">Elevated.</span>
      </h1>
      <p className="mt-4 max-w-xl text-sm text-[var(--muted)]">
        A refined selection with attention to detail. Discover pieces that last.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/watches" className="px-5 py-3 rounded-md bg-[var(--gold)] text-[var(--gold-ink)] font-medium">
          Shop Watches
        </Link>
        <Link href="/jewelry" className="px-5 py-3 rounded-md border border-[var(--border)] bg-[var(--card)]">
          Shop Jewelry
        </Link>
      </div>
    </section>
  );
}
