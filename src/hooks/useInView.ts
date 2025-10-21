"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(
    options: IntersectionObserverInit = { root: null, rootMargin: "0px", threshold: 0.15 },
    once = true
) {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
            setInView(true);
            return;
        }
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    setInView(true);
                    if (once) obs.unobserve(e.target);
                } else if (!once) setInView(false);
            });
        }, options);
        obs.observe(ref.current);
        return () => obs.disconnect();
    }, [options.root, options.rootMargin, options.threshold, once]);

    return { ref, inView } as const;
}
