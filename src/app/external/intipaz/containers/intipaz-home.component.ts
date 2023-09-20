import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  id_periodo = 1;
  constructor(private router: Router, private service: GeneralService) {}
  ngOnInit(): void {
    // this.getPeriodos();
  }
  selectOption(value:any) {
    this.views = value;
  }
  login() {
    this.router.navigate(['/login']);
  }
  // getPeriodos() {
  //   const serviceName = END_POINTS.el_inti.filterComun + '/periodos';
  //   const params = {
  //     estado: '1',
  //     id_tipo_evento: 1,
  //   };
  //   this.service.nameParams$(serviceName, params).subscribe((res:any) => {
  //     this.periodos = res.data || [];
  //     if (this.periodos.length>0) {
  //       this.formHeaders.controls['id_periodo'].setValue(this.periodos[0].id_periodo);
  //       this.listEquipos();
  //     }
  //   });
  // }
}
