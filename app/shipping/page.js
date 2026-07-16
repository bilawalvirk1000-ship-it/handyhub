import PolicyPage from "@/components/PolicyPage";
import site from "@/config/site";

export const metadata = {
  title: "Shipping Policy",
  description: `Shipping and delivery information for ${site.storeName}. Cash on Delivery across Pakistan.`,
};

export default function ShippingPage() {
  return (
    <PolicyPage title="Shipping Policy" updated="July 2025">
      <p>
        We deliver orders across Pakistan through trusted courier partners. All orders are shipped on a Cash on Delivery basis unless
        agreed otherwise on WhatsApp.
      </p>

      <h2>Delivery time</h2>
      <ul>
        <li>Major cities (Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar): 2 to 4 working days.</li>
        <li>Other cities and towns: 3 to 5 working days.</li>
        <li>Remote areas may take up to 7 working days.</li>
      </ul>

      <h2>Delivery charges</h2>
      <p>
        Standard delivery charges apply and will be confirmed on WhatsApp before dispatch. There are no hidden fees. You pay the total
        amount in cash to the courier when your parcel arrives.
      </p>

      <h2>Order confirmation</h2>
      <p>
        After you place an order through our website form, we will contact you on WhatsApp or by phone to confirm your address and
        quantity. Unconfirmed orders are held for up to 24 hours before being cancelled.
      </p>

      <h2>Tracking your order</h2>
      <p>
        Once dispatched, we will share your courier tracking number on WhatsApp so you can follow your parcel until it reaches you.
      </p>

      <h2>Failed or refused deliveries</h2>
      <p>
        If the courier cannot reach you or the parcel is refused at the door, please let us know on WhatsApp so we can arrange a
        re-attempt. Repeatedly failed or refused deliveries without notice may result in future orders being placed on hold.
      </p>

      <h2>Contact</h2>
      <p>
        For any shipping question, message us on{" "}
        <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>{" "}
        or email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </PolicyPage>
  );
}
