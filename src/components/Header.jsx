import React from 'react';
import { LogOut } from 'lucide-react';
import '../styles/Header.css';

const Header = ({ userName, onLogout }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">FoodieGem</div>
        <div className="user-profile" onClick={onLogout}>
          <LogOut size={20} />
          <span className="logout-text">Logout</span>
        </div>
      </div>
      <div className="welcome-text">
        Welcome back, {userName}
      </div>
    </header>
  );
};

export default Header;