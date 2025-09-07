"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Column 1 */}
    <div>
      <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
      <ul className="space-y-2">
        <li><a href="/" className="hover:text-white transition">Home</a></li>
        <li><a href="/about" className="hover:text-white transition">About</a></li>
        <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    {/* Column 2 */}
    <div>
      <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white transition">Link Building</a></li>
        <li><a href="#" className="hover:text-white transition">Guest Posting</a></li>
        <li><a href="#" className="hover:text-white transition">Seo</a></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white transition">Email us: orgshell@gmail.com</a></li>
        <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
        <li><a href="#" className="hover:text-white transition">Instagram</a></li>
      </ul>
    </div>
  </div>

  {/* Copyright */}
  <div className="text-center mt-10 text-sm text-gray-500">
    © {new Date().getFullYear()} YourCompany. All rights reserved.
  </div>
</footer>


  );
}
