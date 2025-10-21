"use client";

type Props = { src: string; poster?: string };

export default function HeroVideo({ src, poster }: Props) {
    return (
        <section className="relative w-full">
            <div className="relative aspect-16/7 sm:aspect-16/6 md:aspect-16/5 lg:aspect-16/4 xl:aspect-[16/3.2] overflow-hidden">
                <video
                    className="h-full w-full object-cover"
                    src={src}
                    poster={poster}
                    autoPlay
                    muted
                    playsInline
                    loop
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/20 via-black/10 to-black/30" />
            </div>
        </section>
    );
}
