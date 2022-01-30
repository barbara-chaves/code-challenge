import React from 'react';
import './app.scss';
import { Route, Routes} from 'react-router-dom';
import ChartsPage from './pages/ChartsPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
     <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/charts" element={<ChartsPage />} />
      </Routes>
    </div>
  );
}

export default App;
