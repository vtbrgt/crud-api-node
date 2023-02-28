import { openDb } from '../configDB.js';


export async function createPratoPrincipal() {
  openDb()
      .then(db => {
          db.exec('CREATE TABLE IF NOT EXISTS principal ( id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(50) NOT NULL, preco DOUBLE(4,2) NOT NULL, descricao VARCHAR(60) NOT NULL)');
      })
};