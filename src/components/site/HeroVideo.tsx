"use client";
import { useEffect, useRef } from "react";

type Props = { src: string; poster?: string; offsetTop?: boolean };

export default function HeroVideo({ src, poster, offsetTop = false }: Props) {
    const ref = useRef<HTMLVideoElement>(null);
    const height = offsetTop ? "h-[calc(100svh-4rem)]" : "h-[100svh]";

    useEffect(() => {
        const v = ref.current;
        if (!v) return;

        // ensure flags before play()
        v.muted = true;

        v.playsInline = true;

        const tryPlay = () => v.play().catch(() => { /* ignore */ });

        // attempt immediately and on first user interaction
        tryPlay();
        const onTouch = () => { tryPlay(); window.removeEventListener("touchstart", onTouch, { once: true } as any); };
        window.addEventListener("touchstart", onTouch, { once: true });

        return () => window.removeEventListener("touchstart", onTouch as any);
    }, []);

    return (
        <section className="relative w-full">
            <div className={`relative ${height} max-h-[1100px] min-h-[60svh] overflow-hidden`}>
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
