import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectionRoutingModule } from './selection-routing.module';
import { SelectionHomeComponent } from './containers/selection-home/selection-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAlertModule, NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { GeneralService } from '../providers';


@NgModule({
  declarations: [
    SelectionHomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectionRoutingModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbFormFieldModule,
    NbAlertModule,
    NbSpinnerModule,
    NbSelectModule
  ],
  exports: [],
  providers: [GeneralService]
})
export class SelectionModule { }
