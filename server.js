import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });
    res.status(201).json({
      message: 'Usuário criado com sucesso!',
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Erro ao criar usuário',
      error: error.message,
    });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      message: 'Usuários encontrados com sucesso!',
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao buscar usuários',
      error: error.message,
    });
  }
});

app.put('/users/:id', async (req, res) => {
  console.log('Parâmetros:', req.params);
  console.log('Corpo:', req.body);

  try {
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });

    res.status(200).json({
      message: 'Usuário atualizado com sucesso!',
      user,
    });
  } catch (error) {
    console.error('Erro no update:', error);
    res.status(400).json({
      message: 'Erro ao atualizar usuário',
      error: error.message,
    });
  }
});


app.delete('/users/:id', async (req, res) => {
  console.log('Parâmetros:', req.params);
  console.log('Corpo:', req.body);

  try {
    const user = await prisma.user.delete({
      where: { id: req.params.id }
    });

    res.status(200).json({
      message: 'Usuário deletado com sucesso!',
      user
    });
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(400).json({
      message: 'Erro ao deletar usuário',
      error: error.message
    });
  }
});




app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
