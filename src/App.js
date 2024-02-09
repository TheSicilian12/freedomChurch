import { BrowserRouter, Router, Switch, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { NewPage } from './pages/NewPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
