import PolicyPage from "@/components/PolicyPage";
import site from "@/config/site";

export const metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.storeName}.`,
};

export default function TermsPage() {
  return (
    <PolicyPage title="Terms of Service" updated="July 2025">
      <p>
        By using {site.storeName} and placing an order, you agree to the terms below. Please read them carefully.
      </p>

      <h2>Orders</h2>
      <ul>
        <li>All orders are subject to acceptance and stock availability.</li>
        <li>We reserve the right to cancel or refuse any order if the shipping address is incomplete, phone contact fails, or fraud is suspected.</li>
        <li>Prices and offers may change at any time. The price shown at the time of order is the price you pay.</li>
      </ul>

      <h2>Cash on Delivery</h2>
      <ul>
        <li>Payment is collected by the courier in cash at the time of delivery.</li>
        <li>Please keep the exact amount ready to help the courier.</li>
        <li>Repeatedly refusing accepted orders may lead to us placing your number on hold for future orders.</li>
      </ul>

      <h2>Product information</h2>
      <p>
        We do our best to describe products accurately. Minor variations in colour, packaging, or accessories can occur between
        production batches. Product images are for illustration only.
      </p>

      <h2>Warranty and liability</h2>
      <p>
        Unless clearly stated in the product listing, our products do not carry an extended warranty. Our liability is limited to the
        amount you paid for the product. We are not liable for indirect or consequential loss.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not misuse the website, order form, or WhatsApp channel.</li>
        <li>Do not submit false names, phone numbers, or addresses.</li>
      </ul>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the Islamic Republic of Pakistan. Any disputes will be handled by the courts of{" "}
        {site.contactCity}.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these terms, message us on{" "}
        <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>{" "}
        or email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </PolicyPage>
  );
}
