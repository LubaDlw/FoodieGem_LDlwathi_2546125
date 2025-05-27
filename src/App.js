import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { RestaurantProvider } from './context/RestaurantContext'; // ✅ Import this
import PrivateRoute from './routes/PrivateRoute';

import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryRestaurantsPage from './pages/CategoryRestaurantsPage';
import WelcomeSplash from './pages/WelcomeSplash';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <RestaurantProvider> {/* ✅ Wrap app with RestaurantProvider */}
        <Router>
          <div className="App">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<SplashPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<LoginPage />} /> {/* Reuse login for now */}

              {/* Protected Routes */}
              <Route element={<PrivateRoute />}>
                <Route path="/welcome-splash" element={<WelcomeSplash />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/explore" element={<CategoriesPage />} />
                <Route path="/category/:categoryName" element={<CategoryRestaurantsPage />} />
              </Route>

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </RestaurantProvider>
    </AuthProvider>
  );
}

export default App;
