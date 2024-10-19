import React from 'react';
import '../styles/pages/Home.scss';
import videoBG from "../assets/Videos/Home page banner 1.mp4";

const Home = () => {
  return (
    <div className="home">
      {/* Banner Section */}
      <div className="banner">
        <video width="100%" preload='auto' muted autoPlay loop src={videoBG} />
      </div>

      {/* Intro Section */}
      <section className="intro">
        <h1>Best Elevator Company in <span>India</span></h1>
        <p>We are India’s Leading Company for Elevator and Escalator Manufacturing, Installation, and Service.</p>
      </section>

      {/* Our Elevators Section */}
      <section className="elevators">
        <h2>Our Elevators</h2>
        <div className="carousel">
          {/* Elevator Item 1 */}
          <div className="elevator-card">
            <img src="/path/to/image1.jpg" alt="Home Lift Gearless" />
            <h3>Home Lift Gearless</h3>
            <p>
              Hybon Home Lifts are very effective solutions for row houses, pent houses, bungalows, duplexes, and villas, etc. Home Lifts require less space for overhead & pit other than the conventional elevators.
            </p>
            <button>Read More</button>
          </div>
          {/* Elevator Item 2 */}
          <div className="elevator-card">
            <img src="/path/to/image2.jpg" alt="Home Lift Hydraulic" />
            <h3>Home Lift Hydraulic</h3>
            <p>
              Home Lift Hydraulic: With the introduction of Soft Start & Stop feature, we make your ride absolutely jerk free & smooth.
            </p>
            <button>Read More</button>
          </div>
          {/* Elevator Item 3 */}
          <div className="elevator-card">
            <img src="/path/to/image3.jpg" alt="Automobile Elevator" />
            <h3>Automobile Elevator</h3>
            <p>
              Automobile Elevators for Residential or Commercial buildings, Hotels, Clubs, Bungalows, or Industrial Buildings depending upon the infrastructure.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </section>

      {/* Tech-Smart Space Section */}
      <section className="tech-smart">
        <h2>Want a Tech-Smart Space? Choose <span>Hybon!</span></h2>
        <div className="features">
          <div className="feature-card">
            <img src="/path/to/vision-icon.png" alt="Vision Icon" />
            <h3>Vision</h3>
            <p>Our vision is to ensure utmost client delight by providing a wide range of customised products & services with value for money and no compromise on quality.</p>
          </div>
          {/* Additional Feature Cards */}
        </div>
      </section>
    </div>
  );
};

export default Home;
