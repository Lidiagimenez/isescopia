const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Catedras = sequelize.define(
  "catedras",
  {
    id_catedra: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    id_materia: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "id_materia",
    },
    descripcion: {
      allowNull: false,
      type: DataTypes.STRING(50),
      field: "descripcion",
    },
    fecha_inicio: {
      allowNull: false,
      type: DataTypes.DATE,
      field: "fecha_inicio",
    },
    fecha_fin: {
      allowNull: false,
      type: DataTypes.DATE,
      field: "fecha_fin",
    },
    id_profesor: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "id_profesor",
    },
    id_carrera: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "id_carrera",
    },
    id_ciclo: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "id_ciclo",
    },
  },
  {
    timestamps: false, // Desactivamos los timestamps para mantener compatibilidad con la tabla en la BD
  }
);

module.exports = Catedras;
