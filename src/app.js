import express from 'express';
const app = express();
app.use(express.json());

import router from './routes.js';
app.use(router);

import { createTableFuncionarios } from './Models/Funcionarios.js';
createTableFuncionarios();

app.listen(3000, () => console.log('API Rodando'));
