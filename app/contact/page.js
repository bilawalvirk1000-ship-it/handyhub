import site from "@/config/site";

export const metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.storeName}. WhatsApp, phone, and email support for Cash on Delivery orders across Pakistan.`,
};

export default function ContactPage() {
  return (
    <section className="container-page py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold text-ink">Contact us</h1>
        <p className="mt-2 text-ink-muted">
          The fastest way to reach us is on WhatsApp. We usually reply within business hours.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <ContactCard
            title="WhatsApp"
            value="Chat with us instantly"
            href={`https://wa.me/${site.whatsappNumber}`}
            cta="Open WhatsApp"
            external
          />
          <ContactCard
            title="Phone"
            value={site.contactPhone}
            href={`tel:${site.contactPhone.replace(/\s+/g, "")}`}
            cta="Call now"
          />
          <ContactCard
            title="Email"
            value={site.contactEmail}
            href={`mailto:${site.contactEmail}`}
            cta="Send email"
          />
          <ContactCard
            title="City"
            value={site.contactCity}
            subtext={site.contactAddress}
          />
        </div>

        <div className="mt-10 rounded-2xl bg-brand p-6 text-white sm:p-8">
          <h2 className="text-2xl font-extrabold">Prefer to order on WhatsApp?</h2>
          <p className="mt-2 text-white/90">
            Just message us the product name and your delivery address. Cash on Delivery, pay when it arrives.
          </p>
          <a
            href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent("Hi, I would like to place an order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent mt-5"
          >
            Open WhatsApp chat
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ title, value, subtext, href, cta, external }) {
  return (
    <div className="card p-5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">{title}</h3>
      <p className="mt-1 text-lg font-semibold text-ink">{value}</p>
      {subtext && <p className="mt-1 text-sm text-ink-muted">{subtext}</p>}
      {href && (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="btn-outline mt-4 w-full"
        >
          {cta}
        </a>
      )}
    </div>
  );
}
