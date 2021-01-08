//requerimos el modelo de datos empleado
const { json } = require('express');
const Empleado = require('../models/empleado');

const empleadoCtrl = {};

//aca se crean los metodos que van en las rutas
empleadoCtrl.getEmpleados = async (req, res) => {
   //consultamos a la bd todos los empleados(con async y await mejor metodo que las callback y promesas)
    const empleados = await Empleado.find();
    res.json(empleados);
};

empleadoCtrl.createEmpleado = async (req, res) => {
    const empleadox = new Empleado({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        telefono: req.body.telefono
    });
    console.log(empleadox);
    await empleadox.save();
    res.json({
        'status': 'Empleado guardado'
    })
};

empleadoCtrl.obtenerEmpleado = async (req, res) => {
    const empleadoid = await Empleado.findById(req.params.id);
    console.log(req.params.id);
    res.json(empleadoid);
};

empleadoCtrl.actualizarEmpleado = async (req, res) => {
    const {id} = req.params;
    const empleado = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        telefono: req.body.telefono
    };

    await Empleado.findByIdAndUpdate(id,{$set: empleado},{new: true});

    res.json({'status': 'Empleado actualizado'});
};

empleadoCtrl.eliminarEmpleado =async (req, res) => {
    
    await Empleado.findByIdAndDelete(req.params.id);
    
    res.json({
        status: 'Empleado eliminado'
    });
};

module.exports = empleadoCtrl;