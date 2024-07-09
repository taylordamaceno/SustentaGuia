import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dashboard from '../assets/images/dashboard.png';
import '../styles/DashboardPage.css';

function DashboardPage() {
  const [userProgress, setUserProgress] = useState({
    modulesCompleted: 0,
    quizzesPassed: 0
  });

  useEffect(() => {
    // Exemplo: setUserProgress({ modulesCompleted: 3, quizzesPassed: 2 });
  }, []);

  return (
    <div className="DashboardPage">
      <header>
        <img src={dashboard} alt="Descrição da Imagem" className="dashboard-logo" />
        <h1>Dashboard</h1>
      </header>
      <main>
        <section>
          <h2>Módulos Introdutórios</h2>
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
          <p>Módulos concluídos: {userProgress.modulesCompleted} de 5</p>
          <p>Quizzes passados: {userProgress.quizzesPassed} de 5</p>
        </section>
      </main>
      <footer>
        <p>Copyright © 2023</p>
      </footer>
    </div>
  );
}

export default DashboardPage;