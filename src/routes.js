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
     deletecliente } from './Controllers/clientes.js';


const router = Router();

router.get('/', (req, res) => {
  res.json({
    statusCode: 200,
    msg: 'Api Rodando',
  });
});
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

export default router;
