import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import MetaPixel from "@/components/MetaPixel";
import site from "@/config/site";

export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${site.storeName} | ${site.tagline}`,
    template: `%s | ${site.storeName}`,
  },
  description: site.tagline,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: site.storeName,
    description: site.tagline,
    siteName: site.storeName,
    type: "website",
    images: ["/og-default.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.storeName,
    description: site.tagline,
    images: ["/og-default.svg"],
  },
};

export const viewport = {
  themeColor: site.brandColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <MetaPixel />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
