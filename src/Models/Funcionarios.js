import { openDb } from '../configDB.js'

export async function createTableFuncionarios() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Funcionarios ( id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(60) NOT NULL, sobrenome VARCHAR(60) NOT NULL, cargo VARCHAR(80) NOT NULL )')
  })
}