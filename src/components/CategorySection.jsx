import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/CategorySection.css';
import CategoryCard from './CategoryCard';

const CategorySection = ({ categories, onViewAll }) => {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Categories</h2>
        <button className="view-all" onClick={onViewAll}>
          View All <ArrowRight size={16} />
        </button>
      </div>
      <div className="categories-grid">
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;