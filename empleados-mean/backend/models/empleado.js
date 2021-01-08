const mongoose = require('mongoose');
const {Schema} = mongoose;

//creo el esquema(como una clase)
const EmpleadoSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    dni: {type: String, required: true},
    telefono: {type: String, required: true},
})

//le mando como se llamara y cual sera el esquema a mongodb y como tengo q usarlo en otros lados lo exporto
module.exports = mongoose.model('Empleado', EmpleadoSchema);