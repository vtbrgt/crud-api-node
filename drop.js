import { openDb } from "./src/configDB.js"

export async function deletete(req,res){
  openDb()
  .then(db => {
      db.all('DROP TABLE Entradas')
          .then(res = res)}
  )}


  deletete()