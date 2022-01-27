import React from 'react';
import './app.scss';
import { Route, Routes} from 'react-router-dom';
import ChartsPage from './pages/ChartsPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header />
      <Routes>
        <Route path="/"  /> 
        <Route path="/charts" element={<ChartsPage />} />
      </Routes>
    </div>
  );
}

export default App;
