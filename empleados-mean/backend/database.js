const { url } = require('inspector');
const mongoose = require('mongoose');

//definimos la ruta de la conexion
 const URI = 'mongodb://localhost/crud-mean-empleados';

 //realizamos la conexion y con una promesa vemos por consola si esta conectada
mongoose.connect(URI)
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));

//exportamos
module.exports = mongoose;