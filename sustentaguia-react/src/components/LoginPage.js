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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
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
      const response = await axios.post('http://localhost:5000/login', { // Adicione o endereço completo aqui
        email: formData.email,
        password: formData.senha
      });
      console.log(response.data);

      // Salvar o token no local storage
      localStorage.setItem('token', response.data.token);

      // Redirecionar para o dashboard ou página inicial
      window.location.href = '/dashboard';  // ou a rota que você deseja
    } catch (error) {
      console.error("Erro ao logar:", error.response.data);
    }
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logotipo do aplicativo" />
        <h1>Cadastro / Login</h1>
      </header>
      <main>
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
        <section>
          <h2>Login</h2>
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
      </main>
      <footer>
        <p>Copyright © 2023</p>
      </footer>
    </div>
  );
}

export default LoginPage;