let {Follower} = require('../models/Follower')
const { db } = require('../../config/mysql')

class FollowerRepository{
    constructor(){

    }
    async addFollower(user,toFollowUser){
        let follower_id = user.user_id;
        let user_id = toFollowUser.user_id;

        return new Promise((resolve,reject)=>{
            let query=`
            INSERT INTO squareboat_task.followers
            (user_id,
            follower_id)
            VALUES
            (${user_id},
            ${follower_id});
            
            `
            db.query(query,(err,result,fields)=>{
                if(err) reject(err);
                else resolve(result)
            })
        })

    }
    async getFollowers(user){
        let user_id = user.user_id;
        return new Promise((resolve,reject)=>{
            let query = 
                `
                select distinct f1.user_id, (f2.user_id is not NULL) as isFollowing, users.username as username,users.name as name  from 
                (select follower_id as user_id from followers where user_id=${user_id}) as 
                f1
                LEFT OUTER JOIN
                (select * from followers where followers.follower_id = ${user_id}) as f2
                on f1.user_id = f2.user_id
                JOIN
                users ON 
                f1.user_id = users.user_id

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
                SELECT DISTINCT squareboat_task.users.user_id as 
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
