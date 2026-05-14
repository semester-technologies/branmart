// app/(auth)/sign-in/page.tsx
import SignInForm from "@/src/components/auth/SignInForm";

export const metadata = { title: "Login" };

export default function SignInPage() {
  return <SignInForm />;
}