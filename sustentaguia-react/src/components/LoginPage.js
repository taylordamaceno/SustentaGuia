// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/images/sustentaguia.png';
import '../styles/LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  const [errorMessage, setErrorMessage] = useState(null);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.0.8:5000/register', {
        name: formData.nome,
        email: formData.email,
        password: formData.senha
      });
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao registrar:", error.response.data);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.0.8:5000/login', {
        email: formData.email,
        password: formData.senha
      });
      
      // Verifique se response e response.data estão definidos antes de tentar acessar response.data.token
      if (response && response.data && response.data.token) {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        window.location.href = '/dashboard';
      } else {
        console.error("Erro ao logar: Response ou response.data está indefinido.");
        setErrorMessage("Usuário ou senha inválidos");
      }
    } catch (error) {
      console.error("Erro ao logar:", error.response ? error.response.data : error);
      setErrorMessage("Usuário ou senha inválidos");
    }
  };
  

  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="App">
      <header>
      <img src={logo} alt="Logotipo do aplicativo" className="logo-img" />
        <h1>Cadastro / Login</h1>
      </header>
      <div className="tabs">
        <button onClick={() => setActiveTab('login')} className={activeTab === 'login' ? 'active' : ''}>Login</button>
        <button onClick={() => setActiveTab('register')} className={activeTab === 'register' ? 'active' : ''}>Cadastro</button>
      </div>
      <main>
        {activeTab === 'register' && (
          <section>
            <h2>Cadastro</h2>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" className="form-control" id="nome" name="nome" placeholder="Seu nome" value={formData.nome} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Seu e-mail" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input type="password" className="form-control" id="senha" name="senha" placeholder="Sua senha" value={formData.senha} onChange={handleInputChange} />
              </div>
              <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
          </section>
        )}
        {activeTab === 'login' && (
          <section>
            <h2>Login</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Seu e-mail" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input type="password" className="form-control" id="senha" name="senha" placeholder="Sua senha" value={formData.senha} onChange={handleInputChange} />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </section>
        )}
      </main>
      <footer>
        <p>Copyright © 2023</p>
      </footer>
    </div>
  );
}

export default LoginPage;
