import { openDb } from "../configDB.js";


export async function insertSobremesas(req, res) {
  let Sobremesas = req.body;
    openDb().then(db=>{
      db.run('INSERT INTO Sobremesas(id,nome,preco,descricao) VALUES(?,?,?,?)',[Sobremesas.id,Sobremesas.nome,Sobremesas.preco,Sobremesas.descricao])
       });
       res.json({
        "statusCode":200
       })
}

export async function updateSobremesas(req, res){
  let Sobremesas = req.body;
    openDb().then(db=>{
      db.run('UPDATE Sobremesas SET nome=?, preco=?, descricao=? WHERE id=?',[ Sobremesas.nome, Sobremesas.preco, Sobremesas.descricao, Sobremesas.id])
       });
       res.json({
        "statusCode":200
       })
}

export async function selectSobremesas(req, res) {
   openDb().then(db=>{
     db.all('SELECT * FROM Sobremesas')
    .then(Sobremesas=>res.json(Sobremesas))
     });

}

export async function selectSobremesa(req,res){
  let id = req.body.id;
   openDb()
    .then(db=>{
       db.get('SELECT * FROM Sobremesa WHERE id=?',[id])
        .then(Sobremesa=> res.json(Sobremesa));
  })
}



export async function deleteSobremesas(req, res){
  let id = req.body.id;
   openDb().then(db=>{
     db.get('DELETE FROM Sobremesas WHERE id=?',[id])
    .then(res=>res)
     });
     res.json({
      "statusCode":200
     })
}