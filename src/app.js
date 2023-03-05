import express from 'express';
import router from './routes.js';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import { createTableFuncionarios } from './Models/Funcionarios.js';
import { createTableEntradas } from './Models/Entradas.js';
import { createTableClientes } from './Models/Clientes.js';
import { createPratoPrincipal } from './Models/PratoPrincipal.js';
import { createTableSobremesas}  from './Models/Sobremesas.js';
import { createTableUsers } from './Models/login.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);


createTableFuncionarios();
createTableEntradas();
createTableClientes();
createPratoPrincipal();
createTableSobremesas();
createTableUsers();

app.listen(3000, () => console.log('API Rodando'));

https
  .createServer(
    {
      cert: fs.readFileSync('src/SSL/code.crt'),
      key: fs.readFileSync('src/SSL/code.key'),
    },
    app
  )
  .listen(3001, () => console.log('Rodando em https'));
