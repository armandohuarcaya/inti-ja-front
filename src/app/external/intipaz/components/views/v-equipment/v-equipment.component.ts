import { Component, OnInit } from '@angular/core';
import { DataJsonService } from '../../../services/data-json.service';
import { NbDialogService } from '@nebular/theme';
import { MCotegoriasComponent } from '../../modals/m-cotegorias/m-cotegorias.component';
import { MParticipantsEquipmentComponent } from '../../modals/m-participants-equipment/m-participants-equipment.component';

@Component({
  selector: 'app-v-equipment',
  templateUrl: './v-equipment.component.html',
  styleUrls: ['./v-equipment.component.scss']
})
export class VEquipmentComponent implements OnInit {
  data:any = [];
  constructor(private consume: DataJsonService, private nbDialogService: NbDialogService) {}
  ngOnInit() {
    this.listEquipos();
  }
  listEquipos() {
    this.consume.getEquipement$().subscribe((res:any) => {
      this.data = res.data || [];
      console.log(this.data, 'SALE POLLO');
    });
  }
  openParticipants() {
    this.nbDialogService.open(MParticipantsEquipmentComponent, {
      dialogClass: 'dialog-limited-height',
      context: {

      },
      closeOnBackdropClick: false,
      closeOnEsc: false,
    })
    .onClose.subscribe((result:any) => {
    });
  }
}
