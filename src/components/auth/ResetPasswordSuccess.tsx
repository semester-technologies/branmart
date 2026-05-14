// src/components/auth/ResetPasswordSuccess.tsx

import Link from "next/link";
import { KeyRound } from "lucide-react";
import AuthTopBar from "./AuthTopBar";
import AuthRightPanel from "./AuthRightPanel";

export default function ResetPasswordSuccess() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex flex-col bg-white px-8 md:px-12 py-6 overflow-y-auto">
        <AuthTopBar />
        <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full text-center gap-5">

          <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
            <KeyRound size={24} className="text-green-500" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#241717] mb-2">Password Created</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              You have created a new password, login with your new password.
            </p>
          </div>

          <Link
            href="/sign-in"
            className="w-full flex items-center justify-center bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium py-3.5 rounded-xl transition-colors"
          >
            Login
          </Link>

        </div>
        <p className="text-center text-xs text-gray-400 mt-5">© 2026 Branmart. All rights reserved.</p>
      </div>
      <AuthRightPanel />
    </div>
  );
}