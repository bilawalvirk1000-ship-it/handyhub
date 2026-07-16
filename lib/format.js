import site from "@/config/site";

export function formatPrice(amount) {
  const n = Number(amount || 0);
  return `${site.currency} ${n.toLocaleString("en-PK")}`;
}

export function savings(price, salePrice) {
  const amount = Math.max(0, Number(price) - Number(salePrice));
  const percent = price > 0 ? Math.round((amount / price) * 100) : 0;
  return { amount, percent };
}
