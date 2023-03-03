import { openDb } from '../configDB.js';

export async function createTableLogin(){
  openDb().then(db=>{
    db.exec('CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY AUTOINCREMENT ,EMAIL VARCHAR (50) not null, ENCRYPTED_PASSUWARD VARCHER(11) not null,AUTH_TOKEN TEXT)')
  })
}
