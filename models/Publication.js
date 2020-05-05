module.exports = (sequelize, DataTypes) =>{
    const Publication =  sequelize.define('Publication',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false
        },
        like:DataTypes.INTEGER,

        create_ate:DataTypes.DATE,

        update_at:DataTypes.DATE,

        users_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{
        timestamps:false,
        tableName:'publications',
    })

    Publication.associate = (models) => {
        Publication.belongsTo(models.User, {
          foreignKey: "users_id",
          as: "user",
        });

        Publication.hasMany(models.Comment,{
            foreignKey:'publications_id',
            as:'comments'
        })
      };

    return Publication

}


