// app/(dashboard)/store-setup/layout.tsx

import StoreSetupTopBar from "@/src/components/dashboard/StoreSetupTopBar";

export default function StoreSetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <StoreSetupTopBar />
      <main className="flex-1">{children}</main>
    </div>
  );
}