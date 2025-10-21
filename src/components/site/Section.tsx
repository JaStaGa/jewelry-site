import { PropsWithChildren } from "react";

export default function Section({ children }: PropsWithChildren) {
    return (
        <section className="mx-auto max-w-6xl px-4 py-12">{children}</section>
    );
}
