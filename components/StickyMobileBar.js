"use client";

import { formatPrice, savings } from "@/lib/format";

export default function StickyMobileBar({ product }) {
  const { amount } = savings(product.price, product.salePrice);
  const price = product.salePrice || product.price;

  function scrollToForm(e) {
    e.preventDefault();
    const el = document.getElementById("order-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur sm:hidden">
      <div className="mx-auto flex max-w-page items-center gap-3">
        <div className="flex flex-col leading-tight">
          <span className="text-xl font-extrabold text-ink">{formatPrice(price)}</span>
          {amount > 0 && (
            <span className="text-[11px] text-ink-muted">
              <span className="line-through">{formatPrice(product.price)}</span>{" "}
              <span className="font-semibold text-emerald-700">Save {formatPrice(amount)}</span>
            </span>
          )}
        </div>
        <a href="#order-form" onClick={scrollToForm} className="btn-primary ml-auto flex-1 text-base">
          Order Now
        </a>
      </div>
    </div>
  );
}
