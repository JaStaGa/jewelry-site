"use client";
import { useEffect, useRef } from "react";

type Props = {
    src: string;
    poster?: string;
    /** If true, subtract header height (64px) on desktop. */
    offsetTop?: boolean;
    /** Optional height classes to override default per breakpoint. */
    heightClass?: string; // e.g. "h-[33svh] md:h-[calc(100svh-4rem)]"
};

export default function HeroVideo({ src, poster, offsetTop = false, heightClass }: Props) {
    const ref = useRef<HTMLVideoElement>(null);
    const desktop = offsetTop ? "md:h-[calc(100svh-4rem)]" : "md:h-[100svh]";
    const height = heightClass ?? `h-[33svh] ${desktop} max-h-[1100px] min-h-[33svh]`;

    useEffect(() => {
        const v = ref.current;
        if (!v) return;
        v.muted = true;
        v.playsInline = true;
        (v as HTMLVideoElement & { webkitPlaysInline?: boolean }).webkitPlaysInline = true;
        const tryPlay = () => { void v.play().catch(() => { }); };
        tryPlay();
        const onTouch = () => tryPlay();
        window.addEventListener("touchstart", onTouch, { once: true });
        return () => window.removeEventListener("touchstart", onTouch);
    }, [src]);

    return (
        <section className="relative w-full">
            <div className={`relative ${height} overflow-hidden`}>
                <video
                    ref={ref}
                    className="h-full w-full object-cover"
                    src={src}
                    poster={poster}
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate nofullscreen"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
            </div>
        </section>
    );
}
