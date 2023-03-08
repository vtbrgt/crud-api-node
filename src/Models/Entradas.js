import { openDb } from '../configDB.js';

export async function createTableEntradas() {
  openDb().then((db) => {
    db.exec(
      'CREATE TABLE IF NOT EXISTS Entradas (id INTEGER PRIMARY KEY AUTOINCREMENT ,nome VARCHAR (50) not null, preco text not null, descricao text)',
    );
  });
}
