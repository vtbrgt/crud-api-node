import { openDb } from "../configDB.js";


export async function insertUser(req, res) {
  let User = req.body;
    openDb().then(db=>{
      db.run('INSERT INTO (id,nome,preco,descricao) VALUES(?,?,?,?)',[User.id,User.nome,User.preco,User.descricao])
       });
       res.json({
        "statusCode":200
       })
}

export async function updateUser(req, res){
  let User = req.params;
    openDb().then(db=>{
      db.run('UPDATE User SET EMAIL=?  WHERE id=?',[ User.EMAIL])
       });
       res.json({
        "statusCode":200
       })
}

export async function selectUser(req, res) {
   openDb().then(db=>{
     db.all('SELECT * FROM User')
    .then(User=>res.json(User))
     });

}

export async function selectUser(req,res){
  let id = req.params.id;
   openDb()
    .then(db=>{
       db.get('SELECT * FROM Sobremesa WHERE id=?',[id])
        .then(User> res.json(User));
  })
}



export async function deleteUser(req, res){
  let id = req.params.id;
   openDb().then(db=>{
     db.get('DELETE FROM User WHERE id=?',[id])
    .then(res=>res)
     });
     res.json({
      "statusCode":200
     })
}