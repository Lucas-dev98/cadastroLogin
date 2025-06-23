import '../register/style.css';
import Trash from '../../assets/trash.svg';
import Edit from '../../assets/edit.svg';
import api from '../../services/api';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();

  async function getUsers() {
    try {
      const response = await api.get('/users');
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  }

  async function createUsers() {
    if (
      !inputName.current.value ||
      !inputAge.current.value ||
      !inputEmail.current.value ||
      !inputPassword.current.value
    ) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      await api.post('/users', {
        name: inputName.current.value,
        age: Number(inputAge.current.value), // Garante que é Int
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });
      inputName.current.value = '';
      inputAge.current.value = '';
      inputEmail.current.value = '';
      inputPassword.current.value = '';
      getUsers();
    } catch (error) {
      console.error(error);
      alert('Erro ao criar usuário!');
    }
  }

  async function updateUser() {
    if (
      !inputName.current.value ||
      !inputAge.current.value ||
      !inputEmail.current.value ||
      !inputPassword.current.value
    ) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      await api.put(`/users/${editingId}`, {
        name: inputName.current.value,
        age: Number(inputAge.current.value), // Garante que é Int
        email: inputEmail.current.value,
        password: inputPassword.current.value, // Inclua password na edição
      });
      setEditingId(null);
      inputName.current.value = '';
      inputAge.current.value = '';
      inputEmail.current.value = '';
      inputPassword.current.value = '';
      getUsers();
    } catch (error) {
      console.error(error);
      alert('Erro ao editar usuário!');
    }
  }

  function handleEditUser(user) {
    inputName.current.value = user.name;
    inputAge.current.value = user.age;
    inputEmail.current.value = user.email;
    inputPassword.current.value = user.password; // Preenche o campo password
    setEditingId(user.id);
  }

  useEffect(() => {
    getUsers();
  }, []);

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
        <form>
          <h1>Cadastro de Usuario</h1>
          <input placeholder="name" type="text" ref={inputName} />
          <input placeholder="age" type="number" ref={inputAge} />
          <input placeholder="email" type="email" ref={inputEmail} />
          <input
            placeholder="senha"
            type="password"
            ref={inputPassword}
            autoComplete="current-password"
          />
          {/* NOVO */}
          {editingId ? (
            <button type="button" onClick={updateUser}>
              Salvar Edição
            </button>
          ) : (
            <button type="button" onClick={createUsers}>
              Register
            </button>
          )}
        </form>

        {users.map((user) => (
          <div className="card" key={user.id}>
            <div>
              <p>
                name: <span>{user.name}</span>
              </p>
              <p>
                age: <span>{user.age}</span>
              </p>
              <p>
                email: <span>{user.email}</span>
              </p>
            </div>
            <button type="button" onClick={() => deleteUser(user.id)}>
              <img src={Trash} alt="Delete User" />
            </button>
            <button type="button" onClick={() => handleEditUser(user)}>
              <img src={Edit} alt="Edit User" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
