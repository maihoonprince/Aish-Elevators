// src/app/services/page.js
export default function Services() {
    const servicesData = [
      { title: "The 7 Zero", description: "Residential elevators with minimal construction requirements." },
      { title: "Capsule Elevator", description: "Aesthetic elevators with glass panels for enhanced building appeal." },
      { title: "Stretcher Elevator", description: "Specialized hospital elevators for transporting beds and equipment." },
      { title: "Dumbwaiter Lift", description: "Small lifts for transporting food and goods in restaurants and hotels." },
    ];
  
    return (
      <main style={{ padding: '2rem', textAlign: 'center', color: '#333', backgroundColor: '#f9f9f9' }}>
        <h1 style={{ color: '#0070f3', fontSize: '2rem', marginBottom: '1rem' }}>Our Products and Services</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          {servicesData.map((service, index) => (
            <div key={index} style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', width: '80%', maxWidth: '600px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ color: '#333', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{service.title}</h3>
              <p style={{ color: '#555', fontSize: '1rem' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  