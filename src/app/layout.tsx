// app/layout.tsx
import "./globals.css";
import Navbar from "./components/navbar"; // <-- make sure your Navbar is inside components/
import Footer from "./components/footer";
export const metadata = {
  title: "My Website",
  description: "SEO backlinks & services website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        {/* Navbar across all pages */}
        <Navbar />
        

        {/* Page Content */}
        <main className="pt-10"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
