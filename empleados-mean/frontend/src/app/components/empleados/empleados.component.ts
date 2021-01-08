import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

declare var M: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[];
  selectedEmpleado: Empleado;
  constructor(private empleadoService: EmpleadoService) { 
    this.selectedEmpleado = new Empleado('','','','','');
  }

  ngOnInit(): void {

    this.getEmpleados();
  }

  //Agregar Empleado
  addEmpleado(form: NgForm): void{
    if(form.value._id){
      this.empleadoService.putEmpleado(form.value).subscribe(
        res =>{
          this.resetForm(form);
          M.toast({html: 'Empleado editado correctamente'});
          this.getEmpleados();
        }
      )
    }else{
      console.log(form.value);
      this.empleadoService.postEmpleados(form.value).subscribe(
        res =>{
          this.resetForm(form);
          M.toast({html: 'Empleado guardado satisfactoriamente'});
          this.getEmpleados();
        });
    }
    
  };

  //Obtener array empleados
  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe(
      res =>{
        this.empleados = res as Empleado[];
      });
  };

  //editar Empleado
  editEmpleado(empleado: Empleado){
    this.selectedEmpleado = empleado;
  };

  //eliminar empleado
  deleteEmpleado(_id: string){

    if(confirm('Eliminar Empleado')){
      this.empleadoService.deleteEmpleado(_id).subscribe(
        res =>{
          M.toast({html: 'Empleado eliminado satisfactoriamente'});
          this.getEmpleados();
        }
      )
    }
  

  };

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.selectedEmpleado = new Empleado('','','','','');
    }
  };
}
