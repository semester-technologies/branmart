"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function SignOutModal({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="signout-title"
        className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-8 flex flex-col items-center text-center gap-2"
      >
        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-2">
          <AlertCircle size={22} className="text-red-500" />
        </div>

        <h2
          id="signout-title"
          className="text-xl font-bold text-[#241717]"
        >
          Sign Out?
        </h2>
        <p className="text-sm text-gray-500">
          Are you sure you want to sign out your account?
        </p>

        <div className="flex items-center gap-3 mt-6 w-full">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-[#241717] hover:bg-gray-50 transition-colors"
          >
            No, Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition-colors"
          >
            Yes, Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
