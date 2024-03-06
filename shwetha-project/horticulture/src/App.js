import logo from './logo.svg';
import './App.css';

import NavBar from './components/common/NavBar';
import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homee from './pages/Homee';
import Cropsoil from './pages/Cropsoil';
import Create from './components/Create';
import Update from './components/Update';
import Weather from './pages/Weather';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/weather" element={<Weather />} />
        <Route path='/homee' element={<Homee />}></Route>
        <Route path='/Cropsoil' element={<Cropsoil />}></Route>
        <Route path='/create' element={<Create />}></Route>
      <Route path='/update/:id' element={<Update />}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
