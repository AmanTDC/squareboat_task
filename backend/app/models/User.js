function User(user_id,username,email,name,password_hash){
    this.user_id = user_id;
    this.name = name;
    this.email = email;
    this.username = username;
    this.password_hash = password_hash;
}

module.exports = {
    User
}