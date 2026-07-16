import Link from "next/link";
import site from "@/config/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.logo} alt={`${site.storeName} logo`} className="h-11 w-11 rounded-full object-contain" />
          <span className="text-lg font-bold text-ink">{site.storeName}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-soft sm:flex">
          <Link href="/" className="hover:text-brand">Home</Link>
          <Link href="/#products" className="hover:text-brand">Products</Link>
          <Link href="/shipping" className="hover:text-brand">Shipping</Link>
          <Link href="/contact" className="hover:text-brand">Contact</Link>
        </nav>
        <a
          href={`https://wa.me/${site.whatsappNumber}`}
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.55c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.63.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.68-1.56-1.96-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.09-.23-.55-.46-.47-.63-.48-.16-.01-.35-.01-.54-.01-.19 0-.49.07-.75.35s-1 .98-1 2.38 1.03 2.76 1.17 2.95c.14.19 2.02 3.08 4.9 4.32.69.3 1.22.48 1.63.61.68.22 1.31.19 1.8.12.55-.08 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.11-.26-.19-.54-.32zM16.03 4C9.4 4 4 9.38 4 16c0 2.13.56 4.21 1.62 6.04L4 28l6.1-1.6A11.94 11.94 0 0 0 16.03 28C22.65 28 28 22.62 28 16S22.65 4 16.03 4zm0 21.77c-1.87 0-3.7-.5-5.3-1.44l-.38-.22-3.62.95.97-3.53-.25-.36A9.7 9.7 0 0 1 6.28 16C6.28 10.63 10.66 6.25 16.03 6.25c2.61 0 5.06 1.02 6.9 2.86a9.7 9.7 0 0 1 2.86 6.9c0 5.37-4.38 9.76-9.76 9.76z"/>
    </svg>
  );
}
