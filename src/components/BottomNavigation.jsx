import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Compass, Bookmark, User } from 'lucide-react';
import '../styles/BottomNavigation.css';

const BottomNavigation = ({ onNavigate, activeTab = 'home' }) => {
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    if (onNavigate) {
      onNavigate(tab);
    } else {
      // Default navigation behavior
      switch (tab) {
        case 'home':
          navigate('/home');
          break;
        case 'explore':
          navigate('/explore');
          break;
        case 'saved':
          navigate('/saved');
          break;
        case 'profile':
          navigate('/profile');
          break;
        default:
          navigate('/home');
      }
    }
  };

  return (
    <nav className="bottom-nav">
      <div
        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => handleTabClick('home')}
      >
        <Home size={20} />
        <span>Home</span>
      </div>
      <div
        className={`nav-item ${activeTab === 'explore' ? 'active' : ''}`}
        onClick={() => handleTabClick('explore')}
      >
        <Compass size={20} />
        <span>Explore</span>
      </div>
      <div
        className={`nav-item ${activeTab === 'saved' ? 'active' : ''}`}
        onClick={() => handleTabClick('saved')}
      >
        <Bookmark size={20} />
        <span>Saved</span>
      </div>
      <div
        className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => handleTabClick('profile')}
      >
        <User size={20} />
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default BottomNavigation;