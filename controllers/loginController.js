const {db, Sequelize} = require('../db/connection')

const bcrypt = require('bcrypt')

module.exports = {
    async verify(req,res){

        let { email , password } = req.body

        let user = (await db.query(`SELECT * FROM users WHERE email= :email;`,
        {
            replacements:{
                email,
            },

            type:Sequelize.QueryTypes.SELECT,

        }))[0]

        if(user && bcrypt.compareSync(password , user.password)){
            
            req.session.user = {
                id:user.id,
                email:user.email,
                name:user.name
            }

            res.redirect('/home')
        }else{
            res.render('auth/login');
        }

    }
} 