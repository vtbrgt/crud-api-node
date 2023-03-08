import { Router } from 'express';

import {
  insertFuncionario,
  updateFuncionario,
  selectFuncionarios,
  selectFuncionario,
  deleteFuncionario,
} from './Controllers/Funcionarios.js';

import { insertEntradas,
   slectEntrada, 
   slectEntradas, 
   updateEntradas,
   deleteEntrada 
} from './Controllers/Entradas.js';

import { insertcliente, 
    updatecliente, 
    selectcliente, 
    selectclientes,
     deletecliente 
} from './Controllers/Clientes.js';

//Import CRUD da entidade Prato Principal
import {
      insertPrincipal,
      updatePrincipal,
      selectPrincipal,
      selectUmPrincipal,
      deleteUmPrincipal 
} from './Controllers/PratoPrincipal.js';

import {insertSobremesas,
  updateSobremesas,
   selectSobremesas,
    deleteSobremesas,
     selectSobremesa } 
     from './Controllers/Sobremesas.js';

     import {selectUsers, login, registe } from './Controllers/Login.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    statusCode: 200,
    msg: 'Api Rodando',
  });
});
//Login
router.get('/login', selectUsers)
router.post('/login', login)
router.post('/register', registe)
//Login

// Funcionarios
router.get('/funcionarios', selectFuncionarios);
router.get('/funcionario/:id', selectFuncionario);
router.post('/funcionario', insertFuncionario);
router.put('/funcionario/:id', updateFuncionario);
router.delete('/funcionario/:id', deleteFuncionario);
// Funcionarios

// Entradas
router.get('/entradas',slectEntradas)
router.get('/entrada/:id',slectEntrada)
router.post('/entradas',insertEntradas)
router.put('/entradas/:id',updateEntradas)
router.delete('/entradas/:id',deleteEntrada)
// Entradas

//Clientes
router.get('/clientes', selectclientes);
router.get('/cliente/:id', selectcliente);
router.post('/cliente', insertcliente);
router.put('/cliente/:id', updatecliente);
router.delete('/cliente/:id', deletecliente);
//Clientes

//PratoPrincipal
router.get('/principal', selectPrincipal);
router.get('/umprincipal/:id', selectUmPrincipal);
router.post('/principal', insertPrincipal);
router.put('/principal/:id', updatePrincipal);
router.delete('/principal/:id', deleteUmPrincipal);
//PratoPrincipal

//Sobremesas
router.get('/sobremesas',selectSobremesas)
router.get('/sobremesa/:id',selectSobremesa)
router.post('/sobremesas',insertSobremesas)
router.put('/sobremesas/:id',updateSobremesas)
router.delete('/sobremesas/:id',deleteSobremesas)
//Sobremesas
export default router;
