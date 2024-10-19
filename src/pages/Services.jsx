import React from 'react';
import '../styles/pages/Services.scss'; // Import the SCSS file

const servicesData = [
  {
    title: "The 7 Zero",
    description: `"The 7 Zero" elevators are residential lifts that have minimal construction requirements. They are often easier and quicker to install than traditional residential elevators.`,
    image: '/path/to/image1.jpg', // Replace with the correct path
  },
  {
    title: "Capsule Elevator",
    description: `Capsule elevators enhance the look and appeal of buildings. They are aesthetically designed and feature large glass viewing panels for optimum comfort.`,
    image: '/path/to/image2.jpg',
  },
  {
    title: "Stretcher Elevator",
    description: `The hospital elevator is designed to carry hospital beds and bulky equipment. It ensures smooth travel, energy efficiency, and precision for critical life-saving activities.`,
    image: '/path/to/image3.jpg',
  },
  {
    title: "Dumbwaiter Lift (Food Lift)",
    description: `Dumbwaiter lifts are used to transport food and small items efficiently across floors. They are perfect for restaurants and hotels.`,
    image: '/path/to/image4.jpg',
  },
];

const Services = () => {
  return (
    <div className="services">
      <h2>Our Products</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
