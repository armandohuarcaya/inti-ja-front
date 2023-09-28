import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';

@Component({
  selector: 'app-v-partities',
  templateUrl: './v-partities.component.html',
  styleUrls: ['./v-partities.component.scss']
})
export class VPartitiesComponent implements OnInit, OnChanges {
  // dataFut:any = [];
  // dataBasq:any = [];
  // dataVoley:any = [];

  formHeaders:any = FormGroup;
  loading:boolean = false;
  @Input() idPeriodo:any;
  @Input() idFase:any;
  diciplinas:any = [];
  categorias:any = [];
  data:any = [];
  @Input() refresh:number = 0;
  constructor(private service: GeneralService, private fb: FormBuilder) {}

  ngOnChanges():void {
    if (this.idPeriodo || this.idFase || this.refresh) {
      setTimeout(() => {
        this.listPartities();
      }, 100);
    }
  }

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
    this.listPartities();
  }
  getCategorias() {
    const serviceName = END_POINTS.el_inti.filterComun + '/categories';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.categorias = res.data || [];
      if (this.categorias.length>0) {
        this.listPartities();
      }
    });
  }
  selectCategory(categoria:any) {
    this.formHeaders.controls['id_categoria'].setValue(categoria.id_categoria || '');
    this.listPartities();
  }
  listPartities() {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/partities';
    const params = {
      id_periodo: this.idPeriodo,
      id_diciplina: this.formHeaders.value.id_diciplina,
      id_categoria: this.formHeaders.value.id_categoria,
      id_fase: this.idFase,
    };
    if (params.id_periodo && params.id_diciplina && params.id_fase) {
      this.loading = true;
      this.service.nameParams$(serviceName, params).subscribe((res:any) => {
        this.data = res.data || [];
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
  //       categoria: 'MU',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           puntos: '1',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'MU',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti',
  //           puntos: '6',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           puntos: '6',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           puntos: '3',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'MU',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA',
  //       finalizo: 'N',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'MU',
  //       finalizo: 'N',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA',
  //       finalizo: 'N',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU',
  //       finalizo: 'N',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA',
  //       finalizo: 'N',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     }
  //   ]
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
  //       categoria: 'VA',
  //       finalizo: 'S',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jireh',
  //           iglesia: 'El Inti',
  //           puntos: '7',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           puntos: '4',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU',
  //       finalizo: 'S',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           puntos: '4',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           puntos: '5',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           puntos: '9',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           puntos: '10',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los Amigos del Inti',
  //           iglesia: 'El Inti',
  //           puntos: '12',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           puntos: '13',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jireh',
  //           iglesia: 'El Inti',
  //           puntos: '3',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           puntos: '5',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           puntos: '7',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           puntos: '16',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           puntos: '15',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU',
  //       finalizo: 'N',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los Amigos del Inti',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA',
  //       finalizo: 'N',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU',
  //       finalizo: 'N',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA',
  //       finalizo: 'N',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU',
  //       finalizo: 'N',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     }
  //   ]
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
  //       categoria: 'MU',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           puntos: '1',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'MU',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'MU',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           puntos: '1',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           puntos: '1',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'MU',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO A',
  //       categoria: 'VA',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'MU',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //       ]
  //     },
  //     {
  //       grupo: 'GRUPO B',
  //       categoria: 'VA',
  //       finalizo: 'F',
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti',
  //           puntos: '0',
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti',
  //           puntos: '2',
  //         },
  //       ]
  //     }
  //   ]
  // }
}
