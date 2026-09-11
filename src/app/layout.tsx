import type { Metadata } from "next";
import "@/src/app/globals.css";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

export const metadata: Metadata = {
  title: "Plumbinx – Plumbing Services & Home Maintenance",
  description: "Plumbinx is a premium Plumbing Services template for plumbing companies, contractors, home service providers, and maintenance businesses.",
  keywords: ["Plumbing", "Maintenance", "Home Services", "Emergency Plumber", "Water Heater Repair"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col justify-between bg-[#FAFBF9] antialiased">
        <Navbar />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
