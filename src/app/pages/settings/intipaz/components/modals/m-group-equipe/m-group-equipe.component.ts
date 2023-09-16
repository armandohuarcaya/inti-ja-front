import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';
import { DialogConfimComponent } from 'src/app/shared/components/dialog-confim/dialog-confim.component';

@Component({
  selector: 'app-m-group-equipe',
  templateUrl: './m-group-equipe.component.html',
  styleUrls: ['./m-group-equipe.component.scss']
})
export class MGroupEquipeComponent implements OnInit {
  loading: boolean = false;
  formHeaders:any = FormGroup;
  formHeadersTwo:any = FormGroup;
  periodos:any = [];
  periodosTwo:any = [];
  diciplinas:any = [];
  categorias:any = [];
  equipos:any = [];
  grupos:any = [];
  gruposTwo:any = [];
  constructor(public activeModal: NbDialogRef<MGroupEquipeComponent>, private service: GeneralService, private fb: FormBuilder,
    private nbDialogService: NbDialogService, private datePipe: DatePipe) {}
  ngOnInit() {
    this.formFields();
    this.formFieldsTwo();
    this.getPeriodos();
    this.getPeriodosTwo();
  }
  private formFields() {
    const controls = {
      id_periodo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      estado: [true, [Validators.required]],
    };
    this.formHeaders = this.fb.group(controls);
  }
  private formFieldsTwo() {
    const controls = {
      id_periodo: ['', [Validators.required]],
      id_diciplina: ['', [Validators.required]],
      id_categoria: ['', [Validators.required]],
      id_grupo: ['', [Validators.required]],
    };
    this.formHeadersTwo = this.fb.group(controls);
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
        this.getGrupos();
      }
    });
  }
  selectedPeriodo() {
    this.getGrupos();
  }
  getGrupos() {
    const serviceName = END_POINTS.el_inti.filterComun + '/groups';
    const params = {
      id_periodo: this.formHeaders.value.id_periodo,
    };
    this.service.nameParams$(serviceName, params).subscribe((res:any) => {
      this.grupos = res.data || [];
    });
  }
  saveGroups() {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/groups';
    const forms = this.formHeaders.value;
    const params = {
      id_periodo: forms.id_periodo,
      nombre: forms.nombre,
      estado: forms.estado,
    };
    if (params.id_periodo && params.nombre) {
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
                this.formHeaders.controls['nombre'].setValue('');
                this.formHeadersTwo.controls['id_grupo'].setValue('');
                this.getGrupos();
              }
            }, () => {this.loading = false}, () => {this.loading = false},);
        }
      });
    }
  }

  getPeriodosTwo() {
    const serviceName = END_POINTS.el_inti.filterComun + '/periodos';
    const params = {
      estado: '1',
      id_tipo_evento: 1,
    };
    this.service.nameParams$(serviceName, params).subscribe((res:any) => {
      this.periodosTwo = res.data || [];
      if (this.periodosTwo.length>0) {
        this.formHeadersTwo.controls['id_periodo'].setValue(this.periodosTwo[0].id_periodo);
        this.getDiciplinas();
        this.getCategorias();
        this.getEquipos();
        this.getGruposTwo();
      }
    });
  }
  selectedPeriodoTwo() {
    this.formHeadersTwo.controls['id_grupo'].setValue('');
    this.gruposTwo = [];
    this.getGruposTwo();
  }
  getDiciplinas() {
    const serviceName = END_POINTS.el_inti.filterComun + '/diciplines';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.diciplinas = res.data || [];
      if (this.diciplinas.length>0) {
        this.formHeadersTwo.controls['id_diciplina'].setValue(this.diciplinas[0].id_diciplina);
        // this.getFases();
      }
    });
  }
  getCategorias() {
    const serviceName = END_POINTS.el_inti.filterComun + '/categories';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.categorias = res.data || [];
      if (this.categorias.length>0) {
        this.formHeadersTwo.controls['id_categoria'].setValue(this.categorias[0].id_categoria);
        // this.getGrupos();
        // this.filterEquis();
      }
    });
  }
  getGruposTwo() {
    const serviceName = END_POINTS.el_inti.filterComun + '/groups';
    const params = {
      id_periodo: this.formHeadersTwo.value.id_periodo,
    };
    this.service.nameParams$(serviceName, params).subscribe((res:any) => {
      this.gruposTwo = res.data || [];
    });
  }
  getEquipos() {
    const serviceName = END_POINTS.el_inti.filterComun + '/equipes';
    const params = {
      id_iglesia: 1,
      id_periodo: this.formHeadersTwo.value.id_periodo,
    };
    this.service.nameParams$(serviceName, params).subscribe((res:any) => {
      this.equipos = res.data || [];
      if (this.equipos.length>0) {
        this.equipos.map((g:any) => {
          g.checked = false;
        })
      }
    });
  }
  get validArray() {
    let ayyar:any = [];
    if (this.equipos.length>0) {
      ayyar = this.equipos.filter((a:any) => a.checked);
    }
    return ayyar;
  }
  
  save(value:any) {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/group-equipe';
    const forms = this.formHeadersTwo.value;
    const params = {
      id_periodo: forms.id_periodo,
      id_categoria: forms.id_categoria,
      id_diciplina: forms.id_diciplina,
      id_grupo: forms.id_grupo,
      array_equipo: this.equipos.filter((a:any) => a.checked),
    };
    if (this.formHeadersTwo.valid && params.array_equipo.length>0) {
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
                  this.getEquipos();
                }
              }
            }, () => {this.loading = false}, () => {this.loading = false},);
        }
      });
    }
  }
}
