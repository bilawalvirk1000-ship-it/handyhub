// Single source of truth for the storefront.
// Edit these values and the entire site updates.
const site = {
  storeName: "HandyHub.PK",
  tagline: "Everyday items, made easy. Delivered to your door with Cash on Delivery.",
  whatsappNumber: "923090041407", // international format, no + or spaces
  contactEmail: "orders@handyhub.pk",
  contactPhone: "+92 309 0041407",
  contactCity: "Lahore",
  contactAddress: "Gulberg III, Lahore, Pakistan",
  instagramHandle: "handyhub.pk",
  sheetEndpoint: "https://script.google.com/macros/s/AKfycbxEvp3tteyWdJzwQd9F8drmVCP7B2-4A5dt-JwN6Rkgw0nHXsZ9bawNC5y702UEMVQNCA/exec", // Google Apps Script Web App URL for order logging
  metaPixelId: "", // Facebook / Meta Pixel ID
  currency: "Rs",
  deliveryFee: 200, // Cash on Delivery charges added at checkout
  deliveryNote: "Nationwide delivery in 2-5 days",
  brandColor: "#F97316",
  logo: "/logo.png",
};

export default site;
