module.exports = (sequelize,DataTypes)=>{
    const Comment = sequelize.define('Comment',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true,
            allowNull:false,
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        create_at:DataTypes.DATE,
        update_at:DataTypes.DATE,
        publications_id:{
            type:DataTypes.INTEGER,
            unique:true
        }
    },{
        timestamps:false,
        tableName:'comments'
    })

    return Comment
}