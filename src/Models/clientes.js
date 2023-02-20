import { openDb } from '../configDB.js';

export async function createTableClientes(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS clientes ( id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTEGER, cpf INTEGER, email VARCHAR (50) )')
    })
}
