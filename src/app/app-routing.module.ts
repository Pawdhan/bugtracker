import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponentComponent } from './base-component/base-component.component';


const routes: Routes = [
  {
    path: 'createbug',
    component: BaseComponentComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
