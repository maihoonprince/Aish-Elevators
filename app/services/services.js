// pages/services.js
import React from 'react';
// import styles from '../styles/Services.module.css';

const servicesData = [
  {
    title: "The 7 Zero",
    description: `"The 7 Zero" elevators are residential lifts that have minimal construction requirements. They are often easier and quicker to install than traditional residential elevators.`,
    image: '/images/elevator1.jpg', // Use placeholder images for now
  },
  {
    title: "Capsule Elevator",
    description: `Capsule elevators enhance the look and appeal of buildings. They are aesthetically designed and feature large glass viewing panels for optimum comfort.`,
    image: '/images/elevator2.jpg',
  },
  {
    title: "Stretcher Elevator",
    description: `The hospital elevator is designed to carry hospital beds and bulky equipment. It ensures smooth travel, energy efficiency, and precision for critical life-saving activities.`,
    image: '/images/elevator3.jpg',
  },
  {
    title: "Dumbwaiter Lift (Food Lift)",
    description: `Dumbwaiter lifts are used to transport food and small items efficiently across floors. They are perfect for restaurants and hotels.`,
    image: '/images/elevator4.jpg',
  },
];

const Services = () => {
  return (
    <div className={styles.services}>
      <h2 className={styles.title}>Our Products</h2>
      <div className={styles.servicesList}>
        {servicesData.map((service, index) => (
          <div className={styles.serviceItem} key={index}>
            <img src={service.image} alt={service.title} className={styles.serviceImage} />
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <a href="#" className={styles.readMore}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
