 const { DataTypes } = require("sequelize");
 const sequelize = require("../database/database");


// //estado usuario
 const estadoUser = sequelize.define(
   "estado_usuario",
//    se cambia estado_usuarios por estado_usuario
   {
     id_estado_usuario: {
         type: DataTypes.INTEGER(11),
         autoIncrement: true,
         primaryKey: true
    
     },
     detalle: {
         type: DataTypes.STRING(30),     
     },
   },
   {
     timestamps: false,
   }
 );

 module.exports = estadoUser;