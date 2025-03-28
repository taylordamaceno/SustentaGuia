"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/DicasPage.css"

function DicasPage() {
  const [dicas, setDicas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDicas = async () => {
      setLoading(true)
      try {
        const response = await fetch("http://localhost:3001/api/dicas")

        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        setDicas(data)
        setError(null)
      } catch (error) {
        console.error("Erro ao buscar dicas:", error)
        setError("Não foi possível carregar as dicas. Por favor, tente novamente mais tarde.")
        // Fallback para dados de exemplo se a API falhar
        setDicas([
          { dica: "Reduza o consumo de energia desligando aparelhos que não estão em uso." },
          { dica: "Utilize lâmpadas LED, que consomem menos energia e duram mais." },
          { dica: "Economize água tomando banhos mais curtos e fechando a torneira ao escovar os dentes." },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchDicas()
  }, [])

  return (
    <div className="dicas-page-container">
      <header className="dicas-page-header">
        <button onClick={() => navigate(-1)} className="btn-voltar">
          ← Voltar
        </button>
        <h1>Dicas de Sustentabilidade</h1>
      </header>

      {loading ? (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p>Carregando dicas...</p>
        </div>
      ) : error ? (
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            backgroundColor: "rgba(244, 67, 54, 0.1)",
            borderRadius: "8px",
            color: "#d32f2f",
          }}
        >
          <p>{error}</p>
        </div>
      ) : (
        <div className="dicas-grid">
          {dicas.length > 0 ? (
            dicas.map((dica, idx) => (
              <div key={idx} className="dica-card">
                <p>{dica.dica}</p>
              </div>
            ))
          ) : (
            <p className="no-dicas">Nenhuma dica encontrada.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default DicasPage

