import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntipazComponent } from './intipaz.component';
import { IntipazHomeComponent } from './containers/intipaz-home.component';

const routes: Routes = [
  {
    path: '',
    component: IntipazComponent,
    children: [
      {
        path: '',
        component: IntipazHomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntipazRoutingModule { }
