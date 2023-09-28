import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataJsonService } from '../../../services/data-json.service';
import { NbDialogService } from '@nebular/theme';
import { MParticipantsEquipmentComponent } from '../../modals/m-participants-equipment/m-participants-equipment.component';
import { END_POINTS } from 'src/app/providers/utils';
import { GeneralService } from 'src/app/providers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-v-equipment',
  templateUrl: './v-equipment.component.html',
  styleUrls: ['./v-equipment.component.scss']
})
export class VEquipmentComponent implements OnInit, OnChanges {
  formHeaders:any = FormGroup;
  data:any = [];
  loading:boolean = false;
  @Input() idPeriodo:any;
  @Input() refresh:number = 0;
  constructor(private consume: DataJsonService, private nbDialogService: NbDialogService, private service: GeneralService, private fb: FormBuilder) {}
  ngOnChanges():void {
    if (this.idPeriodo || this.refresh) {
      setTimeout(() => {
        this.listEquipos();
      }, 100);
    }
  }
  ngOnInit() {
    this.formFields();
  }
  private formFields() {
    const controls = {
      id_periodo: [this.idPeriodo || '', [Validators.required]],
    };
    this.formHeaders = this.fb.group(controls);
  }
  listEquipos() {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/equipements';
    const params = {
      id_periodo: this.idPeriodo,
    };
    if (params.id_periodo) {
      this.loading = true;
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
