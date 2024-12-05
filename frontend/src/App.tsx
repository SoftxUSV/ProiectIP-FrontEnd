import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LogInPage';
import Homepage from './Pages/Homepage/Homepage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/homepage" element={<Homepage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
