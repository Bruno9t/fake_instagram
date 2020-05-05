const {db, Sequelize} = require('../db/connection')

const bcrypt = require('bcrypt')

module.exports = {
    async store(req,res){

        let {email , name  ,username , password} = req.body

        let replacements = {name,email , username , password:bcrypt.hashSync(password, 10)}

        await db.query(
        `INSERT INTO users (name,email,username,password) 
         VALUES (:name,:email, :username, :password);`,
        {
            replacements,

            type:Sequelize.QueryTypes.INSERT,

        }
    )

        res.redirect('/')

    }
}