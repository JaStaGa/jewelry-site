import Link from "next/link";
export const metadata = { title: "Jewelry" };

const cats = [
    { href: "/jewelry/earrings", label: "Earrings" },
    { href: "/jewelry/rings", label: "Rings" },
    { href: "/jewelry/bracelets", label: "Bracelets" },
    { href: "/jewelry/necklaces", label: "Necklaces" },
];

export default function Page() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="text-3xl font-semibold">Jewelry</h1>
            <p className="mt-3 text-sm text-muted">Explore categories.</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {cats.map((c) => (
                    <Link
                        key={c.href}
                        href={c.href}
                        className="rounded-md border border-border bg-card p-6 hover:border-(--gold) hover:text-(--gold) transition"
                    >
                        {c.label}
                    </Link>
                ))}
            </div>
        </section>
    );
}
