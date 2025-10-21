export const metadata = { title: "Accessibility" };

export default function Page() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="text-3xl font-semibold">Accessibility</h1>
            <p className="mt-3 text-sm text-[var(--muted)]">
                We aim for WCAG 2.2 AA. Keyboard navigation, visible focus, alt text, and high-contrast mode are priorities.
            </p>
        </section>
    );
}
