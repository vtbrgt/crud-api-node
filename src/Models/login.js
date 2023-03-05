import { openDb } from '../configDB.js';

export async function createTableUsers(){
  openDb().then(db=>{
      db.exec('CREATE TABLE IF NOT EXISTS users (cod_users INTEGER PRIMARY KEY, email_users varchar(50), senha_users varchar(30))') 
  })
};
