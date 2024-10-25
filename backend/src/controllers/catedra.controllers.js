const Catedras = require('../models/Catedras.js'); // Importamos el modelo

// Controlador para obtener todas las cátedras
const getCatedras = async (req, res) => {
  try {
    const catedras = await Catedras.findAll(); // Usamos Sequelize para obtener todas las cátedras
    console.log("ESTAMOS EN CATEDRA")
    res.status(200).json(catedras); // Enviamos la respuesta con un código 200 (OK) y los datos en formato JSON
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las cátedras",
      error: error.message
    });
  }
};
  

module.exports = { getCatedras};
