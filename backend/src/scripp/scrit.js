const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');

async function hashPasswordForUser(userId) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bdinscripciones'
    });

    // Selecciona la contraseña del usuario específico
    const [rows] = await connection.execute('SELECT clave FROM usuarios WHERE id_usuario = ?', [userId]);
    if (rows.length > 0) {
        const hashedPassword = await bcrypt.hash(rows[0].clave, 10); // Cambia el 10 al costo deseado

        // Actualiza la contraseña hasheada solo para ese usuario
        await connection.execute('UPDATE usuarios SET clave = ? WHERE id_usuario = ?', [hashedPassword, userId]);
        console.log(`Contraseña hasheada exitosamente para el usuario con ID ${userId}`);
    } else {
        console.log(`Usuario con ID ${userId} no encontrado`);
    }


    await connection.end();

}
// Llama a la función con el ID del usuario deseado
hashPasswordForUser(125).catch(console.error);