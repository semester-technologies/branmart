// app/(auth)/sign-up/page.tsx
import SignUpForm from "@/src/components/auth/SignUpForm";

export const metadata = { title: "Create Account" };

export default function SignUpPage() {
  return <SignUpForm />;
}