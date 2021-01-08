import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Empleado } from '../models/empleado';


const URL = 'http://localhost:3000/api/empleados/'
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {


  constructor(private http: HttpClient) {
    
   }

  getEmpleados(){
    return this.http.get(URL);
  }

  postEmpleados(empleado: Empleado){
    return this.http.post(URL, empleado);
  }

  putEmpleado(empleado: Empleado){
    return this.http.put(URL + '/'+ empleado._id, empleado);
  }

  deleteEmpleado(_id: string){
    return this.http.delete(URL + '/' + _id)
  }
}
