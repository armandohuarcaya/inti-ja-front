import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntipazRoutingModule } from './intipaz-routing.module';
import { IntipazHomeComponent } from './containers/intipaz-home.component';
import { NebularModule } from 'src/app/shared/nebular.module';
import { IntipazComponent } from './intipaz.component';
import { NbLayoutModule } from '@nebular/theme';
import { VEquipmentComponent } from './components/views/v-equipment/v-equipment.component';
import { VGroupsComponent } from './components/views/v-groups/v-groups.component';
import { MParticipantsEquipmentComponent } from './components/modals/m-participants-equipment/m-participants-equipment.component';
import { MCotegoriasComponent } from './components/modals/m-cotegorias/m-cotegorias.component';
import { VTablePositionComponent } from './components/views/v-table-position/v-table-position.component';
import { VPartitiesComponent } from './components/views/v-partities/v-partities.component';
import { VOrganigramaComponent } from './components/views/v-organigrama/v-organigrama.component';
import { VStadisticsComponent } from './components/views/v-stadistics/v-stadistics.component';
import { GeneralService } from 'src/app/providers';


@NgModule({
  declarations: [
    IntipazComponent,
    IntipazHomeComponent,
    VEquipmentComponent,
    VGroupsComponent,
    MParticipantsEquipmentComponent,
    MCotegoriasComponent,
    VTablePositionComponent,
    VPartitiesComponent,
    VOrganigramaComponent,
    VStadisticsComponent
  ],
  imports: [
    CommonModule,
    IntipazRoutingModule,
    NebularModule,
    NbLayoutModule
  ],
  providers: [GeneralService]
})
export class IntipazModule { }
