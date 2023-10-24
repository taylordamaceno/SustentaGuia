import React from 'react';
import logo from '../assets/images/sustentaguia.png';
import '../styles/LoginPage.css';
function LoginPage() {
  return (
    <div className="App">
      <header>
      <img src={logo} alt="Logotipo do aplicativo" />
        <h1>Cadastro / Login</h1>
      </header>
      <main>
        <section>
          <h2>Cadastro</h2>
          <form action="/cadastro" method="post">
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" className="form-control" id="nome" name="nome" placeholder="Seu nome" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Seu e-mail" />
            </div>
            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" className="form-control" id="senha" name="senha" placeholder="Sua senha" />
            </div>
            <button type="submit" className="btn btn-primary">Cadastrar</button>
          </form>
        </section>
        <section>
          <h2>Login</h2>
          <form action="/login" method="post">
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Seu e-mail" />
            </div>
            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" className="form-control" id="senha" name="senha" placeholder="Sua senha" />
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