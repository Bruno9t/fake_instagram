const {Comment} = require('../models')

module.exports = {
    async store(req,res){
        let {message} = req.body
        let {id} = req.params
        console.log(message, id)
        
        if(message.length > 0){
            await Comment.create({
                description:message,
                create_at:new Date(),
                update_at:new Date(),
                publications_id:id,
            })
        }

        return res.redirect('/home')
    }
}