// app/(auth)/reset-password/page.tsx
import ResetPasswordForm from "@/src/components/auth/ResetPasswordForm";
export const metadata = { title: "Reset Password" };
export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}