const mongoose = require('mongoose');
const URI = 'mongodb://localhost/proyectodb2024';

// Comando de conexion a la base de datos
mongoose.connect(URI)
    .then(db => console.log('DB esta connectado'))
    .catch(err => console.error(err))
module.exports = mongoose;