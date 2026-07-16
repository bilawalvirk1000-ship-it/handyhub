// Product catalogue. Add or edit items here; the site rebuilds automatically.
const products = [
  {
    slug: "neck-fan",
    name: "Portable Neck Fan: Wearable Air Cooler",
    shortDesc:
      "Hands-free cooling that hangs around your neck. Bladeless, quiet, and USB rechargeable.",
    price: 1899,
    salePrice: 1399,
    images: [
      "/products/neck-fan-cover.png",
      "/products/neck-fan-2.png",
      "/products/neck-fan-4.png",
      "/products/neck-fan-3.png",
    ],
    benefits: [
      "Hands-free cooling that sits comfortably around the neck",
      "Bladeless design so it will not catch your hair",
      "USB rechargeable, no messy batteries",
      "3 adjustable speed settings",
      "Quiet motor you can wear at work or in class",
      "Lightweight body for all-day comfort",
    ],
    useCases: [
      "Daily commute",
      "Outdoor errands",
      "Kitchen and cooking",
      "Load-shedding hours",
      "Gym and workouts",
    ],
    specs: [
      { label: "Battery", value: "USB rechargeable" },
      { label: "Speed settings", value: "3" },
      { label: "Design", value: "Bladeless" },
      { label: "Wear style", value: "Around the neck, hands-free" },
      { label: "In the box", value: "1 x Neck fan, 1 x USB cable" },
    ],
    longDescription:
      "The Portable Neck Fan gives you personal airflow anywhere you go. Its bladeless design keeps hair safely away, the quiet motor lets you focus, and the rechargeable battery means you are never stuck plugging in. Ideal for Pakistani summers, commutes, load-shedding hours, kitchen work, or the gym.",
  },
  {
    slug: "facial-hair-remover",
    name: "Flawless Facial Hair Remover",
    shortDesc:
      "A gentle, painless way to remove unwanted facial hair at home in just a few minutes.",
    price: 1499,
    salePrice: 999,
    images: [
      "/products/facial-remover-cover.png",
      "/products/facial-remover-2.png",
      "/products/facial-remover-3.png",
      "/products/facial-remover-4.png",
    ],
    benefits: [
      "Painless removal of unwanted facial hair in minutes",
      "Designed to feel gentle on the skin",
      "Rechargeable, so no need to keep buying batteries",
      "Compact and travel-friendly",
      "Discreet size that fits in your purse",
      "No nicks, cuts, or redness like traditional shaving",
    ],
    useCases: [
      "Daily grooming routine",
      "Before makeup",
      "Travel bag essential",
      "Quick touch-ups at home",
    ],
    specs: [
      { label: "Power", value: "Rechargeable" },
      { label: "Use", value: "Facial hair removal" },
      { label: "Portability", value: "Compact, purse-friendly" },
      { label: "In the box", value: "1 x Hair remover, 1 x Charging cable" },
    ],
    longDescription:
      "This facial hair remover is designed for a quick, comfortable grooming routine at home. It removes unwanted facial hair in minutes without the sting of waxing or the risk of nicks from a razor. Compact enough to slip into any bag and rechargeable so it is always ready to go.",
  },
  {
    slug: "screwdriver-set",
    name: "24-in-1 Precision Screwdriver Set",
    shortDesc:
      "24 magnetic precision bits in one portable case. Fix phones, laptops, glasses, watches, and more.",
    price: 1899,
    salePrice: 899,
    images: [
      "/products/screwdriver-1.jpg",
      "/products/screwdriver-2.png",
      "/products/screwdriver-3.png",
      "/products/screwdriver-4.png",
    ],
    benefits: [
      "24 magnetic precision bits for almost any small screw",
      "Repairs phones, laptops, glasses, watches, and electronics",
      "Premium magnetic case keeps every bit organised",
      "Portable size that fits in a drawer or backpack",
      "Non-slip grip for controlled, precise work",
      "Great value replacement for a whole toolbox of tools",
    ],
    useCases: [
      "Mobile phone repair",
      "Laptop and PC servicing",
      "Eyeglass tightening",
      "Watch battery changes",
      "Home electronics",
    ],
    specs: [
      { label: "Bits included", value: "24 magnetic precision bits" },
      { label: "Handle", value: "Non-slip grip" },
      { label: "Case", value: "Magnetic organiser case" },
      { label: "Use", value: "Phones, laptops, glasses, watches, electronics" },
    ],
    longDescription:
      "A pocket-sized repair kit that punches far above its weight. Twenty-four magnetic precision bits cover almost every small screw you will meet at home, and the sturdy magnetic case keeps each bit exactly where you left it. The non-slip handle gives you the control you need for delicate work like phone repairs or eyeglass adjustments.",
  },
];

export default products;

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}
