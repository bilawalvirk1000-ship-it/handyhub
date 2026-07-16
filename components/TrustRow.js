export default function TrustRow() {
  const items = [
    {
      title: "Cash on Delivery",
      body: "Pay in cash only when your parcel reaches your door.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Nationwide Delivery",
      body: "Delivered across Pakistan in 2 to 5 working days.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
          <path d="M3 7h13v10H3z" />
          <path d="M16 10h4l1 3v4h-5z" />
          <circle cx="7" cy="18" r="1.6" />
          <circle cx="18" cy="18" r="1.6" />
        </svg>
      ),
    },
    {
      title: "Easy Returns",
      body: "Not what you expected? Contact us within 3 days for support.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
          <path d="M9 14l-4-4 4-4" />
          <path d="M5 10h9a5 5 0 0 1 0 10h-2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="border-y border-slate-100 bg-slate-50">
      <div className="container-page grid gap-6 py-8 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="flex items-start gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
              {it.icon}
            </div>
            <div>
              <p className="font-semibold text-ink">{it.title}</p>
              <p className="text-sm text-ink-muted">{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
