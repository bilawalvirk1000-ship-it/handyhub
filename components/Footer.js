import Link from "next/link";
import site from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-100 bg-slate-50">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.logo} alt={`${site.storeName} logo`} className="h-11 w-11 rounded-full object-contain" />
            <span className="text-lg font-bold text-ink">{site.storeName}</span>
          </div>
          <p className="mt-3 text-sm text-ink-muted">{site.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">Shop</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li><Link href="/" className="hover:text-brand">Home</Link></li>
            <li><Link href="/#products" className="hover:text-brand">All Products</Link></li>
            <li><Link href="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">Policies</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li><Link href="/shipping" className="hover:text-brand">Shipping</Link></li>
            <li><Link href="/refund-return" className="hover:text-brand">Refund and Return</Link></li>
            <li><Link href="/privacy" className="hover:text-brand">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-brand">Terms</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>{site.contactCity}, Pakistan</li>
            <li>
              <a href={`tel:${site.contactPhone.replace(/\s+/g, "")}`} className="hover:text-brand">
                {site.contactPhone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contactEmail}`} className="hover:text-brand">
                {site.contactEmail}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                WhatsApp us
              </a>
            </li>
            {site.instagramHandle && (
              <li>
                <a
                  href={`https://instagram.com/${site.instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  Instagram @{site.instagramHandle}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {site.storeName}. All rights reserved.</p>
          <p>Cash on Delivery across Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}
