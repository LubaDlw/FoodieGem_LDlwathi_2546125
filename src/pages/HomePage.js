import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useRestaurants } from '../context/RestaurantContext';

import '../styles/HomePage.css';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategorySection from '../components/CategorySection';
import RestaurantSection from '../components/RestaurantSection';
import SpecialsSection from '../components/SpecialsSection';
import BottomNavigation from '../components/BottomNavigation';

const HomePage = () => {
  const { restaurants, loading } = useRestaurants();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Fast Food", image: "../assets/fastfood.jpg" },
    { id: 2, name: "Seafood", image: "../assets/seafood.jpg" },
    { id: 3, name: "Italian", image: "../assets/gourmetCat.jpg" },
    { id: 4, name: "Asian", image: "../assets/asianfood.jpg" }
  ];

  const topRatedRestaurants = restaurants
    .filter(r => typeof r.rating === 'number')
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const promoRestaurants = restaurants.filter(r => r.promo && r.promo.trim() !== '');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleViewAllCategories = () => navigate('/explore');
  const handleViewAllPopular = () => navigate('/popular');
  const handleViewAllPromos = () => navigate('/promos');

  const handleNavigate = (tab) => {
    const paths = { explore: '/explore', saved: '/saved', profile: '/profile' };
    navigate(paths[tab]);
  };

  return (
    <div className="home-container">
      <Header userName={user?.name || 'User'} onLogout={handleLogout} />

      <section className="hero-section">
        <h1>Discover the best food around you</h1>
        <SearchBar placeholder="Search for restaurants, cuisines..." />
      </section>

      <CategorySection categories={categories} onViewAll={handleViewAllCategories} />

      {loading ? (
        <p>Loading restaurants...</p>
      ) : (
        <>
          <RestaurantSection
            title="Popular Restaurants"
            restaurants={topRatedRestaurants}
            onViewAll={handleViewAllPopular}
          />
          <SpecialsSection
            title="Specials & Promotions"
            restaurants={promoRestaurants}
            onViewAll={handleViewAllPromos}
          />
        </>
      )}

      <BottomNavigation onNavigate={handleNavigate} activeTab="home" />
    </div>
  );
};

export default HomePage;
