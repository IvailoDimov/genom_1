import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenesComponent } from './genes/genes.component';
import { Genes2Component } from './genes2/genes2.component';


const routes: Routes = [
  {path:'Genes', component : GenesComponent},
  {path:'Genes2', component : Genes2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
