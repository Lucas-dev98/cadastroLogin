import { useEffect } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

function Home() {
  let users = [];


  async function getUsers(){
    users = await api.get("/users")
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuario</h1>
        <input placeholder="name" type="text" />
        <input placeholder="age" type="number" />
        <input placeholder="email" type="email" />
        <button type="button">Register</button>
      </form>

      {users.map((user) => (
        <div className="card" key={user.id}>
          <div>
            <p>name: <span>{user.name}</span></p>
            <p>age: <span>{user.age}</span></p>
            <p>email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} alt="Delete User" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
