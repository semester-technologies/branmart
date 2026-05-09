// import Navbar from "@/src/components/layout/Navbar";
// import Footer from "@/src/components/layout/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Navbar /> */}
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </>
  );
}