import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore:AngularFirestore) {}

  //Metodos para el CRUD

  obtenerPosts(){
    return this.angularFirestore.collection('posts').snapshotChanges()
  }

  obtenerPostPorId(id){
    return this.angularFirestore.collection("posts").doc(id).valueChanges()
  }

  crearPost(post:Post){
    return new Promise <any> ((resolve,reject)=>{
      this.angularFirestore.collection("posts").add(post).then(res=>{
        console.log(res)
      },
      (error)=>{
        reject(error)
      })
    })
  }

  actualizarPost(post:Post,id){
    return this.angularFirestore.collection('posts').doc(id).update({
      titulo:post.titulo,
      autor:post.autor,
      contenido:post.contenido
    })
  }

  eliminarPost(post){
    return this.angularFirestore.collection('posts').doc(post.id).delete()
  }


}
