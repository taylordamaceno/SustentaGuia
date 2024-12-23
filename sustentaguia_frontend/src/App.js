import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import ModuleContent from './components/ModuleContent';
import DicasPage from './components/DicasPage'; // Importação do novo componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/module/:id" element={<ModuleContent />} />
        <Route path="/dicas" element={<DicasPage />} /> {/* Nova rota para Dicas Ambientais */}
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;