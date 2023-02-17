import { openDb } from '../configDB.js';

export async function slectEntradas(req, res){
  openDb()
    .then(db=>{
     db.all('SELECT * FROM Entradas')
       .then(entradas=>res.json(entradas))
  })
}

export async function slectEntrada(req,res){
  let id = req.body.id;
   openDb()
    .then(db=>{
       db.get('SELECT * FROM Entradas WHERE id=?',[id])
        .then(entrada=> res.json(entrada));
  })
}

export async function insertEntradas(req, res){
  let entradas = req.body;
   openDb()
    .then(db=>{
      db.run('INSERT INTO Entradas (id, nome,tipo) VALUES (?, ?, ?)', [entradas.id, entradas.nome, entradas.tipo])
  })
  res.json({
    "statusCode": 200
  })
}

export async function updateEntradas(req, res){
  let entradas = req.body;
   openDb()
    .then(db=>{
      db.run('UPDATE Entradas SET nome=?, tipo=? WHERE id=?', [ entradas.nome, entradas.tipo, entradas.id])
  });
  res.json({
    "statusCode": 200
  })
}


export async function deleteEntrada(req,res){
  let id = req.body.id;
  openDb()
    .then(db=>{
      db.get('DELETE FROM Entradas WHERE id=?',[id])
        .then(res=>res)
  })
  res.json({
    "statusCode": 200
  })
}