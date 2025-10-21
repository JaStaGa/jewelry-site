"use client";

type Props = { src: string; poster?: string; offsetTop?: boolean };

export default function HeroVideo({ src, poster, offsetTop = true }: Props) {
    const heightClass = offsetTop ? "h-[calc(100svh-4rem)]" : "h-[100svh]";
    return (
        <section className="relative w-full">
            <div className={`relative ${heightClass} max-h-[1100px] min-h-[60svh] overflow-hidden`}>
                <video
                    className="h-full w-full object-cover"
                    src={src}
                    poster={poster}
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="metadata"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
            </div>
        </section>
    );
}
