"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import dashboard from "../assets/images/dashboard.png"
import "../styles/DashboardPage.css"

function DashboardPage() {
  const [userProgress, setUserProgress] = useState({
    modulesCompleted: 0,
    quizzesPassed: 0,
  })
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Exemplo de chamada para carregar progresso do usuário
    const fetchUserProgress = async () => {
      setLoading(true)
      try {
        const token = localStorage.getItem("token")
        if (!token) {
          navigate("/login")
          return
        }

        const response = await fetch("http://localhost:3001/api/userProgress", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error("Falha ao carregar dados")
        }

        const data = await response.json()
        setUserProgress(data)
      } catch (error) {
        console.error("Erro ao carregar progresso do usuário:", error)
        // Fallback para dados de exemplo se a API falhar
        setUserProgress({
          modulesCompleted: 0,
          quizzesPassed: 0,
        })
      } finally {
        setLoading(false)
      }
    }

    fetchUserProgress()
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  const modules = [
    { id: 1, title: "Introdução à Energia Verde", icon: "🌱" },
    { id: 2, title: "Energia Solar", icon: "☀️" },
    { id: 3, title: "Energia Eólica", icon: "💨" },
    { id: 4, title: "Energia Hidroelétrica", icon: "💧" },
    { id: 5, title: "Biomassa e Biogás", icon: "🌿" },
  ]

  return (
    <div className="DashboardPage">
      <header>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={dashboard || "/placeholder.svg"} alt="Dashboard Logo" className="dashboard-logo" />
          <h1>Painel de Aprendizado</h1>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Sair
        </button>
      </header>

      <main>
        <section>
          <h2>Módulos de Aprendizado</h2>
          <ul className="modules-list">
            {modules.map((module) => (
              <li key={module.id}>
                <Link to={`/module/${module.id}`}>
                  <span className="module-icon">{module.icon}</span>
                  {module.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Seu Progresso</h2>
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <>
              <p>Módulos concluídos: {userProgress.modulesCompleted} de 5</p>
              <p>Quizzes aprovados: {userProgress.quizzesPassed}</p>
              <div
                style={{
                  height: "8px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "4px",
                  marginTop: "1rem",
                }}
              >
                <div
                  style={{
                    width: `${(userProgress.modulesCompleted / 5) * 100}%`,
                    height: "100%",
                    backgroundColor: "#4caf50",
                    borderRadius: "4px",
                    transition: "width 0.5s ease-in-out",
                  }}
                ></div>
              </div>
            </>
          )}
        </section>

        <section>
          <h2>Dicas Ambientais</h2>
          <p>Confira nossas dicas para um estilo de vida mais sustentável.</p>
          <ul className="tips-list">
            <li>
              <Link to="/dicas">
                <span className="tips-icon">🌍</span>
                Dicas de Sustentabilidade
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>SustentaGuia © {new Date().getFullYear()} - Todos os direitos reservados</p>
      </footer>
    </div>
  )
}

export default DashboardPage

