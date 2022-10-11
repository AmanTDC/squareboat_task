const { db } = require('../../config/mysql')
let {User} = require('../models/User')

class UserRepository{
    constructor(){

    }
    async createUser(user){
            return new Promise((resolve,reject)=>{
                db.query(`INSERT INTO users (username,email,name,password_hashed )
                VALUES ('${user.username}','${user.email}','${user.name}','${user.password_hash}')
                `,(err,result,fields)=>{
                    if(err){
                        reject(err)
                    } 
                    else resolve(result)
                })
            })
    }
    async getUser(user){
        return new Promise ((resolve,reject)=>{
            let query = '';
            if(user.username)
                query = `SELECT * from users where users.username = '${user.username}' or users.email = '${user.username}'`
            else if(user.user_id)
                query = `SELECT * from users where users.user_id = ${user.user_id}`
            console.log(query)
            db.query(query,
                (err,result,fields)=>{
                    
                    if(err) reject(err);
                    else resolve(result[0])

                }
            )
        })
    }
    async getUserInfo(user){
        return new Promise ((resolve,reject)=>{
            let query = '';
            if(user.username)
                query = `SELECT user_id,username,name,email from users where users.username = '${user.username}' or users.email = '${user.username}'`
            else if(user.user_id)
                query = `SELECT user_id,username,name,email from users where users.user_id = ${user.user_id}`
            console.log(query)
            db.query(query,
                (err,result,fields)=>{
                    
                    if(err) reject(err);
                    else resolve(result[0])

                }
            )
        })
    }
    
    

    
}
module.exports = {
    UserRepository
}
