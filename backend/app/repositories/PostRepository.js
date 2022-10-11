let {Post} = require('../models/Post')
const { db } = require('../../config/mysql')

class PostRepository{
    constructor(){

    }
    createPost(){

    }
    async getFeed(user){
        let user_id = user.user_id;
        return new Promise((resolve,reject)=>{
            let query = `
            SELECT DISTINCT 
            followers_for_id.user_id as user_id,
            followers_for_id.username as username,
            followers_for_id.name as name,
            squareboat_task.posts.post_id as post_id,
            squareboat_task.posts.post_text as post_text
         FROM 
        (SELECT squareboat_task.users.user_id as 
                        user_id,squareboat_task.users.username as 
                        username,squareboat_task.users.name as 
                        name FROM squareboat_task.users 
                        INNER JOIN 
                        squareboat_task.followers ON 
                        squareboat_task.users.user_id = squareboat_task.followers.follower_id 
                        where squareboat_task.followers.user_id = ${user_id}) as followers_for_id
                        INNER JOIN squareboat_task.posts on followers_for_id.user_id = squareboat_task.posts.user_id
        
        
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
