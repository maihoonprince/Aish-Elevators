import Link from 'next/link';

export default function Footer() {
    return (
      <footer className="bg-black text-white p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-yellow-500 font-bold">About HYBON</h4>
            <p className="mt-2 text-gray-400">
              Hybon Elevators and Escalators Pvt. Ltd. is one of the world's leading quality assured elevator companies...
            </p>
          </div>
          <div>
            <h4 className="text-yellow-500 font-bold">Links</h4>
            <ul className="mt-2 space-y-2">
              {/* <li><Link href="/about"><a className="hover:text-yellow-500">About Us</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-yellow-500">Contact Us</a></Link></li>
              <li><Link href="/services"><a className="hover:text-yellow-500">Products & Services</a></Link></li>
              <li><Link href="/privacy"><a className="hover:text-yellow-500">Privacy Policy</a></Link></li> */}

              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/services">Products & Services</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-500 font-bold">Contact</h4>
            <p className="mt-2 text-gray-400">Enquiries: 011-40414441</p>
            <p className="text-gray-400">Sales: +91 9319829268</p>
            <p className="text-gray-400">Email: sales@hybon.in</p>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-8">&copy; 2024 Hybon Elevators and Escalators Pvt. Ltd.</p>
      </footer>
    );
}
