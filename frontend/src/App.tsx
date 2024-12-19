import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './Pages/LogInPage';
import Homepage from './Pages/Homepage/Homepage';
import Navbar from './Components/NavBar/navbar';
import FacultatiPage from './Pages/FacultatiPage/FacultatiPage';
import Header from './Components/Header/Header';
import CalendarPage from './Pages/Calendar/CalendarPage';
import './App.css';

function App() {
  const NavbarWithVisibility = () => {
    const location = useLocation();
    const hideNavbarPaths = ["/", "/login"];
    return hideNavbarPaths.includes(location.pathname) ? null : <Navbar />;
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* Header at the top */}
        <Header />
        
        {/* Navbar below the header */}
        <NavbarWithVisibility />
        
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/facultati" element={<FacultatiPage />} />
          <Route path="/calendar" element={<CalendarPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
