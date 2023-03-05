import { openDb } from "../configDB.js";
import bcrypt from "bcrypt";
const Rounds = 10;

export async function selectUsers(req, res){
    openDb()
      .then(db=>{
       db.all('SELECT * FROM users')
         .then(users=>res.json(users))
    })
  }

export async function login(req, res){
  const {email_users, senha_users} = req.body;
  
  openDb()
  .then(db => {
      db.all(`SELECT * FROM users WHERE email_users = ?`, [email_users])
      .then((rows, err) =>{
          if(err){
              return res.json({err}); 
          } 
          if(rows.length > 0){ 
              bcrypt.compare(senha_users, rows[0].senha_users)
              .then((response, error) => {
                  if(error){
                      res.send(error)
                  }
                  if(response){
                      res.json({validation: true, results: rows})
                  }else{
                      res.send({validation: false}) 
                  }
              }) 
          }else{
              return (res.send({msg: "Usuário não credenciado. Invalido!", validation: false}
              ))
          }
      })
  })
};
export async function registe(req, res){
    const {email_users, senha_users} = req.body;
    
    openDb()
    .then(db => {
        db.all("SELECT * FROM users WHERE email_users = ?", [email_users])
        .then((rows, err) => {
            if(err) {
                res.send(err);
            }
            if(rows.length == 0) {
                bcrypt.hash(senha_users, Rounds)
                .then((hash, err) => {
                db.run("INSERT INTO users (email_users, senha_users) VALUES (?,?)", [email_users, hash])
                .then((response, error) => {
                    if (error) {
                        res.send(error);
                    }
                    if(response){
                        res.send({ msg: "Usuário cadastrado com sucesso" });
                    }}
                );
                });
            } else {
                res.send({ msg: "Email já cadastrado" });
            }
        });
    });
};