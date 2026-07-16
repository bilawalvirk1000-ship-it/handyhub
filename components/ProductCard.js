import Link from "next/link";
import { formatPrice, savings } from "@/lib/format";

export default function ProductCard({ product }) {
  const { amount, percent } = savings(product.price, product.salePrice);
  const image = product.images?.[0] || "/og-default.svg";

  return (
    <div className="card flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg">
      <Link href={`/product/${product.slug}`} className="relative block aspect-square overflow-hidden bg-slate-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {amount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink shadow">
            Save {formatPrice(amount)}
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow">
          Launch offer
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <Link href={`/product/${product.slug}`} className="text-lg font-semibold text-ink hover:text-brand">
          {product.name}
        </Link>
        <p className="text-sm text-ink-muted line-clamp-2">{product.shortDesc}</p>

        <div className="mt-auto flex items-end gap-3">
          {product.salePrice && product.salePrice < product.price ? (
            <>
              <span className="text-2xl font-extrabold text-ink">{formatPrice(product.salePrice)}</span>
              <span className="text-sm text-ink-muted line-through">{formatPrice(product.price)}</span>
              {percent > 0 && (
                <span className="ml-auto rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                  {percent}% off
                </span>
              )}
            </>
          ) : (
            <span className="text-2xl font-extrabold text-ink">{formatPrice(product.price)}</span>
          )}
        </div>

        <Link href={`/product/${product.slug}`} className="btn-primary w-full">
          Order Now
        </Link>
        <p className="text-center text-xs text-ink-muted">Cash on Delivery, pay when it arrives.</p>
      </div>
    </div>
  );
}
