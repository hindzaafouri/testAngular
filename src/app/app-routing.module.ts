import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { AjouterVideoComponent } from './ajouter-video/ajouter-video.component';

const routes: Routes = [
  {
    path:"" , component:VideoComponent 
  }, 
  { path: 'ajouter-video', component: AjouterVideoComponent },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
