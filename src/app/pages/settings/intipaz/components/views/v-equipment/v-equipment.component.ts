import { Component, OnInit } from '@angular/core';
import { DataJsonService } from '../../../services/data-json.service';
import { NbDialogService } from '@nebular/theme';
import { MCotegoriasComponent } from '../../modals/m-cotegorias/m-cotegorias.component';
import { MParticipantsEquipmentComponent } from '../../modals/m-participants-equipment/m-participants-equipment.component';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-v-equipment',
  templateUrl: './v-equipment.component.html',
  styleUrls: ['./v-equipment.component.scss']
})
export class VEquipmentComponent implements OnInit {
  data:any = [];
  periodos:any = [];
  formHeaders:any = FormGroup;
  loading:boolean = false;
  constructor(private consume: DataJsonService, private nbDialogService: NbDialogService, private service: GeneralService, private fb: FormBuilder) {}
  ngOnInit() {
    this.formFields();
    this.getPeriodos();
  }
  private formFields() {
    const controls = {
      id_periodo: ['', [Validators.required]],
    };
    this.formHeaders = this.fb.group(controls);
  }
  // listEquipos() {
  //   this.consume.getEquipement$().subscribe((res:any) => {
  //     this.data = res.data || [];
  //     console.log(this.data, 'SALE POLLO');
  //   });
  // }
  getPeriodos() {
    const serviceName = END_POINTS.el_inti.filterComun + '/periodos';
    const params = {
      estado: '1',
      id_tipo_evento: 1,
    };
    this.service.nameParams$(serviceName, params).subscribe((res:any) => {
      this.periodos = res.data || [];
      if (this.periodos.length>0) {
        this.formHeaders.controls['id_periodo'].setValue(this.periodos[0].id_periodo);
        this.listEquipos();
      }
    });
  }
  filters() {
    this.listEquipos();
  }
  listEquipos() {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/equipements';
    const params = {
      id_periodo: this.formHeaders.value.id_periodo,
    };
    this.loading = true;
    if (params.id_periodo) {
      this.service.nameParams$(serviceName, params).subscribe((res:any) => {
        this.data = res.data || [];
      }, () => this.loading = false, () => this.loading = false);
    }
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
