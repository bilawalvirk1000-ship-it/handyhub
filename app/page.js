import Link from "next/link";
import products from "@/config/products";
import site from "@/config/site";
import ProductCard from "@/components/ProductCard";
import TrustRow from "@/components/TrustRow";

export const metadata = {
  title: `${site.storeName} | ${site.tagline}`,
  description: `${site.tagline} ${site.deliveryNote}. Cash on Delivery across Pakistan.`,
  openGraph: {
    title: site.storeName,
    description: site.tagline,
    url: "https://www.handyhub.cc",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: `${site.storeName} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.storeName,
    description: site.tagline,
    images: ["/og-default.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustRow />

      <section id="products" className="container-page py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Launch offer</p>
            <h2 className="mt-1 text-3xl font-extrabold text-ink sm:text-4xl">Trending picks</h2>
            <p className="mt-2 max-w-xl text-ink-muted">
              Handpicked, everyday-useful gadgets. Cash on Delivery across Pakistan, no advance payment required.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <WhyBuy />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
      <div className="container-page relative py-20 sm:py-28">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ring-white/25 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Cash on Delivery across Pakistan
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl">
            Everyday items,{" "}
            <span className="text-brand">made easy.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">
            Handpicked gadgets shipped nationwide. {site.deliveryNote}. No advance payment, pay only when your parcel arrives at your door.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#products" className="btn-primary text-base">
              Shop the picks
            </Link>
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white/95 px-5 py-3 text-base font-semibold text-ink shadow-sm transition hover:bg-white"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="flex items-center gap-2"><Dot /> No advance payment</span>
            <span className="flex items-center gap-2"><Dot /> 2 to 5 day delivery</span>
            <span className="flex items-center gap-2"><Dot /> Easy returns</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />;
}

function WhyBuy() {
  const items = [
    {
      title: "No advance payment",
      body: "You only pay the courier in cash when your parcel arrives. Nothing to lose by trying us.",
    },
    {
      title: "Real human on WhatsApp",
      body: "Your order goes directly to us on WhatsApp. Ask a question, change an item, or track delivery with one message.",
    },
    {
      title: "Handpicked, useful gadgets",
      body: "We only stock things we would actually use ourselves. No filler, no shady claims.",
    },
    {
      title: "Delivered nationwide",
      body: "From Karachi to Peshawar, we ship across Pakistan in 2 to 5 working days.",
    },
  ];
  return (
    <section className="bg-slate-50 py-14">
      <div className="container-page">
        <h2 className="text-3xl font-extrabold text-ink">Why buy from us</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="card p-5">
              <h3 className="text-lg font-bold text-ink">{it.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container-page py-14">
      <div className="card mx-auto max-w-2xl p-8 text-center sm:p-10">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-extrabold text-ink sm:text-3xl">Be our first reviewer</h2>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          {site.storeName} is a new store just getting started. Place an order today and share your honest feedback with us on WhatsApp. Real reviews from real customers will appear here soon.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="#products" className="btn-primary">
            Shop the picks
          </Link>
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="container-page pb-6">
      <div className="card flex flex-col items-center gap-4 rounded-3xl bg-brand p-8 text-center text-white sm:p-12">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Ready to order?</h2>
        <p className="max-w-xl text-white/90">
          Pick a product, fill in your details, and we will confirm your order on WhatsApp. Pay only when it arrives.
        </p>
        <Link href="#products" className="btn-accent">
          Browse products
        </Link>
      </div>
    </section>
  );
}
