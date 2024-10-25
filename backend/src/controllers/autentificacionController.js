const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuarios = require('../models/usuarios.model'); 

async function loginUser(req, res) {
  const { username, password } = req.body; 

  try {
    const user = await usuarios.findOne({ where: { dni: username } });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const passwordMatch = await bcrypt.compare(password, user.clave);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const accessTokenPayload = {
      userId: user.id_usuario,
      userType: user.id_tipo_usuario,
      userName: user.nombre,
    };

    const refreshTokenPayload = {
      userId: user.id_usuario,
    };

    const accessToken = jwt.sign(accessTokenPayload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign(refreshTokenPayload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

    res.status(200).json({ message: 'Inicio de sesión exitoso', access_token: accessToken, refresh_token: refreshToken });
    
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
}

async function refrescarToken(req, res) {
  const { refresh_token } = req.body;

  try {
    const decodedRefreshToken = jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET);

    const accessTokenPayload = {
      userId: decodedRefreshToken.userId,
    };

    const accessToken = jwt.sign(accessTokenPayload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

    res.status(200).json({ access_token: accessToken });
  } catch (error) {
    res.status(401).json({ message: 'Token de actualización inválido o expirado' });
  }
}

module.exports = {
  loginUser,
  refrescarToken
};
