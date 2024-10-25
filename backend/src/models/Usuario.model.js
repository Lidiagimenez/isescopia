const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');  // Asegúrate de que este sea el archivo correcto

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  clave: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nacionalidad: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  correo1: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  correo2: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  telefono1: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  telefono2: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  id_tipo_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_estado_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'usuarios',
  timestamps: false 
});

module.exports = Usuario;
