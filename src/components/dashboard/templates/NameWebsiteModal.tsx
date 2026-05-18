"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { type Template } from "./types";

interface NameWebsiteModalProps {
  template: Template | null;
  onClose: () => void;
  onCreate: (websiteName: string, template: Template) => void;
}

export default function NameWebsiteModal({
  template,
  onClose,
  onCreate,
}: NameWebsiteModalProps) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (!template) return;
    setName("");
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [template, onClose]);

  if (!template) return null;

  const trimmed = name.trim();
  const canCreate = trimmed.length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canCreate || !template) return;
    onCreate(trimmed, template);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />
      <form
        onSubmit={handleSubmit}
        role="dialog"
        aria-modal="true"
        aria-labelledby="name-website-title"
        className="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2
            id="name-website-title"
            className="text-base font-bold text-[#241717]"
          >
            Name Your Website
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1 text-gray-400 hover:text-[#241717] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Website name
          </label>
          <input
            type="text"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. My Awesome Business"
            className="w-full border border-[#cc3602] rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-[#241717] transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!canCreate}
            className="bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Create Website
          </button>
        </div>
      </form>
    </div>
  );
}
