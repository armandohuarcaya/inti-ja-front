import { NgModule } from '@angular/core';
import {
  NbAlertModule,
  NbBadgeModule,
  NbButtonGroupModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbPopoverModule,
  NbProgressBarModule,
  NbRadioModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbToggleModule,
  NbTooltipModule,
  NbStepperModule,
  NbAutocompleteModule,
  NbTimepickerModule,
  NbAccordionModule,
  NbContextMenuModule,
  NbUserModule
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbDateFnsDateModule } from '@nebular/date-fns';
const ANGULAR: any[] = [CommonModule, FormsModule, ReactiveFormsModule];

const COMPONENTS: any[] = [
  NbCardModule,
  NbTabsetModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbRadioModule,
  NbCheckboxModule,
  NbTooltipModule,
  NbToggleModule,
  NbDialogModule.forChild(),
  NbAlertModule,
  NbListModule,
  NbSpinnerModule,
  NbProgressBarModule,
  NbFormFieldModule,
  NbButtonGroupModule,
  NbBadgeModule,
  NbPopoverModule,
  NbStepperModule,
  NbAutocompleteModule,
  NbDatepickerModule.forRoot(),
  NbDateFnsDateModule,
  NbTimepickerModule.forRoot(),
  NbAccordionModule,
  NbContextMenuModule,
  NbUserModule
];

@NgModule({
  declarations: [],
  imports: [...ANGULAR, ...COMPONENTS,],
  exports: [...ANGULAR, ...COMPONENTS],
})
export class NebularModule {}
