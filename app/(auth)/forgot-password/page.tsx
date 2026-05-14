// app/(auth)/forgot-password/page.tsx
import ForgotPasswordForm from "@/src/components/auth/ForgotPasswordForm";
export const metadata = { title: "Forgot Password" };
export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}