import { openDb } from '../configDB.js';

export async function slectEntradas(req, res) {
  openDb().then((db) => {
    db.all('SELECT * FROM Entradas').then((entradas) => res.json(entradas));
  });
}

export async function slectEntrada(req, res) {
  let id = req.params.id;
  openDb().then((db) => {
    db.get('SELECT * FROM Entradas WHERE id=?', [id]).then((entrada) =>
      res.json(entrada),
    );
  });
}

export async function insertEntradas(req, res) {
  let entradas = req.body;
  openDb().then((db) => {
    db.run(
      'INSERT INTO Entradas (id, nome, preco, descricao) VALUES (?,?, ?, ?)',
      [entradas.id, entradas.nome, entradas.preco, entradas.descricao],
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updateEntradas(req, res) {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const descricao = req.body.descricao;
  const id = req.params.id;
  openDb().then((db) => {
    db.run('UPDATE Entradas SET nome=?,preco=?, descricao=? WHERE id=?', [
      nome,
      preco,
      descricao,
      id,
    ]);
  });
  res.json({
    statusCode: 200,
  });
}

export async function deleteEntrada(req, res) {
  let id = req.params.id;
  openDb().then((db) => {
    db.get('DELETE FROM Entradas WHERE id=?', [id]).then((res) => res);
  });
  res.json({
    statusCode: 200,
  });
}
