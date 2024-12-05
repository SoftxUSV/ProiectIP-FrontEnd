import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LogInPage';
import './App.css';
import { Exams } from './Pages/exams';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path='/exams' element={<Exams />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
