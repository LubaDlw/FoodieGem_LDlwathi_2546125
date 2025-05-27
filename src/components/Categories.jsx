import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/Categories.css';

const Categories = ({ categories, onViewAll }) => (
  <section className="section">
    <div className="section-header">
      <h2>Categories</h2>
      <button className="view-all" onClick={onViewAll}>
        View All <ArrowRight size={16} />
      </button>
    </div>
    <div className="categories-grid">
      {categories.map(cat => (
        <div key={cat.id} className="category-card">
          <div className="category-image">
            <img src={cat.image} alt={cat.name} />
          </div>
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Categories;