// DashboardPage.js

import React, { useState, useEffect } from 'react';
import dashboard from '../assets/images/dashboard.png';
import '../styles/DashboardPage.css';

function DashboardPage() {  // Corrigindo o nome da função
  const [userProgress, setUserProgress] = useState({
    modulesCompleted: 0,
    quizzesPassed: 0
  });

  // Você pode substituir esse useEffect por uma chamada à sua API para obter o progresso real do usuário.
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
            <li><i className="module-icon"></i> Módulo 1: Introdução à Energia Verde</li>
            <li><i className="module-icon"></i> Módulo 2: Energia Solar</li>
            <li><i className="module-icon"></i> Módulo 3: Energia Eólica</li>
            <li><i className="module-icon"></i> Módulo 4: Energia Hidroelétrica</li>
            <li><i className="module-icon"></i> Módulo 5: Biomassa e Biogás</li>
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

export default DashboardPage;  // Corrigindo o export para DashboardPage
