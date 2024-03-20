import { BrowserRouter, Router, Switch, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { GivePage } from './pages/GivePage';
import { BeliefPage } from './pages/BeliefPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/give" element={<GivePage />} />
        <Route path="/beliefs" element={<BeliefPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
