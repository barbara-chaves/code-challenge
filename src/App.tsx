import React from 'react';
import './App.css';
import { Link, Route, Routes} from 'react-router-dom';
import Charts from './components/containers/Charts';

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <Link to="/charts">Charts</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </div>
  );
}

export default App;
