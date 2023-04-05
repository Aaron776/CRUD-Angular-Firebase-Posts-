import { Component,OnInit } from '@angular/core';
//importamos el servicio
import { PostService } from 'src/app/post.service';
//importamos los modulos para formularios
import { FormBuilder, FormGroup } from '@angular/forms';
//importamos el enrutador
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public editarFormulario: FormGroup;
  postReferencia:any

  constructor(public postService:PostService,public formBuilder:FormBuilder,private activeRoute: ActivatedRoute,private router: Router) {
    this.editarFormulario = this.formBuilder.group({
      titulo: [''],
      contenido: [''],
      autor: ['']
    })
   }

   ngOnInit(): void {
    console.log(this.activeRoute.snapshot.params) //desde aqui sacamos el id
    const id = this.activeRoute.snapshot.paramMap.get('id');

    this.postService.obtenerPostPorId(id).subscribe(res => {
      this.postReferencia = res;
      this.editarFormulario = this.formBuilder.group({
        titulo: [this.postReferencia.titulo],
        contenido: [this.postReferencia.contenido],
        autor: [this.postReferencia.autor]        
      })            
    })
  }

  enviarInformacion() {
    const id = this.activeRoute.snapshot.paramMap.get('id');   

    this.postService.actualizarPost(this.editarFormulario.value, id);
    this.router.navigate(['']);
    console.log(this.editarFormulario.value) //podemos ver los valores capturados
  }
}
