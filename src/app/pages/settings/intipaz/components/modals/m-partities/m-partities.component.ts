import { DatePipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';
import { DialogConfimComponent } from 'src/app/shared/components/dialog-confim/dialog-confim.component';

@Component({
  selector: 'app-m-partities',
  templateUrl: './m-partities.component.html',
  styleUrls: ['./m-partities.component.scss']
})
export class MPartitiesComponent implements OnInit {
  loading: boolean = false;
  formHeaders:any = FormGroup;
  @Input() filter:any;
  @Input() ordenLegth:number = 0;
  periodos:any = [];
  diciplinas:any = [];
  categorias:any = [];
  fases:any = [];
  grupos:any = [];
  equiposPartities:any = [];
  constructor(public activeModal: NbDialogRef<MPartitiesComponent>, private service: GeneralService, private fb: FormBuilder,
    private nbDialogService: NbDialogService, private datePipe: DatePipe) {}

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
      fase_codigo: ['', [Validators.required]],
      id_grupo: [''],
      fecha: ['', [Validators.required]],
      hora_inicio: ['', [Validators.required]],
      hora_fin: ['', [Validators.required]],
      orden: [(this.ordenLegth + 1) || 0, [Validators.required]],
      id_grupo_equipo_a: ['', [Validators.required]],
      id_grupo_equipo_b: ['', [Validators.required]],
    };
    this.formHeaders = this.fb.group(controls);
  }
  closeModal() {
    this.activeModal.close('close');
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
  selectedPeriodo() {
    this.filterEquis();
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
  selectedDiciplina() {
    this.filterEquis();
  }
  getFases() {
    const serviceName = END_POINTS.el_inti.filterComun + '/fases';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.fases = res.data || [];
      if (this.fases.length>0) {
        this.formHeaders.controls['id_fase'].setValue(this.fases[0].id_fase);
        this.formHeaders.controls['fase_codigo'].setValue(this.fases[0].codigo);
        if (this.fases[0].codigo === 'FDGPS') {
          this.updateValidityRequiredNoRequired(['id_grupo'], true);
        } else {
          this.updateValidityRequiredNoRequired(['id_grupo'], false);
        }
        this.getCategorias();
      }
    });
  }
  changeFase(item:any) {
    this.formHeaders.controls['fase_codigo'].setValue(item.codigo);
    if (item.codigo === 'FDGPS') {
      this.updateValidityRequiredNoRequired(['id_grupo'], true);
    } else {
      this.updateValidityRequiredNoRequired(['id_grupo'], false);
    }
  }
  getCategorias() {
    const serviceName = END_POINTS.el_inti.filterComun + '/categories';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.categorias = res.data || [];
      if (this.categorias.length>0) {
        this.formHeaders.controls['id_categoria'].setValue(this.categorias[0].id_categoria);
        this.getGrupos();
        this.filterEquis();
      }
    });
  }
  selectedCategoria() {
    this.filterEquis();
  }
  getGrupos() {
    const serviceName = END_POINTS.el_inti.filterComun + '/groups';
    const params = {
      id_periodo: this.formHeaders.value.id_periodo,
    };
    this.service.nameParams$(serviceName, params).subscribe((res:any) => {
      this.grupos = res.data || [];
      // if (this.grupos.length>0) {
      //   this.formHeaders.controls['id_grupo'].setValue(this.grupos[0].id_grupo);
      // }
    });
  }
  selectedGrupos() {
    this.filterEquis();
  }
  updateValidityRequiredNoRequired(array:any[], required:boolean) {
    array.forEach(element => {
      if (required) {
        this.formHeaders.controls[element].setValue('');
        this.formHeaders.controls[element].setValidators([Validators.required]);
        this.formHeaders.controls[element].updateValueAndValidity();
      } else {
        this.formHeaders.controls[element].setValue('');
        this.formHeaders.controls[element].setValidators([]);
        this.formHeaders.controls[element].updateValueAndValidity();
      }
    });
  }
  orden(value:any) {
    if (value === 'plus') {
      this.formHeaders.controls['orden'].setValue(Number(this.formHeaders.value.orden) + 1);
    } else {
      this.formHeaders.controls['orden'].setValue(Number(this.formHeaders.value.orden) - 1);
    }
  }
  filterEquis() {
    this.formHeaders.controls['id_grupo_equipo_a'].setValue('');
    this.formHeaders.controls['id_grupo_equipo_b'].setValue('');
    this.equiposPartities = [];
    this.getGroupEquipement();
  }
  getGroupEquipement() {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/equipo-partities';
    const params = {
      id_periodo: this.formHeaders.value.id_periodo,
      id_diciplina: this.formHeaders.value.id_diciplina,
      id_categoria: this.formHeaders.value.id_categoria,
      id_grupo: this.formHeaders.value.id_grupo,
    };
    if (params.id_periodo && params.id_diciplina && params.id_categoria) {
      this.service.nameParams$(serviceName, params).subscribe((res:any) => {
        this.equiposPartities = res.data || [];
      });
    }
  }
  save(value:any) {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/partities';
    const forms = this.formHeaders.value;
    const params = {
      fecha: this.datePipe.transform(forms.fecha, 'yyyy-MM-dd'),
      hora_inicio: this.datePipe.transform(forms.hora_inicio, 'HH:mm'),
      hora_fin: this.datePipe.transform(forms.hora_fin, 'HH:mm'),
      id_periodo: forms.id_periodo,
      id_fase: forms.id_fase,
      id_grupo: forms.id_grupo,
      id_categoria: forms.id_categoria,
      id_diciplina: forms.id_diciplina,
      orden: forms.orden,
      array_id_grupo_equipo: [
        {
          id_grupo_equipo: forms.id_grupo_equipo_a
        },
        {
          id_grupo_equipo: forms.id_grupo_equipo_b
        }
      ]
    };
    if (this.formHeaders.valid) {
      this.nbDialogService.open(DialogConfimComponent, {
        dialogClass: 'dialog-limited-height',
        context: {
          tittle: 'REGISTRAR',
          text: '¿ Estas seguro que deseas registrar ?',
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
            this.service.addNameData$(serviceName, params).subscribe(r => {
              if (r.success) {
                if (value === 'GF') {
                  this.activeModal.close('ok');
                } else {
                  this.filterEquis();
                  this.formHeaders.controls['orden'].setValue(Number(this.formHeaders.value.orden) + 1);
                }
              }
            }, () => {this.loading = false}, () => {this.loading = false},);
        }
      });
    }
  }
}
