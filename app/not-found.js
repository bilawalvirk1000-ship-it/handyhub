import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">404</p>
      <h1 className="mt-2 text-4xl font-extrabold text-ink">Page not found</h1>
      <p className="mt-2 text-ink-muted">The page you were looking for does not exist.</p>
      <Link href="/" className="btn-primary mt-6">Back to home</Link>
    </section>
  );
}
