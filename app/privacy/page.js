import PolicyPage from "@/components/PolicyPage";
import site from "@/config/site";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${site.storeName} collects and uses your information.`,
};

export default function PrivacyPage() {
  return (
    <PolicyPage title="Privacy Policy" updated="July 2025">
      <p>
        This policy explains what information {site.storeName} collects when you place an order, how we use it, and how we protect it.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Your name, phone number, city, and full delivery address, which you enter in our order form.</li>
        <li>Basic order details such as the product you selected, the quantity, and the order date.</li>
        <li>Basic technical information from your browser (for analytics and Meta Pixel, if enabled).</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To confirm and deliver your order.</li>
        <li>To communicate with you on WhatsApp, by phone, or by SMS about your order.</li>
        <li>To improve our products, our website, and our advertising.</li>
      </ul>

      <h2>Who we share it with</h2>
      <ul>
        <li>Courier partners, so they can deliver your parcel.</li>
        <li>Tools we use to run the store, such as WhatsApp and, optionally, Google Sheets for internal order tracking and Meta Pixel for advertising analytics.</li>
        <li>We do not sell your personal information to third parties.</li>
      </ul>

      <h2>Data retention</h2>
      <p>
        We keep basic order records for as long as we need them for accounting, customer support, and to comply with local law. You can
        ask us to delete your details at any time.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can ask us to update or delete your personal information by contacting us on WhatsApp or email.</li>
        <li>You can opt out of marketing messages by replying STOP to any WhatsApp or SMS from us.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        For any privacy question, message us on{" "}
        <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>{" "}
        or email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </PolicyPage>
  );
}
