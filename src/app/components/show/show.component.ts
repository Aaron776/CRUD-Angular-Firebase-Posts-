import { PostService } from './../../post.service';
import { Post } from './../../post.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {
  Posts:Post[];
  constructor(private postService: PostService) {}

  //el metodo ngOnInit ejecuta todo una vez que la pagina ya está renderizada (cuando el componente ha sido inicializado) , mientas que el constructor() se ejecuta antes
  ngOnInit(): void {        
    console.log(this.postService.obtenerPosts())
    
    this.postService.obtenerPosts().subscribe((x)=>{ //traemos un observable a la vista del show html, aqui traemos los registros de la base de datos firebase
      this.Posts=x.map(index=>{
        return {
          id:index.payload.doc.id,
          ...(index.payload.doc.data() as Post)
        }
      })
        console.log(this.Posts)
    })
  } 

  borrarRegistro(index){
    this.postService.eliminarPost(index)
  }

}
