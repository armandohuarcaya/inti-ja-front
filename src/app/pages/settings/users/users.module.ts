import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersHomeComponent } from './containers/users-home.component';
import { NbCardModule } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';

const COMPONENTS: any[] = [
  UsersComponent,
  UsersHomeComponent
];
const NB_MODULES: any[] = [
  NbCardModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ...NB_MODULES
  ],
  providers: [GeneralService]
})
export class UsersModule { }
