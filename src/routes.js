import { Router } from 'express';
import {
  insertFuncionario,
  updateFuncionario,
  selectFuncionarios,
  selectFuncionario,
  deleteFuncionario,
} from './Controllers/Funcionarios.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    statusCode: 200,
    msg: 'Api Rodando',
  });
});

router.get('/funcionarios', selectFuncionarios);
router.get('/funcionario', selectFuncionario);
router.post('/funcionario', insertFuncionario);
router.put('/funcionario', updateFuncionario);
router.delete('/funcionario', deleteFuncionario);

export default router;
