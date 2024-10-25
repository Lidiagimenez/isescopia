const { Alumnos } = require('../models/alumnos.model'); 
const { Carreras } = require('../models/carreras.model'); 
const { Materias } = require('../models/materias.model'); 



class AlumnoDetallesService {
    async getAlumnosConCarrerasYMaterias() {
        try {
            const alumnosConDetalles = await Alumnos.findAll({
                include: [
                    {
                        model: Carreras,
                        as: 'carrera',
                        include: [
                            {
                                model: Materias,
                                as: 'materias',
                            }
                        ]
                    }
                ]
            });
            return alumnosConDetalles;
        } catch (error) {
            console.error("Error al obtener alumnos con carreras y materias: ", error);
            throw error; // Propagar el error para manejarlo más arriba
        }
    }
}

module.exports = new AlumnoDetallesService();
