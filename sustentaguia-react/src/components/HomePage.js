import React from 'react';
import logo from '../assets/images/sustentaguia.png';
import guiazinhoVerde from '../assets/images/guiazinhoverde.png';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="App">
      <header>
      <img src={logo} alt="Logotipo do aplicativo" className="logo-img" />
        <h1>Aprenda sobre energia verde </h1>
        <a href="/login">Comece Agora</a>
      </header>
      <div className="contentWrapper">
        <main>
          <section>
            <h2>O que é energia verde?</h2>
            <p>Energia verde é a energia produzida de fontes renováveis, como solar, eólica, hidroelétrica e biomassa.</p>
            <p>Essas fontes de energia são mais sustentáveis do que os combustíveis fósseis, que contribuem para as mudanças climáticas.</p>
          </section>
          <section>
            <h2>Por que aprender sobre energia verde?</h2>
            <p>Aprender sobre energia verde é importante para entender o futuro da energia e como podemos fazer a nossa parte para proteger o meio ambiente.</p>
            <p>Com esse conhecimento, você pode tomar decisões mais informadas sobre o uso de energia e apoiar o desenvolvimento de fontes de energia renováveis.</p>
          </section>
          <section>
            <h2>O que você vai aprender?</h2>
            <ul>
              <li>Conceitos básicos de energia verde</li>
              <li>Práticas de conservação de energia</li>
              <li>Fontes de energia renováveis</li>
              <li>Tecnologias de energia verde</li>
            </ul>
          </section>
        </main>
        <img src={guiazinhoVerde} alt="Imagem do Guiazinho Verde" className="guiazinhoImg" />
      </div>
      <footer>
        <p>Copyright © 2023</p>
      </footer>
    </div>
  );
}

export default HomePage;
