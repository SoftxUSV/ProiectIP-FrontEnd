import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LogInPage';
import Homepage from './Pages/Homepage/Homepage';
import Facultati from './Pages/Facultati/Facultati';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/facultati" element={<Facultati/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
