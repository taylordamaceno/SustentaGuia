import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/DicasPage.css';

function DicasPage() {
  const [dicas, setDicas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/api/dicas') // Endpoint correto
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro na resposta do servidor');
        }
        return res.json();
      })
      .then((data) => setDicas(data))
      .catch((error) => console.error('Erro ao buscar dicas:', error));
  }, []);

  return (
    <div className="dicas-page-container">
      {/* Header com botão "Voltar" e título */}
      <header className="dicas-page-header">
        <button onClick={() => navigate(-1)} className="btn-voltar">← Voltar</button>
        <h1>Dicas de Sustentabilidade</h1>
      </header>

      {/* Grid de dicas */}
      <div className="dicas-grid">
        {dicas.length > 0 ? (
          dicas.map((dica, idx) => (
            <div key={idx} className="dica-card">
              <p>{dica.dica}</p> {/* Certifique-se de que está acessando a chave correta */}
            </div>
          ))
        ) : (
          <p className="no-dicas">Nenhuma dica encontrada.</p>
        )}
      </div>
    </div>
  );
}

export default DicasPage;
