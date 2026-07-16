"use client";

import { useState } from "react";
import site from "@/config/site";
import { formatPrice } from "@/lib/format";

function generateOrderNumber() {
  // Human-friendly, no ambiguous chars (no 0/O/1/I).
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  return `HH-${code}`;
}

export default function OrderForm({ product }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    quantity: 1,
  });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState("details"); // details | payment | done
  const [submitting, setSubmitting] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const unitPrice = product.salePrice || product.price;
  const qty = Number(form.quantity) || 1;
  const subtotal = qty * unitPrice;
  const deliveryFee = Number(site.deliveryFee) || 0;
  const grandTotal = subtotal + deliveryFee;

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    const cleanedPhone = form.phone.replace(/[\s-]/g, "");
    if (!cleanedPhone) {
      e.phone = "Phone number is required.";
    } else if (!/^(\+?92|0)?3\d{9}$/.test(cleanedPhone)) {
      e.phone = "Enter a valid Pakistani mobile number, for example 03001234567.";
    }
    if (!form.address.trim() || form.address.trim().length < 10) {
      e.address = "Please enter your full delivery address.";
    }
    if (!form.city.trim()) e.city = "City is required.";
    if (!form.quantity || Number(form.quantity) < 1) e.quantity = "Quantity must be at least 1.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onProceed(e) {
    e.preventDefault();
    if (!validate()) return;
    setStep("payment");
    // Scroll to top of form on advance
    if (typeof window !== "undefined") {
      const el = document.getElementById("order-form");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  async function onConfirm() {
    setSubmitting(true);
    const number = generateOrderNumber();
    const payload = {
      orderNumber: number,
      createdAt: new Date().toISOString(),
      productSlug: product.slug,
      productName: product.name,
      unitPrice,
      quantity: qty,
      subtotal,
      deliveryFee,
      total: grandTotal,
      currency: site.currency,
      paymentMethod: "Cash on Delivery",
      customer: {
        name: form.name,
        phone: form.phone,
        address: form.address,
        city: form.city,
      },
    };

    if (site.sheetEndpoint) {
      try {
        await fetch(site.sheetEndpoint, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        });
      } catch (_) {
        // Silent failure; no retry (no backend).
      }
    }

    if (typeof window !== "undefined" && site.metaPixelId && window.fbq) {
      try {
        window.fbq("track", "Purchase", {
          content_name: product.name,
          value: grandTotal,
          currency: "PKR",
        });
      } catch (_) {}
    }

    setOrderNumber(number);
    setStep("done");
    setSubmitting(false);
  }

  // ---------- DONE STATE ----------
  if (step === "done") {
    const updateMessage =
      `Hi HandyHub, I would like an update on my order ${orderNumber} ` +
      `(${product.name}).`;
    const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(updateMessage)}`;
    return (
      <div id="order-form" className="card p-6 text-center sm:p-8">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-extrabold text-ink">Order confirmed</h3>
        <p className="mt-2 text-ink-soft">
          Thank you {form.name.split(" ")[0]}. We have received your order and will contact you shortly to confirm delivery.
        </p>

        <div className="mx-auto mt-5 max-w-sm rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Your order number</p>
          <p className="mt-1 font-mono text-2xl font-extrabold tracking-widest text-ink">{orderNumber}</p>
          <p className="mt-2 text-xs text-ink-muted">
            Please save this number. You will need it to check your order status.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            <WhatsAppIcon />
            Get order update on WhatsApp
          </a>
          <a href="/" className="btn-outline">
            Continue shopping
          </a>
        </div>

        <p className="mt-5 text-xs text-ink-muted">
          Payment: Cash on Delivery. Pay {formatPrice(grandTotal)} to the courier when your parcel arrives.
        </p>
      </div>
    );
  }

  // ---------- PAYMENT STEP ----------
  if (step === "payment") {
    return (
      <div id="order-form" className="card space-y-5 p-5 sm:p-6">
        <StepIndicator current={2} />

        <div>
          <button
            type="button"
            onClick={() => setStep("details")}
            className="mb-2 inline-flex items-center gap-1 text-sm font-medium text-ink-muted hover:text-brand"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M15 6l-6 6 6 6" />
            </svg>
            Back to details
          </button>
          <h3 className="text-xl font-bold text-ink">Review and confirm</h3>
          <p className="text-sm text-ink-muted">Choose your payment method and confirm your order.</p>
        </div>

        {/* Order summary */}
        <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Order summary</h4>
          <div className="mt-3 flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.images?.[0]} alt="" className="h-14 w-14 rounded-lg object-cover ring-1 ring-slate-200" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">{product.name}</p>
              <p className="text-xs text-ink-muted">Qty: {qty} × {formatPrice(unitPrice)}</p>
            </div>
            <span className="text-sm font-semibold text-ink">{formatPrice(subtotal)}</span>
          </div>

          <div className="mt-4 space-y-2 border-t border-slate-200 pt-3 text-sm">
            <Row label="Subtotal" value={formatPrice(subtotal)} />
            <Row
              label="Delivery fee (Cash on Delivery)"
              value={formatPrice(deliveryFee)}
              hint="Courier charges collected on delivery."
            />
            <div className="mt-2 flex items-baseline justify-between border-t border-slate-200 pt-3">
              <span className="text-base font-semibold text-ink">Grand total</span>
              <span className="text-2xl font-extrabold text-ink">{formatPrice(grandTotal)}</span>
            </div>
          </div>
        </div>

        {/* Delivery address summary */}
        <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Delivery details</h4>
            <button
              type="button"
              onClick={() => setStep("details")}
              className="text-xs font-semibold text-brand hover:underline"
            >
              Edit
            </button>
          </div>
          <div className="mt-2 space-y-1 text-sm text-ink-soft">
            <p className="font-semibold text-ink">{form.name}</p>
            <p>{form.phone}</p>
            <p>{form.address}, {form.city}</p>
          </div>
        </div>

        {/* Payment method */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Payment method</h4>
          <label className="mt-2 flex cursor-pointer items-start gap-3 rounded-2xl border-2 border-brand bg-brand/5 p-4">
            <input type="radio" name="payment" checked readOnly className="mt-1 h-4 w-4 accent-brand" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-ink">Cash on Delivery</span>
                <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase text-white">Selected</span>
              </div>
              <p className="mt-1 text-sm text-ink-muted">
                Pay {formatPrice(grandTotal)} in cash to the courier when your parcel arrives. No advance payment.
              </p>
            </div>
          </label>
          <p className="mt-2 text-xs text-ink-muted">
            More payment methods coming soon.
          </p>
        </div>

        <button
          type="button"
          onClick={onConfirm}
          disabled={submitting}
          className="btn-primary w-full text-lg"
        >
          {submitting ? "Confirming..." : `Confirm Order · ${formatPrice(grandTotal)}`}
        </button>
        <p className="text-center text-xs text-ink-muted">
          By confirming you agree to our{" "}
          <a href="/terms" className="underline">Terms</a> and{" "}
          <a href="/privacy" className="underline">Privacy</a>.
        </p>
      </div>
    );
  }

  // ---------- DETAILS STEP (default) ----------
  return (
    <form id="order-form" onSubmit={onProceed} className="card space-y-4 p-5 sm:p-6" noValidate>
      <StepIndicator current={1} />

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-ink">Delivery details</h3>
        <span className="hidden rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand sm:inline">
          Pay when it arrives
        </span>
      </div>
      <p className="text-sm text-ink-muted">
        Fill in your details. On the next step you will choose your payment method and confirm.
      </p>

      <div>
        <label className="field-label" htmlFor="name">Full name</label>
        <input
          id="name"
          className="field-input"
          placeholder="e.g. Ali Ahmed"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          autoComplete="name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="phone">Phone number</label>
          <input
            id="phone"
            className="field-input"
            placeholder="03001234567"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            autoComplete="tel"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label className="field-label" htmlFor="city">City</label>
          <input
            id="city"
            className="field-input"
            placeholder="e.g. Karachi"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
            autoComplete="address-level2"
          />
          {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="address">Full delivery address</label>
        <textarea
          id="address"
          className="field-input min-h-[96px]"
          placeholder="House, street, area, nearby landmark"
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
          autoComplete="street-address"
        />
        {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            min="1"
            max="20"
            className="field-input"
            value={form.quantity}
            onChange={(e) => update("quantity", e.target.value.replace(/[^0-9]/g, ""))}
          />
          {errors.quantity && <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>}
        </div>
        <div>
          <span className="field-label">Product</span>
          <div className="field-input bg-slate-50 text-ink-soft">{product.name}</div>
        </div>
      </div>

      <div className="rounded-xl bg-slate-50 p-4 text-sm text-ink-soft">
        <div className="flex items-center justify-between">
          <span>Unit price</span>
          <span className="font-semibold">{formatPrice(unitPrice)}</span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <span>Subtotal ({qty})</span>
          <span className="text-lg font-extrabold text-ink">{formatPrice(subtotal)}</span>
        </div>
        <p className="mt-2 text-xs text-ink-muted">
          A {formatPrice(deliveryFee)} Cash on Delivery fee will be added on the next step.
        </p>
      </div>

      <button type="submit" className="btn-primary w-full text-lg">
        Proceed to Payment Method
      </button>
    </form>
  );
}

function Row({ label, value, hint }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-ink-soft">{label}</p>
        {hint && <p className="text-xs text-ink-muted">{hint}</p>}
      </div>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}

function StepIndicator({ current }) {
  const steps = [
    { n: 1, label: "Details" },
    { n: 2, label: "Payment" },
    { n: 3, label: "Confirm" },
  ];
  return (
    <ol className="flex items-center gap-2 text-xs font-semibold">
      {steps.map((s, i) => {
        const done = s.n < current;
        const active = s.n === current;
        return (
          <li key={s.n} className="flex flex-1 items-center gap-2">
            <span
              className={`grid h-6 w-6 place-items-center rounded-full text-[11px] ${
                done
                  ? "bg-brand text-white"
                  : active
                  ? "bg-brand text-white"
                  : "bg-slate-200 text-slate-500"
              }`}
            >
              {done ? "✓" : s.n}
            </span>
            <span className={active ? "text-ink" : "text-ink-muted"}>{s.label}</span>
            {i < steps.length - 1 && <span className="mx-1 h-px flex-1 bg-slate-200" />}
          </li>
        );
      })}
    </ol>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.55c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.63.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.68-1.56-1.96-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.09-.23-.55-.46-.47-.63-.48-.16-.01-.35-.01-.54-.01-.19 0-.49.07-.75.35s-1 .98-1 2.38 1.03 2.76 1.17 2.95c.14.19 2.02 3.08 4.9 4.32.69.3 1.22.48 1.63.61.68.22 1.31.19 1.8.12.55-.08 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.11-.26-.19-.54-.32zM16.03 4C9.4 4 4 9.38 4 16c0 2.13.56 4.21 1.62 6.04L4 28l6.1-1.6A11.94 11.94 0 0 0 16.03 28C22.65 28 28 22.62 28 16S22.65 4 16.03 4z"/>
    </svg>
  );
}
