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

     import { login, registe } from './Controllers/Login.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    statusCode: 200,
    msg: 'Api Rodando',
  });
});
//Login
router.post('/login', login)
router.post('/register', registe)
//Login

// Funcionarios
router.get('/funcionarios', selectFuncionarios);
router.get('/funcionario', selectFuncionario);
router.post('/funcionario', insertFuncionario);
router.put('/funcionario', updateFuncionario);
router.delete('/funcionario', deleteFuncionario);
// Funcionarios

// Entradas
router.get('/entradas',slectEntradas)
router.get('/entrada',slectEntrada)
router.post('/entradas',insertEntradas)
router.put('/entradas',updateEntradas)
router.delete('/entradas',deleteEntrada)
// Entradas

//Clientes
router.get('/clientes', selectclientes);
router.get('/cliente', selectcliente);
router.post('/cliente', insertcliente);
router.put('/cliente', updatecliente);
router.delete('/cliente', deletecliente);
//Clientes

//PratoPrincipal
router.get('/principal', selectPrincipal);
router.get('/umprincipal', selectUmPrincipal);
router.post('/principal', insertPrincipal);
router.put('/principal', updatePrincipal);
router.delete('/principal', deleteUmPrincipal);
//PratoPrincipal

//Sobremesas
router.get('/sobremesas',selectSobremesas)
router.get('/sobremesa',selectSobremesa)
router.post('/sobremesas',insertSobremesas)
router.put('/sobremesas',updateSobremesas)
router.delete('/sobremesas',deleteSobremesas)
//Sobremesas
export default router;
