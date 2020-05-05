const { Publication }  = require('../models')

// const moment = require('moment')
// moment.locale('pt') 

module.exports = {
    index(req,res){
        res.render('newPost',{title:'Publicar'})
    },

    async store(req,res){

            await Publication.create({
            image:`/img/posts/${req.files[0].filename}`,
            like:0,
            create_ate: new Date(),
            update_at: new Date(),
            users_id:req.session.user.id
            
        })


    }
}