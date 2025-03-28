import { Link } from "react-router-dom"
import logo from "../assets/images/sustentaguia.png"
import guiazinhoVerde from "../assets/images/guiazinhoverde.png"
import "../styles/HomePage.css"

function HomePage() {
  return (
    <div className="App">
      <header>
        <img src={logo || "/placeholder.svg"} alt="Logotipo do SustentaGuia" className="logo-img" />
        <h1>Aprenda sobre energia verde e sustentabilidade</h1>
        <Link to="/login">Comece Agora</Link>
      </header>
      <div className="contentWrapper">
        <main>
          <section>
            <h2 className="greenText">O que é energia verde?</h2>
            <p>
              Energia verde é a energia produzida de fontes renováveis, como solar, eólica, hidroelétrica e biomassa.
              Essas fontes de energia são mais sustentáveis do que os combustíveis fósseis, que contribuem para as
              mudanças climáticas.
            </p>
          </section>
          <section>
            <h2 className="greenText">Por que aprender sobre energia verde?</h2>
            <p>
              Aprender sobre energia verde é importante para entender o futuro da energia e como podemos fazer a nossa
              parte para proteger o meio ambiente. Com esse conhecimento, você pode tomar decisões mais informadas sobre
              o uso de energia e apoiar o desenvolvimento de fontes de energia renováveis.
            </p>
          </section>
          <section>
            <h2 className="greenText">O que você vai aprender?</h2>
            <ul className="boldList">
              <li>Conceitos básicos de energia verde</li>
              <li>Práticas de conservação de energia</li>
              <li>Fontes de energia renováveis</li>
              <li>Tecnologias de energia verde</li>
            </ul>
          </section>
        </main>
        <img src={guiazinhoVerde || "/placeholder.svg"} alt="Mascote SustentaGuia" className="guiazinhoImg" />
      </div>
      <footer>
        <p>SustentaGuia © {new Date().getFullYear()} - Todos os direitos reservados</p>
      </footer>
    </div>
  )
}

export default HomePage

