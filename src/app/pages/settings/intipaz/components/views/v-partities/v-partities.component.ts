import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';
import { MPartitiesComponent } from '../../modals/m-partities/m-partities.component';
import { DialogConfimComponent } from 'src/app/shared/components/dialog-confim/dialog-confim.component';

@Component({
  selector: 'app-v-partities',
  templateUrl: './v-partities.component.html',
  styleUrls: ['./v-partities.component.scss']
})
export class VPartitiesComponent implements OnInit {
  formHeaders:any = FormGroup;
  loading:boolean = false;
  periodos:any = [];
  diciplinas:any = [];
  categorias:any = [];
  fases:any = [];
  data:any = [];
  constructor(private service: GeneralService, private fb: FormBuilder, private nbDialogService: NbDialogService) {}
  ngOnInit() {
    this.formFields();
    this.getPeriodos();
  }
  private formFields() {
    const controls = {
      id_periodo: ['', [Validators.required]],
      id_diciplina: ['', [Validators.required]],
      id_categoria: [''],
      id_fase: ['', [Validators.required]],
    };
    this.formHeaders = this.fb.group(controls);
  }
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
        this.getDiciplinas();
        this.getCategorias();
      }
    });
  }
  getDiciplinas() {
    const serviceName = END_POINTS.el_inti.filterComun + '/diciplines';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.diciplinas = res.data || [];
      if (this.diciplinas.length>0) {
        this.formHeaders.controls['id_diciplina'].setValue(this.diciplinas[0].id_diciplina);
        this.getFases();
      }
    });
  }
  getFases() {
    const serviceName = END_POINTS.el_inti.filterComun + '/fases';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.fases = res.data || [];
      if (this.fases.length>0) {
        this.formHeaders.controls['id_fase'].setValue(this.fases[0].id_fase);
        this.listPartities();
      }
    });
  }
  getCategorias() {
    const serviceName = END_POINTS.el_inti.filterComun + '/categories';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.categorias = res.data || [];
    });
  }
  filters() {
    this.listPartities();
  }
  listPartities() {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/partities';
    const params = {
      id_periodo: this.formHeaders.value.id_periodo,
      id_diciplina: this.formHeaders.value.id_diciplina,
      id_categoria: this.formHeaders.value.id_categoria,
      id_fase: this.formHeaders.value.id_fase,
    };
    this.loading = true;
    if (params.id_periodo && params.id_diciplina && params.id_fase) {
      this.service.nameParams$(serviceName, params).subscribe((res:any) => {
        this.data = res.data || [];
      }, () => this.loading = false, () => this.loading = false);
    }
  }
  openPartities() {
    this.nbDialogService.open(MPartitiesComponent, {
      dialogClass: 'dialog-limited-height',
      context: {
        filter: this.formHeaders.value,
        ordenLegth: this.data.length,
      },
      closeOnBackdropClick: false,
      closeOnEsc: false,
    })
    .onClose.subscribe((result:any) => {
      if (result === 'ok') {
        this.listPartities();
      }
    });
  }
  start(item:any) {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/start-partities';
    const params = {
      finalizado: 'J',
    };
    this.nbDialogService.open(DialogConfimComponent, {
      dialogClass: 'dialog-limited-height',
      context: {
        tittle: 'INICIAR PARTIDO',
        text: '¿ Estas seguro que deseas iniciar ?',
        icon: 'save-outline',
        colorIcon: 'success',
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: 'primary',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
      },
      closeOnBackdropClick: false,
      closeOnEsc: false,
    })
    .onClose.subscribe((result:any) => {
      if (result.isConfirmed) {
          this.loading = true;
          this.service.updateNameIdData$(serviceName, item.id_partido, params).subscribe(r => {
            if (r.success) {
              item.finalizado = 'J';
            }
          }, () => {this.loading = false}, () => {this.loading = false});
      }
    });
  }
  resultado(item:any, value:any) {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/result-partities';
    const params = {
      resultado: value === 'plus' ? (Number(item.puntos) + 1) : (Number(item.puntos) - 1),
    };
    this.loading = true;
    this.service.updateNameIdData$(serviceName, item.id_partido_detalle, params).subscribe(r => {
      if (r.success) {
        item.puntos = value === 'plus' ? (Number(item.puntos) + 1) : (Number(item.puntos) - 1)
      }
    }, () => {this.loading = false}, () => {this.loading = false});
  }
  finish(item:any) {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/finish-partities';
    const params = {
      finalizado: 'F',
    };
    this.nbDialogService.open(DialogConfimComponent, {
      dialogClass: 'dialog-limited-height',
      context: {
        tittle: 'FINALIZAR PARTIDO',
        text: '¿ Estas seguro que deseas finalizar ?',
        icon: 'save-outline',
        colorIcon: 'success',
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: 'primary',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
      },
      closeOnBackdropClick: false,
      closeOnEsc: false,
    })
    .onClose.subscribe((result:any) => {
      if (result.isConfirmed) {
          this.loading = true;
          this.service.updateNameIdData$(serviceName, item.id_partido, params).subscribe(r => {
            if (r.success) {
              item.finalizado = 'F';
            }
          }, () => {this.loading = false}, () => {this.loading = false},);
      }
    });
  }
}
