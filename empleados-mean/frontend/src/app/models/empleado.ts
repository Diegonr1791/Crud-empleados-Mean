export class Empleado {
    constructor(_id: '', nombre: '', apellido: '', dni: '', telefono: ''){
        this._id = _id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.telefono = telefono;
    }
    _id: string;
    nombre: string;
    apellido: string;
    dni: string;
    telefono: string;
}
