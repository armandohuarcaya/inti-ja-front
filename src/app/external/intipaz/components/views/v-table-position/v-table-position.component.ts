import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';

@Component({
  selector: 'app-v-table-position',
  templateUrl: './v-table-position.component.html',
  styleUrls: ['./v-table-position.component.scss']
})
export class VTablePositionComponent implements OnInit {
  dataFut:any = [];
  dataBasq:any = [];
  dataVoley:any = [];

  formHeaders:any = FormGroup;
  loading:boolean = false;
  @Input() idPeriodo:any;
  idFase:number = 1;
  diciplinas:any = [];
  categorias:any = [];
  data:any = [];

  constructor(private service: GeneralService, private fb: FormBuilder) {}

  ngOnInit() {
    // this.listDataFutbol();
    // this.listDataBasquet();
    // this.listDataVoley();

    this.formFields();
    this.getDiciplinas();
  }
  private formFields() {
    const controls = {
      id_periodo: [this.idPeriodo || '', [Validators.required]],
      id_diciplina: ['', [Validators.required]],
      id_categoria: [''],
      id_fase: [this.idFase || ''],
    };
    this.formHeaders = this.fb.group(controls);
  }
  getDiciplinas() {
    const serviceName = END_POINTS.el_inti.filterComun + '/diciplines';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.diciplinas = res.data || [];
      if (this.diciplinas.length>0) {
        this.formHeaders.controls['id_diciplina'].setValue(this.diciplinas[0].id_diciplina);
        this.getCategorias();
      }
    });
  }
  tabDiciplina($event:any) {
    this.formHeaders.controls['id_diciplina'].setValue($event.tabId);
    this.listTablePosition();
  }
  getCategorias() {
    const serviceName = END_POINTS.el_inti.filterComun + '/categories';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.categorias = res.data || [];
      if (this.categorias.length>0) {
        this.listTablePosition();
      }
    });
  }
  selectCategory(categoria:any) {
    this.formHeaders.controls['id_categoria'].setValue(categoria.id_categoria || '');
    this.listTablePosition();
  }
  listTablePosition() {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/table-position';
    const params = {
      id_periodo: this.formHeaders.value.id_periodo,
      id_diciplina: this.formHeaders.value.id_diciplina,
      id_categoria: this.formHeaders.value.id_categoria,
    };
    if (params.id_periodo && params.id_diciplina) {
      this.loading = true;
      this.service.nameParams$(serviceName, params).subscribe((res:any) => {
        this.data = res.data || [];
        if (this.data.length>0) {
          this.data.map((res:any) => {
            res.data.sort((a:any, b:any) => (Number(b.puntos) - Number(a.puntos)) || (Number(a.partido_jugado) - Number(b.partido_jugado)) || (Number(b.diferencia_goles) - Number(a.diferencia_goles)));
          });
        }
      }, () => this.loading = false, () => this.loading = false);
    }
  }
  // selectCategoryFutsal(value:any) {
  //   this.listDataFutbol();
  //   if (value !== 'TODOS') {
  //     this.dataFut = this.dataFut.filter((re:any) => re.categoria === value);
  //   }
  // }
  // listDataFutbol() {
  //   this.dataFut = [
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '0',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '0',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '2',
  //           empate: '0',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '6',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '1'
  //             },
  //             {
  //               partido: '2',
  //               estado: '1'
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '0',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '0',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '1'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '0',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '0',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           partido_jugado: '0',
  //           ganado: '0',
  //           empate: '0',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '0',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: ''
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU', // MUJERES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '0',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '0',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '2',
  //           empate: '0',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '6',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '1'
  //             },
  //             {
  //               partido: '2',
  //               estado: '1'
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '0',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '0',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'MU', // MUJERES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '0',
  //           empate: '1',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '1',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '2'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '0',
  //           empate: '2',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '2',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '2'
  //             },
  //             {
  //               partido: '2',
  //               estado: '2'
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '0',
  //           empate: '1',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '1',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '2'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //           ]
  //         },
  //       ]
  //     }
  //   ];
  //   this.dataFut.map((res:any) => {
  //     res.equipeGrupo.sort((a:any, b:any) => (Number(b.puntos) - Number(a.puntos)) || (Number(a.partido_jugado) - Number(b.partido_jugado)));
  //   });
  // }

  // /// basquetbol
  // selectCategoryBasquet(value:any) {
  //   this.listDataBasquet();
  //   if (value !== 'TODOS') {
  //     this.dataBasq = this.dataBasq.filter((re:any) => re.categoria === value);
  //   }
  // }
  // listDataBasquet() {
  //   this.dataBasq = [
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '1'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '1'
  //             },
  //             {
  //               partido: '2',
  //               estado: '3'
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '0',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '0',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '1'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '0',
  //           empate: '0',
  //           perdido: '2',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '0',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: '3'
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '1'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU', // MUJERES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '1'
  //             },
  //             {
  //               partido: '2',
  //               estado: '3'
  //             },
  //             {
  //               partido: '3',
  //               estado: ''
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '1'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //             {
  //               partido: '3',
  //               estado: ''
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '0',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '0',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: ''
  //             },
  //             {
  //               partido: '3',
  //               estado: ''
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: '1'
  //             },
  //             {
  //               partido: '3',
  //               estado: ''
  //             },
  //           ]
  //         },
  //       ]
  //     },
  //   ];
  //   this.dataBasq.map((res:any) => {
  //     res.equipeGrupo.sort((a:any, b:any) => (Number(b.puntos) - Number(a.puntos)) || (Number(a.partido_jugado) - Number(b.partido_jugado)));
  //   });
  // }

  // // voleybol

  // selectCategoryVoley(value:any) {
  //   this.listDataVoley();
  //   if (value !== 'TODOS') {
  //     this.dataVoley = this.dataVoley.filter((re:any) => re.categoria === value);
  //   }
  // }
  // listDataVoley() {
  //   this.dataVoley = [
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: '1'
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '2',
  //           empate: '0',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '6',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '1'
  //             },
  //             {
  //               partido: '2',
  //               estado: '1'
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '0',
  //           empate: '0',
  //           perdido: '2',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '0',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: '3'
  //             },
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: '1'
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '1'
  //             },
  //             {
  //               partido: '2',
  //               estado: '3'
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: '1'
  //             },
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU', // MUJERES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           partido_jugado: '1',
  //           ganado: '0',
  //           empate: '0',
  //           perdido: '2',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '0',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: '3'
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '2',
  //           empate: '0',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '6',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '1'
  //             },
  //             {
  //               partido: '2',
  //               estado: '1'
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: '1'
  //             },
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'MU', // MUJERES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '0',
  //           empate: '0',
  //           perdido: '2',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '0',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: '3'
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '2',
  //           empate: '0',
  //           perdido: '0',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '6',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '1'
  //             },
  //             {
  //               partido: '2',
  //               estado: '1'
  //             },
  //           ]
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           partido_jugado: '2',
  //           ganado: '1',
  //           empate: '0',
  //           perdido: '1',
  //           goles_favor: '0',
  //           goles_contra: '0',
  //           diferencia_goles: '0',
  //           puntos: '3',
  //           partidos: [
  //             {
  //               partido: '1',
  //               estado: '3'
  //             },
  //             {
  //               partido: '2',
  //               estado: '1'
  //             },
  //           ]
  //         },
  //       ]
  //     }
  //   ];
  //   this.dataVoley.map((res:any) => {
  //     res.equipeGrupo.sort((a:any, b:any) => (Number(b.puntos) - Number(a.puntos)) || (Number(a.partido_jugado) - Number(b.partido_jugado)));
  //   });
  // }
}
