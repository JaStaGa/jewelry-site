import Image from "next/image";
import Link from "next/link";

type Props = { href: string; label: string; img: string };

export default function CategoryCard({ href, label, img }: Props) {
    return (
        <Link
            href={href}
            className="group rounded-md border border-border bg-card overflow-hidden"
        >
            <div className="relative aspect-4/3">
                <Image src={img} alt={label} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4 text-center text-sm font-medium group-hover:text-(--gold)">
                {label}
            </div>
        </Link>
    );
}
