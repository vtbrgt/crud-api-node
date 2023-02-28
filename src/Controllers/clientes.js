import { openDb } from "../configDB.js";

export async function selectclientes(req, res){
    openDb().then(db => {
        db.all('SELECT * FROM clientes')
       .then(clientes => res.json(clientes))
   })
}

export async function selectcliente(req, res){
   let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM clientes WHERE id=?', [id])
       .then(cliente=>res.json(cliente))
   })
}

export async function insertcliente(req, res){
    let cliente = req.body;
    openDb().then(db => {
        db.run('INSERT INTO clientes ( nome, idade, cpf, email) VALUES (?,?, ?, ?)', [cliente.nome, cliente.idade, cliente.cpf, cliente.email])
    })
    res.json({
        "statuscode": "200"
    })
}

export async function updatecliente(req, res){
    let cliente = req.body;
    openDb().then(db => {
        db.run('UPDATE clientes SET nome = ?, idade = ?, cpf = ?, email = ?, WHERE id = ?', [cliente.nome, cliente.idade, cliente.cpf, cliente.email, cliente.id])
    })
    res.json({
        "statuscode": "200"
    })
}

export async function deletecliente(req, res){
    let id = req.body.id;
     openDb().then(db => {
         db.get('DELETE FROM clientes WHERE id=?', [id])
        .then(res=>res)
    })
    res.json({
        "statuscode": "200"
    })
}