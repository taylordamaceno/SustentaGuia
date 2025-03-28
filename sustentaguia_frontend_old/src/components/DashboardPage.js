import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dashboard from '../assets/images/dashboard.png';
import '../styles/DashboardPage.css';

function DashboardPage() {
  const [userProgress, setUserProgress] = useState({
    modulesCompleted: 0,
    quizzesPassed: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Exemplo de chamada para carregar progresso do usuário
    const fetchUserProgress = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3001/api/userProgress', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setUserProgress(data);
      } catch (error) {
        console.error('Erro ao carregar progresso do usuário:', error);
      }
    };

    fetchUserProgress();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token do armazenamento local
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div className="DashboardPage">
      <header>
        <img src={dashboard} alt="Descrição da Imagem" className="dashboard-logo" />
        <h1>Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </header>
      <main>
        <section>
          <h2>Módulos</h2>
          <ul className="modules-list">
            <li><Link to="/module/1"><i className="module-icon"></i> Módulo 1: Introdução à Energia Verde</Link></li>
            <li><Link to="/module/2"><i className="module-icon"></i> Módulo 2: Energia Solar</Link></li>
            <li><Link to="/module/3"><i className="module-icon"></i> Módulo 3: Energia Eólica</Link></li>
            <li><Link to="/module/4"><i className="module-icon"></i> Módulo 4: Energia Hidroelétrica</Link></li>
            <li><Link to="/module/5"><i className="module-icon"></i> Módulo 5: Biomassa e Biogás</Link></li>
          </ul>
        </section>
        <section>
          <h2>Progresso</h2>
          <p>Módulos concluídos: {userProgress.modulesCompleted}</p>
          <p>Quizzes aprovados: {userProgress.quizzesPassed}</p>
        </section>
        <section>
          <h2>Dicas Ambientais</h2>
          <ul className="tips-list">
            <li><Link to="/dicas"><i className="tips-icon"></i> Veja Dicas Ambientais</Link></li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Copyright © 2024</p>
      </footer>
    </div>
  );
}

export default DashboardPage;