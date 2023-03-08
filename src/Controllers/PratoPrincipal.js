import { openDb } from '../configDB.js';

export async function selectPrincipal(req, res) {
    openDb()
        .then(db => {
            db.all('SELECT * FROM principal')
                .then(principal => res.json(principal))
        })
}

export async function selectUmPrincipal(req, res) {
    let id = req.params.id;
    openDb()
        .then(db => {
            db.get('SELECT * FROM principal WHERE id=?', [id])
                .then(principal => res.json(principal))
        })
}

export async function insertPrincipal(req, res) {
    let nome = req.body;
    openDb()
        .then(db => {
            db.run('INSERT INTO principal (nome,preco,descricao) VALUES (?,?,?)', [nome.nome, nome.preco, nome.descricao]);
            res.json({
                "statusCode": 200
            })
        })
}

export async function updatePrincipal(req, res) {
    const nome = req.body.nome;
    const preco = req.body.preco;
    const descricao = req.body.descricao;
    const id = req.params.id;
    openDb()
        .then(db => {
            db.run('UPDATE principal SET nome=? ,preco=? ,descricao=? WHERE id=?', [nome, preco, descricao, id]);
            res.json({
                "statusCode": 200
            })
        })
}



export async function deleteUmPrincipal(req, res) {
    let id = req.params.id;
    openDb()
        .then(db => {
            db.get('DELETE FROM principal WHERE id=?', [id]).then(res => res)
        })
    res.json({
        "statusCode": 200
    })
}