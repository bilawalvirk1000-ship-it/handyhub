import site from "@/config/site";

export default function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
        "Hi, I would like to know more about your products."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-lg ring-4 ring-emerald-500/20 transition hover:bg-emerald-600 sm:bottom-6"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.55c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.63.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.68-1.56-1.96-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.09-.23-.55-.46-.47-.63-.48-.16-.01-.35-.01-.54-.01-.19 0-.49.07-.75.35s-1 .98-1 2.38 1.03 2.76 1.17 2.95c.14.19 2.02 3.08 4.9 4.32.69.3 1.22.48 1.63.61.68.22 1.31.19 1.8.12.55-.08 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.11-.26-.19-.54-.32zM16.03 4C9.4 4 4 9.38 4 16c0 2.13.56 4.21 1.62 6.04L4 28l6.1-1.6A11.94 11.94 0 0 0 16.03 28C22.65 28 28 22.62 28 16S22.65 4 16.03 4z"/>
      </svg>
    </a>
  );
}
