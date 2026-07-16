export default function PolicyPage({ title, updated, children }) {
  return (
    <article className="container-page py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold text-ink">{title}</h1>
        {updated && <p className="mt-2 text-sm text-ink-muted">Last updated: {updated}</p>}
        <div className="prose prose-slate mt-8 max-w-none space-y-4 text-ink-soft [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1 [&_a]:text-brand [&_a]:underline">
          {children}
        </div>
      </div>
    </article>
  );
}
