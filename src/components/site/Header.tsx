"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
    { href: "/watches", label: "Watches" },
    { href: "/jewelry", label: "Jewelry" },
    { href: "/custom-services", label: "Custom" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
];

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <Link href="/" className="text-xl tracking-widest font-semibold">
                    <span className="px-2 py-1 rounded-sm bg-gold text-gold-ink">JSG</span>
                    <span className="ml-2">Jewelry</span>
                </Link>
                <nav className="hidden md:flex gap-6 text-sm">
                    {nav.map((item) => {
                        const active = pathname?.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-fg hover:text-gold transition-colors ${active ? "text-gold" : "text-fg"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="md:hidden">
                    <Link href="/search" aria-label="Search" className="text-muted text-fg hover:text-gold">Search</Link>
                </div>
            </div>
        </header>
    );
}
