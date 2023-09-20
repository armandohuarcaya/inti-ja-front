import { Component, OnInit, Input } from '@angular/core';
import { DataJsonService } from '../../../services/data-json.service';
import { NbDialogService } from '@nebular/theme';
import { MCotegoriasComponent } from '../../modals/m-cotegorias/m-cotegorias.component';
import { MParticipantsEquipmentComponent } from '../../modals/m-participants-equipment/m-participants-equipment.component';
import { END_POINTS } from 'src/app/providers/utils';
import { GeneralService } from 'src/app/providers';

@Component({
  selector: 'app-v-equipment',
  templateUrl: './v-equipment.component.html',
  styleUrls: ['./v-equipment.component.scss']
})
export class VEquipmentComponent implements OnInit {
  data:any = [];
  loading:boolean = false;
  @Input() idPeriodo:any;
  constructor(private consume: DataJsonService, private nbDialogService: NbDialogService, private service: GeneralService) {}
  ngOnInit() {
    this.listEquipos();
  }
  listEquipos() {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/equipements';
    const params = {
      id_periodo: this.idPeriodo,
    };
    this.loading = true;
    if (params.id_periodo) {
      this.service.nameParams$(serviceName, params).subscribe((res:any) => {
        this.data = res.data || [];
      }, () => this.loading = false, () => this.loading = false);
    }
  }
  // listEquipos() {
  //   this.consume.getEquipement$().subscribe((res:any) => {
  //     this.data = res.data || [];
  //     console.log(this.data, 'SALE POLLO');
  //   });
  // }
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
