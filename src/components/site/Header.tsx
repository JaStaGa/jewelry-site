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
    const isHome = pathname === "/";

    return (
        <header
            className={[
                "fixed top-0 z-50 w-full border-b h-16 flex items-center",
                isHome ? "border-transparent bg-transparent text-white" : "border-border bg-white/80 backdrop-blur text-fg",
            ].join(" ")}
        >
            <div className="mx-auto max-w-6xl w-full px-4 flex items-center justify-between">
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
                                className={`hover:text-gold transition-colors ${active ? "text-gold" : ""}`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="md:hidden">
                    <Link href="/search" aria-label="Search" className="text-muted hover:text-gold">
                        Search
                    </Link>
                </div>
            </div>
        </header>
    );
}
