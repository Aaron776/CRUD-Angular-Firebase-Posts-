import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Impotamos los componentes que creamos
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  {
    path: '',
    component: ShowComponent
  },
  {
    path: 'crear',
    component: CreateComponent
  },
  {
    path: 'editar/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
