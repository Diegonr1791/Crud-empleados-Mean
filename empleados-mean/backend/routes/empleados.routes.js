const express = require('express');
const router = express.Router();
//importo el controlador de empleados
const empleado = require('../controllers/empleado.controller');

//creamos las rutas

router.get('/',empleado.getEmpleados);
router.post('/',empleado.createEmpleado);
router.get('/:id', empleado.obtenerEmpleado);
router.put('/:id',empleado.actualizarEmpleado);
router.delete('/:id',empleado.eliminarEmpleado);

//devolvemos las rutas
module.exports = router;