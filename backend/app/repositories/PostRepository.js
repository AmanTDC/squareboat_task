let {Post} = require('../models/Post')
const { db } = require('../../config/mysql')

class PostRepository{
    constructor(){

    }
    //comment: how to remove redundancy?
    async createPost(user,post){
        let user_id = user.user_id;
        let post_text = post.post_text;
        return new Promise((resolve,reject)=>{
            let query=`
                INSERT INTO squareboat_task.posts (user_id,post_text) VALUES (${user_id},'${post_text}')
            `
            console.log(query)
            db.query(query,(err,result)=>{
                if(err)
                    reject(err)
                else
                    resolve(result)
            })
        })
    }
    async getFeed(user){
        let user_id = user.user_id;
        return new Promise((resolve,reject)=>{
            let query = `
            SELECT DISTINCT 
            following.user_id as user_id,
            following.username as username,
            following.name as name,
            squareboat_task.posts.post_id as post_id,
            squareboat_task.posts.post_text as post_text
         FROM 
        (SELECT DISTINCT squareboat_task.users.user_id as 
                user_id,squareboat_task.users.username as 
                username,squareboat_task.users.name as 
                name FROM squareboat_task.users 
                INNER JOIN 
                squareboat_task.followers ON 
                squareboat_task.users.user_id = squareboat_task.followers.user_id 
                where squareboat_task.followers.follower_id = ${user_id}) as following
                        INNER JOIN squareboat_task.posts on following.user_id = squareboat_task.posts.user_id
                        
                        
                        
                        UNION 
                        
                        
                        
                        SELECT 
                        squareboat_task.users.user_id as user_id,
						username,
						name,
						post_id,
						post_text
                        from squareboat_task.users INNER JOIN squareboat_task.posts on squareboat_task.users.user_id = squareboat_task.posts.user_id where squareboat_task.users.user_id = ${user_id}
                        
        
            `
            db.query(query,(err,result,fields)=>{
                if(err) reject(err);
                else resolve(result)
            })
        })
        

    }
    
}

module.exports = {
    PostRepository
}
