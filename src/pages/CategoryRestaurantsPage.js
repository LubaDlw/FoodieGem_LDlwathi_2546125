import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';
import BottomNavigation from '../components/BottomNavigation';

import '../styles/CategoryRestaurantsPage.css';

const CategoryRestaurantsPage = () => {
  const { categoryName } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "restaurants"));
        const allRestaurants = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Updated filtering logic for array-based categories
        const filtered = allRestaurants.filter(
          r =>
            Array.isArray(r.category) &&
            r.category.some(cat => cat.toLowerCase() === categoryName.toLowerCase())
        );

        setRestaurants(filtered);
      } catch (error) {
        console.error("Error fetching category restaurants:", error);
      }
    };

    fetchRestaurants();
  }, [categoryName]);

  const handleNavigate = (tab) => {
    if (tab === 'home') navigate('/home');
    else if (tab === 'explore') navigate('/explore');
    else if (tab === 'saved') navigate('/saved');
    else if (tab === 'profile') navigate('/profile');
  };

  return (
    <div className="category-restaurants-page">
      <Header title={categoryName} />

      <div className="category-header">
        <h1>{categoryName} Restaurants</h1>
      </div>

      <div className="restaurants-grid">
        {restaurants.length > 0 ? (
          restaurants.map(r => (
            <RestaurantCard
              key={r.id}
              name={r.name}
              rating={r.rating}
              location={r.location}
              image={r.image}
              onClick={() => navigate(`/restaurant/${r.id}`)}
            />
          ))
        ) : (
          <p className="no-results">No restaurants found in this category.</p>
        )}
      </div>

      <BottomNavigation onNavigate={handleNavigate} activeTab="explore" />
    </div>
  );
};

export default CategoryRestaurantsPage;
