let {Follower} = require('../models/Follower')
const { db } = require('../../config/mysql')

class FollowerRepository{
    constructor(){

    }
    async getFollowers(user){
        let user_id = user.user_id;
        return new Promise((resolve,reject)=>{
            let query = 
                `
                SELECT squareboat_task.users.user_id as 
                user_id,squareboat_task.users.username as 
                username,squareboat_task.users.name as 
                name FROM squareboat_task.users 
                INNER JOIN 
                squareboat_task.followers ON 
                squareboat_task.users.user_id = squareboat_task.followers.follower_id 
                where squareboat_task.followers.user_id = ${user_id}
                `
            db.query(query,(err,result,fields)=>{
                if(err) reject(err);
                else resolve(result)
            })
        })
    }

    async getFollowing(user){
        let user_id = user.user_id;
        return new Promise((resolve,reject)=>{
            let query = 
                `
                SELECT squareboat_task.users.user_id as 
                user_id,squareboat_task.users.username as 
                username,squareboat_task.users.name as 
                name FROM squareboat_task.users 
                INNER JOIN 
                squareboat_task.followers ON 
                squareboat_task.users.user_id = squareboat_task.followers.user_id 
                where squareboat_task.followers.follower_id = ${user_id}
                `
            db.query(query,(err,result,fields)=>{
                if(err) reject(err);
                else resolve(result)
            })
        })
    }
    //to change the resusabilitly
    async getNotFollowing(user){
        let user_id = user.user_id;
        return new Promise((resolve,reject)=>{
            let query = 
            `
            select distinct squareboat_task.users.user_id,username,name from squareboat_task.users LEFT OUTER JOIN 
(select squareboat_task.followers.user_id as user_id from squareboat_task.followers where squareboat_task.followers.follower_id = ${user_id}) as followers_by_id
ON squareboat_task.users.user_id = followers_by_id.user_id WHERE followers_by_id.user_id is NULL and squareboat_task.users.user_id!=${user_id}

            `
            db.query(query,(err,result,fields)=>{
                if(err) reject(err);
                else resolve(result)
            })
        })
    }
}

module.exports = {
    FollowerRepository
}
