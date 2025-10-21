"use client";

import { HTMLAttributes, CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";

type Props = HTMLAttributes<HTMLDivElement> & { delayMs?: number };

export default function FadeIn({ delayMs = 0, className = "", children, ...rest }: Props) {
    const { ref, inView } = useInView<HTMLDivElement>();
    const style: CSSProperties = {
        transitionDelay: `${delayMs}ms`,
        ...(inView ? {} : { opacity: 0, transform: "translateY(16px)" }),
    };
    return (
        <div
            ref={ref}
            style={style}
            className={`transform-gpu will-change-transform transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : ""} ${className}`}
            {...rest}
        >
            {children}
        </div>
    );
}
