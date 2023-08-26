import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionHomeComponent } from './containers/selection-home/selection-home.component';

const routes: Routes = [
  {
      path: '',
      component: SelectionHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectionRoutingModule { }
