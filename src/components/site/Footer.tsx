import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-[var(--border)] mt-16">
            <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
                <div className="col-span-2">
                    <div className="text-lg font-semibold">Jewelry</div>
                    <p className="mt-3 text-sm text-[var(--muted)]">
                        Luxury watches and fine jewelry. Crafted taste, curated selection.
                    </p>
                </div>
                <div>
                    <div className="text-sm font-medium mb-3">Info</div>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/terms-returns" className="hover:text-[var(--gold)]">Terms & Returns</Link></li>
                        <li><Link href="/shipping" className="hover:text-[var(--gold)]">Shipping</Link></li>
                        <li><Link href="/accessibility" className="hover:text-[var(--gold)]">Accessibility</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="text-sm font-medium mb-3">Contact</div>
                    <ul className="space-y-2 text-sm">
                        <li><a href="mailto:info@example.com" className="hover:text-[var(--gold)]">info@example.com</a></li>
                        <li><a href="tel:+10000000000" className="hover:text-[var(--gold)]">+1 (000) 000-0000</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-xs text-[var(--muted)] px-4 py-6 mx-auto max-w-6xl">
                © {new Date().getFullYear()} Jewelry. All rights reserved.
            </div>
        </footer>
    );
}
