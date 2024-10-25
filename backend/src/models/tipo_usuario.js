 const { DataTypes } = require("sequelize");
 const sequelize = require("../database/database");

 const tipoUser = sequelize.define(
   "tipo_usuario",
//    se cambia tipo_usuarios por tipo_usuario
   {
     id_tipo_usuario: {
         type: DataTypes.INTEGER(11),
         autoIncrement: true,
         primaryKey: true
     },
    detalle: {
         type: DataTypes.STRING(30),     
    },
     descripcion_permisos: {
         type: DataTypes.STRING,         
     },
   },
   {
     timestamps: false,
   }
 );

 module.exports = tipoUser;