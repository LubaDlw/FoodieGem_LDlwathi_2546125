import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/RestaurantSection.css';
import SpecialsCard from './SpecialsCard';

const SpecialsSection = ({ restaurants }) => {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Specials and Promo's</h2>
        <button className="view-all">
          View All <ArrowRight size={16} />
        </button>
      </div>
      <div className="restaurants-grid">
        {restaurants.map((restaurant) => (
          <SpecialsCard
            key={restaurant.id}
            name={restaurant.name}
            rating={restaurant.rating}
            location={restaurant.location}
            image={restaurant.image}
            promo={restaurant.promo}
            onClick={() => console.log(`Clicked on ${restaurant.name}`)} // You can replace with navigate if needed
          />
        ))}
      </div>
    </section>
  );
};

export default SpecialsSection;
