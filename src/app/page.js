// src/pages/HomePage.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      <main className="bg-gray-100">
        {/* Hero Section */}
        <section className="hero bg-cover bg-center text-center text-white py-20" style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
          <h1 className="text-4xl md:text-5xl font-bold">Best Elevator Company in India</h1>
          <p className="mt-4 text-lg">We are India's leading company for elevator and escalator manufacturing...</p>
        </section>

        {/* Elevators Section */}
        <section className="py-16">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Our Elevators</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img src="capsule.jpg" alt="Capsule Elevator" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">Capsule Elevator</h3>
              <p className="mt-2 text-gray-600">High-end transportation solution...</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Read More</button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img src="stretcher.jpg" alt="Stretcher Elevator" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">Stretcher Elevator</h3>
              <p className="mt-2 text-gray-600">Designed for hospitals...</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Read More</button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img src="dumbwaiter.jpg" alt="Dumbwaiter Lift" className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">Dumbwaiter Lift</h3>
              <p className="mt-2 text-gray-600">Perfect for restaurants...</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Read More</button>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-gray-800 text-white py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg max-w-2xl mx-auto">Our vision is to ensure utmost client delight...</p>
        </section>
      </main>
      
    </div>
  );
}
