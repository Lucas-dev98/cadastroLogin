import '../home/style.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao Cadastro de Usuários</h1>
      <p className="home-desc">Faça login ou registre-se para acessar o sistema.</p>
      <div className="home-btns">
        <Link to="/login">
          <button className="home-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="home-btn">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;