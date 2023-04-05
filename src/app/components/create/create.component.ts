import { Component,OnInit } from '@angular/core';
//importamos el servicio
import { PostService } from 'src/app/post.service';
//importamos los modulos para formularios
import { FormBuilder, FormGroup } from '@angular/forms';
//importamos el enrutador
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  public postFormulario:FormGroup

  constructor(public postService:PostService,public formBuilder:FormBuilder,public router:Router){
    this.postFormulario=this.formBuilder.group({ // aqui inicializo los campos del formulario
      titulo: [''],
      contenido: [''],
      autor: ['']
    }) 
  }
  ngOnInit(): void {
  }

  enviarFormulario() {
    console.log(this.postFormulario) // aqui veo en consola los datos que ingreso al formulario al dar click en guardar
    this.postService.crearPost(this.postFormulario.value)
    this.router.navigate([''])
  }

}
