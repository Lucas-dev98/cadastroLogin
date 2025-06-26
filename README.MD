# CadastroLogin

Projeto fullstack de cadastro e login de usuários utilizando **Node.js**, **Express**, **Prisma**, **MongoDB Atlas** e **React**.

---

## ✨ Funcionalidades

- Cadastro de usuários com nome, idade, email e senha  
- Listagem, edição e exclusão de usuários  
- Login de usuário com validação de senha  
- Integração frontend (React) e backend (Node.js/Express)  
- Persistência de dados em MongoDB Atlas via Prisma  

---

## 🧰 Tecnologias Utilizadas

- **Backend:** Node.js, Express, Prisma ORM, MongoDB Atlas  
- **Frontend:** React, Axios  
- **Outros:** CORS, dotenv  

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório


-git clone <url-do-repo>
-cd CadastroLogin

### 2 . Configure o Banco de Dados
-Crie um banco no MongoDB Atlas chamado Users e uma coleção chamada user.
No arquivo .env, configure a variável DATABASE_URL com sua string de conexão, exemplo:


    DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/Users?retryWrites=true&w=majority"


### 3. Instale as dependências do backend

-npm install

### 4. Gere o Prisma Client

-npx prisma generate


### 5. Inicie o backend

-npm start

O backend ficará disponível em http://localhost:3000.

### 6. Instale as dependências do frontend

-cd frontend
-npm install

### 7. Inicie o frontend

-npm run dev

O frontend ficará disponível em http://localhost:5173 (ou porta definida pelo Vite).

## 📁 Estrutura de Pastas

```
CadastroLogin/
│
├── prisma/
│   └── schema.prisma
├── frontend/
│   └── src/
│       └── pages/
│           └── register/
│               └── index.jsx
├── server.js
├── .env
└── README.md
```

## Observações
O campo age é armazenado como string no banco.
As senhas são salvas em texto puro (apenas para fins didáticos). Para produção, utilize hash de senha!
O Prisma cria a coleção user automaticamente se ela não existir.

### Licença
Este projeto é livre para estudos e aprimoramento.