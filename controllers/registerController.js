const db = require('../db/connection')

const bcrypt = require('bcrypt')

module.exports = {
    async store(req,res){

        console.log(req.body)

        let {email,name,username,password} = req.body

        let passC = bcrypt.hashSync(password,10);

        let result = await db.query(`INSERT INTO users (name,email,username,password) VALUES (:name, :email, :username, :password);`,
        {
            replacements:{
                name,
                email,
                username,
                password:passC
            }
        })

        console.log(result)

    }
}