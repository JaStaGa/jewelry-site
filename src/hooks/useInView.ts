"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(
    options: IntersectionObserverInit = { root: null, rootMargin: "0px", threshold: 0.15 },
    once = true
) {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
        if (reduce) {
            setInView(true);
            return;
        }

        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    setInView(true);
                    if (once) obs.unobserve(e.target);
                } else if (!once) {
                    setInView(false);
                }
            });
        }, options);

        obs.observe(el);
        return () => obs.disconnect();
    }, [options, once]);

    return { ref, inView } as const;
}
