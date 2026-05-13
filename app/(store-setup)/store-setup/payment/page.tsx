// app/(store-setup)/store-setup/payment/page.tsx
import PaymentStep from "@/src/components/dashboard/store-setup/PaymentStep";

export const metadata = { title: "Payment — Store Setup" };

export default function PaymentPage() {
  return <PaymentStep />;
}