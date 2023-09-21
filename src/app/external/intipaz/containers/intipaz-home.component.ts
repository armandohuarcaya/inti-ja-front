import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';

@Component({
  selector: 'app-intipaz-home',
  templateUrl: './intipaz-home.component.html',
  styleUrls: ['./intipaz-home.component.scss']
})
export class IntipazHomeComponent implements OnInit {
  views:any = 'equipos';
  // periodos:any = [];
  periodos:any = [];
  fases:any = [];
  formHeaders:any = FormGroup;
  constructor(private router: Router, private service: GeneralService, private nbDialogService: NbDialogService, private fb: FormBuilder) {}
  ngOnInit() {
    this.formFields();
    this.getPeriodos();
    this.getFases();
  }
  private formFields() {
    const controls = {
      id_periodo: ['', [Validators.required]],
      id_fase: ['', [Validators.required]],
    };
    this.formHeaders = this.fb.group(controls);
  }
  selectOption(value:any) {
    this.views = value;
  }
  login() {
    this.router.navigate(['/login']);
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
      }
    });
  }
  getFases() {
    const serviceName = END_POINTS.el_inti.filterComun + '/fases';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.fases = res.data || [];
      if (this.fases.length>0) {
        this.formHeaders.controls['id_fase'].setValue(this.fases[0].id_fase);
      }
    });
  }
  open(dialog: TemplateRef<any>) {
    this.nbDialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }
}
