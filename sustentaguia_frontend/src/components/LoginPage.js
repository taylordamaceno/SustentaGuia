"use client"

import { useState } from "react"
import axios from "axios"
import logo from "../assets/images/sustentaguia.png"
import "../styles/LoginPage.css"

function LoginPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  })
  const [errorMessage, setErrorMessage] = useState(null)
  const [activeTab, setActiveTab] = useState("login")
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage(null)

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/register`, {
        name: formData.nome,
        email: formData.email,
        password: formData.senha,
      })
      console.log(response.data)
      setActiveTab("login")
      // Clear form data after successful registration
      setFormData({ ...formData, nome: "" })
    } catch (error) {
      console.error("Erro ao registrar:", error.response ? error.response.data : error.message)
      setErrorMessage("Erro ao registrar. Por favor, tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage(null)

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        email: formData.email,
        password: formData.senha,
      })

      if (response && response.data && response.data.token) {
        localStorage.setItem("token", response.data.token)
        window.location.href = "/dashboard"
      } else {
        setErrorMessage("Usuário ou senha inválidos")
      }
    } catch (error) {
      setErrorMessage("Usuário ou senha inválidos")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="LoginPage">
      <header>
        <img src={logo || "/placeholder.svg"} alt="Logotipo do SustentaGuia" className="logo-img" />
        <h1>Acesse sua conta</h1>
      </header>
      <div className="tabs">
        <button onClick={() => setActiveTab("login")} className={activeTab === "login" ? "active" : ""}>
          Login
        </button>
        <button onClick={() => setActiveTab("register")} className={activeTab === "register" ? "active" : ""}>
          Cadastro
        </button>
      </div>
      <main>
        {activeTab === "register" && (
          <section>
            <h2>Criar nova conta</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  name="senha"
                  placeholder="Sua senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary" disabled={isLoading}>
                {isLoading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </form>
          </section>
        )}
        {activeTab === "login" && (
          <section>
            <h2>Entrar na sua conta</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  name="senha"
                  placeholder="Sua senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Entrar"}
              </button>
            </form>
          </section>
        )}
      </main>
      <footer>
        <p>SustentaGuia © {new Date().getFullYear()} - Todos os direitos reservados</p>
      </footer>
    </div>
  )
}

export default LoginPage

