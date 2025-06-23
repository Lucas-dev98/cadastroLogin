import '../register/style.css';
import Trash from '../../assets/trash.svg';
import Edit from '../../assets/edit.svg';
import api from '../../services/api';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const inputEmail = useRef();
  const inputPassword = useRef();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('/login', {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });
      alert(response.data.message); // Ou redirecione o usuário
    } catch (error) {
      alert(error.response?.data?.message || 'Erro ao fazer login');
    }
  }

  return (
    <>
      <header className="header-nav">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <div className="container">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <input placeholder="email" type="email" ref={inputEmail} required />
          <input
            placeholder="senha"
            type="password"
            ref={inputPassword}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
}

export default Login;
