import { notFound } from "next/navigation";
import Link from "next/link";
import products, { getProductBySlug } from "@/config/products";
import site from "@/config/site";
import { formatPrice, savings } from "@/lib/format";
import ProductGallery from "@/components/ProductGallery";
import OrderForm from "@/components/OrderForm";
import StickyMobileBar from "@/components/StickyMobileBar";
import TrustRow from "@/components/TrustRow";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  const title = product.name;
  const description = product.shortDesc;
  const image = product.images?.[0] || "/og-default.svg";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  const { amount, percent } = savings(product.price, product.salePrice);
  const salePrice = product.salePrice || product.price;

  return (
    <>
      <div className="container-page pt-6 pb-24 sm:pb-14">
        <nav className="mb-4 text-sm text-ink-muted">
          <Link href="/" className="hover:text-brand">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2">
          <ProductGallery images={product.images} alt={product.name} />

          <div>
            <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              Launch offer
            </span>
            <h1 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">{product.name}</h1>
            <p className="mt-2 text-ink-soft">{product.shortDesc}</p>

            <div className="mt-5 flex flex-wrap items-end gap-3">
              <span className="text-4xl font-extrabold text-ink">{formatPrice(salePrice)}</span>
              {product.salePrice && product.salePrice < product.price && (
                <>
                  <span className="text-lg text-ink-muted line-through">{formatPrice(product.price)}</span>
                  <span className="rounded-md bg-emerald-50 px-2 py-1 text-sm font-semibold text-emerald-700">
                    Save {formatPrice(amount)} ({percent}% off)
                  </span>
                </>
              )}
            </div>

            <div className="mt-4 flex flex-col gap-1 text-sm">
              <span className="inline-flex items-center gap-2 font-semibold text-brand">
                <span className="inline-block h-2 w-2 rounded-full bg-brand" />
                Cash on Delivery, pay when it arrives
              </span>
              <span className="text-ink-muted">{site.deliveryNote}</span>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-bold text-ink">Why you will love it</h2>
              <ul className="mt-3 space-y-2">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex gap-2 text-ink-soft">
                    <CheckIcon />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {product.useCases?.length ? (
              <div className="mt-6">
                <h2 className="text-lg font-bold text-ink">Great for</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.useCases.map((u) => (
                    <span key={u} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-ink-soft">
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-6 hidden sm:block">
              <a href="#order-form" className="btn-primary w-full text-lg">
                Order Now for {formatPrice(salePrice)}
              </a>
              <p className="mt-2 text-center text-xs text-ink-muted">
                Cash on Delivery. No advance payment required.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-ink">About this product</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{product.longDescription}</p>

            {product.specs?.length ? (
              <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((s, i) => (
                      <tr key={s.label} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                        <th className="w-1/3 px-4 py-3 text-left font-semibold text-ink">{s.label}</th>
                        <td className="px-4 py-3 text-ink-soft">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>

          <div>
            <OrderForm product={product} />
          </div>
        </div>
      </div>

      <TrustRow />

      <StickyMobileBar product={product} />
    </>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-1 h-4 w-4 shrink-0 text-brand">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}
