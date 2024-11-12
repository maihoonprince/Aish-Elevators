import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">HYBON</div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-500">Home</Link>
          <Link href="/about" className="hover:text-yellow-500">Our Company</Link>
          <Link href="/services" className="hover:text-yellow-500">Products & Services</Link>
          <Link href="/aesthetics" className="hover:text-yellow-500">Aesthetics & Fixtures</Link>
          <Link href="/testimonials" className="hover:text-yellow-500">Testimonials</Link>
          <Link href="/career" className="hover:text-yellow-500">Career</Link>
          <Link href="/contact" className="hover:text-yellow-500">Contact Us</Link>
        </nav>
        <button className="md:hidden text-white">Menu</button>
      </div>
    </header>
  );
}
