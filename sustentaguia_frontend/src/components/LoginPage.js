"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../config/axios"
import "../styles/LoginPage.css"

function LoginPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  })
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [activeTab, setActiveTab] = useState("register")
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage(null)
    setSuccessMessage(null)

    try {
      const response = await api.post("/register", {
        name: formData.nome,
        email: formData.email,
        password: formData.senha,
      })
      
      setSuccessMessage("Cadastro realizado com sucesso! Faça login para continuar.")
      setFormData({ nome: "", email: "", senha: "" })
      setActiveTab("login")
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Erro ao registrar. Por favor, tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage(null)
    setSuccessMessage(null)

    try {
      const response = await api.post("/login", {
        email: formData.email,
        password: formData.senha,
      })

      if (response.data?.token) {
        localStorage.setItem("token", response.data.token)
        navigate("/dashboard")
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Usuário ou senha inválidos")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="LoginPage">
      <header>
        <h1>SustentaGuia</h1>
      </header>
      
      <div className="tabs">
        <button 
          onClick={() => {
            setActiveTab("register")
            setErrorMessage(null)
            setSuccessMessage(null)
          }} 
          className={activeTab === "register" ? "active" : ""}
        >
          Cadastro
        </button>
        <button 
          onClick={() => {
            setActiveTab("login")
            setErrorMessage(null)
            setSuccessMessage(null)
          }} 
          className={activeTab === "login" ? "active" : ""}
        >
          Login
        </button>
      </div>

      <main>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        
        {activeTab === "register" && (
          <section>
            <h2>Criar nova conta</h2>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Seu e-mail"
                />
              </div>
              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  required
                  placeholder="Sua senha"
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
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="loginEmail">E-mail</label>
                <input
                  type="email"
                  id="loginEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Seu e-mail"
                />
              </div>
              <div className="form-group">
                <label htmlFor="loginSenha">Senha</label>
                <input
                  type="password"
                  id="loginSenha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  required
                  placeholder="Sua senha"
                />
              </div>
              <button type="submit" className="btn-primary" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Entrar"}
              </button>
            </form>
          </section>
        )}
      </main>
    </div>
  )
}

export default LoginPage

