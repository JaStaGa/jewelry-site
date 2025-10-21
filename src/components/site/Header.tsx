"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SECTIONS = [
    {
        title: "WATCHES",
        items: [
            { label: "Men", href: "/watches/men" },
            { label: "Women", href: "/watches/women" },
        ],
    },
    {
        title: "JEWELRY",
        items: [
            { label: "Necklaces", href: "/jewelry/necklaces" },
            { label: "Rings", href: "/jewelry/rings" },
            { label: "Earrings", href: "/jewelry/earrings" },
            { label: "Bracelets", href: "/jewelry/bracelets" },
        ],
    },
    {
        title: "CUSTOM SERVICES",
        items: [
            { label: "Sell", href: "/custom-services/sell" },
            { label: "Requests", href: "/custom-services/request" },
        ],
    },
];

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [open, setOpen] = useState(false);

    // lock scroll on menu
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <header
                className={[
                    "fixed top-0 w-full h-16 flex items-center transition-colors",
                    open
                        ? "z-40 bg-background/95 text-foreground border-b border-border backdrop-blur"
                        : isHome
                            ? "z-50 bg-transparent text-white border-b border-transparent"
                            : "z-50 bg-background/80 text-foreground border-b border-border backdrop-blur",
                ].join(" ")}
            >
                <div className="mx-auto max-w-6xl w-full px-4 flex items-center justify-between">
                    <Link href="/" className="text-xl tracking-widest font-semibold">
                        <span className="px-2 py-1 rounded-sm bg-gold text-gold-ink">J</span>
                        <span className="ml-2">Jewelry</span>
                    </Link>

                    {/* Desktop */}
                    <nav className="hidden md:flex gap-6 text-sm">
                        {[
                            { href: "/watches", label: "Watches" },
                            { href: "/jewelry", label: "Jewelry" },
                            { href: "/custom-services", label: "Custom" },
                            { href: "/about", label: "About" },
                            { href: "/faq", label: "FAQ" },
                        ].map((n) => (
                            <Link
                                key={n.href}
                                href={n.href}
                                className={`hover:text-gold ${pathname?.startsWith(n.href) ? "text-gold" : ""}`}
                            >
                                {n.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile hamburger (bare lines) */}
                    <button
                        aria-label={open ? "Close menu" : "Open menu"}
                        onClick={() => setOpen((v) => !v)}
                        className="md:hidden h-10 w-10 -mr-1 flex items-center justify-center"
                    >
                        <span className="relative block h-4 w-6">
                            <span className={`absolute left-0 top-0 h-[2px] w-6 bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
                            <span className={`absolute left-0 top-[6px] h-[2px] w-6 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
                            <span className={`absolute left-0 top-[12px] h-[2px] w-6 bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
                        </span>
                    </button>
                </div>
            </header>

            {/* Overlay + Sheet rendered ABOVE header */}
            <div
                className={[
                    "fixed inset-0",
                    open ? "z-[70] opacity-100 pointer-events-auto" : "z-[-1] opacity-0 pointer-events-none",
                    "transition-opacity"
                ].join(" ")}
                onClick={() => setOpen(false)}
                aria-hidden={!open}
            >
                {/* dim background UNDER the sheet header area only */}
                <div className="absolute inset-0 bg-black/40" />

                {/* OPAQUE sheet (full screen) */}
                <nav
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation"
                    className={[
                        "absolute inset-0 w-full h-full",
                        "bg-bg text-fg",              // solid, no /opacity
                        "overflow-y-auto",
                        "translate-y-0 transition-transform will-change-transform",
                        open ? "translate-y-0" : "translate-y-full"
                    ].join(" ")}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* header row inside sheet */}
                    <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border bg-bg px-4">
                        <Link href="/" onClick={() => setOpen(false)} className="text-base font-semibold">
                            <span className="px-2 py-1 rounded-sm bg-gold text-gold-ink">J</span>
                            <span className="ml-2">Jewelry</span>
                        </Link>
                        <button
                            aria-label="Close"
                            onClick={() => setOpen(false)}
                            className="h-10 w-10 flex items-center justify-center text-muted hover:text-fg"
                        >
                            ✕
                        </button>
                    </div>

                    {/* content */}
                    <div className="px-6 pb-10 pt-4 space-y-6">
                        <div className="space-y-4 divide-y divide-border">
                            {SECTIONS.map((sec) => (
                                <div key={sec.title} className="pt-4 first:pt-0">
                                    <div className="flex items-center justify-between py-2">
                                        <span className="tracking-[0.25em] text-lg">{sec.title}</span>
                                    </div>
                                    <ul className="grid grid-cols-2 gap-x-6 gap-y-2 py-3">
                                        {sec.items.map((it) => (
                                            <li key={it.href}>
                                                <Link href={it.href} className="block py-1 hover:text-gold" onClick={() => setOpen(false)}>
                                                    {it.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <ul className="space-y-3">
                                <li><Link href="/about" onClick={() => setOpen(false)} className="hover:text-gold">About</Link></li>
                                <li><Link href="/faq" onClick={() => setOpen(false)} className="hover:text-gold">FAQ</Link></li>
                            </ul>
                            <ul className="space-y-3">
                                <li><Link href="/contact" onClick={() => setOpen(false)} className="hover:text-gold">Contact</Link></li>
                                {/* <li><Link href="/login" onClick={() => setOpen(false)} className="hover:text-gold">Log in</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
