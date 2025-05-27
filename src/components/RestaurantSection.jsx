import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/RestaurantSection.css';
import RestaurantCard from './RestaurantCard';

const RestaurantSection = ({ restaurants, onViewAll }) => {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Popular Restaurants</h2>
        <button className="view-all" onClick={onViewAll}>
          View All <ArrowRight size={16} />
        </button>
      </div>

      <div className="restaurants-grid">
        {restaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            rating={restaurant.rating}
            location={restaurant.location}
            distance={restaurant.distance} // ✅ Pass distance (number)
            image={restaurant.image}
            onClick={() => {
              // Optional: navigate to restaurant detail page
              // navigate(`/restaurant/${restaurant.id}`)
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default RestaurantSection;
