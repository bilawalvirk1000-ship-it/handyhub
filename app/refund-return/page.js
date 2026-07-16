import PolicyPage from "@/components/PolicyPage";
import site from "@/config/site";

export const metadata = {
  title: "Refund and Return Policy",
  description: `Refund and return policy for ${site.storeName}. Fair returns on Cash on Delivery orders across Pakistan.`,
};

export default function RefundReturnPage() {
  return (
    <PolicyPage title="Refund and Return Policy" updated="July 2025">
      <p>
        We want you to be happy with every order. If something is not right, please contact us within the timelines below so we can help.
      </p>

      <h2>Return window</h2>
      <ul>
        <li>You can request a return within 3 days of delivery.</li>
        <li>The product must be unused, in original condition, and in its original packaging with all accessories included.</li>
        <li>To start a return, message us on WhatsApp with your order details and a short video or photo of the issue.</li>
      </ul>

      <h2>What we accept</h2>
      <ul>
        <li>Wrong product delivered.</li>
        <li>Damaged in transit or dead on arrival.</li>
        <li>Manufacturing defect that appears within the return window.</li>
      </ul>

      <h2>What we cannot accept</h2>
      <ul>
        <li>Used products or products with signs of wear.</li>
        <li>Personal care items that have been opened for hygiene reasons.</li>
        <li>Damage caused by drops, water, or misuse.</li>
        <li>Requests made after the return window has closed.</li>
      </ul>

      <h2>Refunds</h2>
      <p>
        Since orders are placed on Cash on Delivery, refunds are processed by bank transfer, EasyPaisa, or JazzCash once the returned
        parcel reaches us and passes a short quality check. Refunds usually complete within 3 to 5 working days after the item is
        received.
      </p>

      <h2>Return shipping</h2>
      <p>
        For wrong, damaged, or defective items, we cover the return shipping cost. For a change of mind, the customer covers the return
        shipping.
      </p>

      <h2>How to request a return</h2>
      <p>
        Message us on{" "}
        <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>{" "}
        or email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> with your name, order date, and the reason for return.
        We will guide you through the next steps.
      </p>
    </PolicyPage>
  );
}
