import Link from "next/link";
export const metadata = { title: "Custom Services" };

export default function Page() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="text-3xl font-semibold">Custom Services</h1>
            <p className="mt-3 text-sm text-[var(--muted)]">
                Choose a service to get started.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Link href="/custom-services/request" className="rounded-md border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--gold)] hover:text-[var(--gold)] transition">
                    Customer Request
                </Link>
                <Link href="/custom-services/sell" className="rounded-md border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--gold)] hover:text-[var(--gold)] transition">
                    Sell to Us
                </Link>
            </div>
        </section>
    );
}
