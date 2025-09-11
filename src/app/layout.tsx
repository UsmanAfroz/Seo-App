// app/layout.tsx
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Build Linkly",
  description: "SEO backlinks & services website",
};

// ✅ critical for mobile responsiveness
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* full-height layout with sticky footer behavior */}
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        {/* Fixed or sticky nav sits above content */}
        <Navbar />

        {/* Give space for a fixed navbar; adjust if your nav height differs */}
        <main className="flex-1 pt-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
