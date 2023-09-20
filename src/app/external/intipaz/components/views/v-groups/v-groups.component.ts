import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';

@Component({
  selector: 'app-v-groups',
  templateUrl: './v-groups.component.html',
  styleUrls: ['./v-groups.component.scss']
})
export class VGroupsComponent implements OnInit {
  // dataFut:any = [];
  // dataBasq:any = [];
  // dataVoley:any = [];

  formHeaders:any = FormGroup;
  loading:boolean = false;
  @Input() idPeriodo:any;
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
    this.listGroups();
  }
  getCategorias() {
    const serviceName = END_POINTS.el_inti.filterComun + '/categories';
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      this.categorias = res.data || [];
      if (this.categorias.length>0) {
        this.listGroups();
      }
    });
  }
  selectCategory(categoria:any) {
    this.formHeaders.controls['id_categoria'].setValue(categoria.id_categoria || '');
    this.listGroups();
  }
  listGroups() {
    const serviceName = END_POINTS.el_inti.settings.intipaz + '/group-equipe';
    const params = {
      id_periodo: this.formHeaders.value.id_periodo,
      id_diciplina: this.formHeaders.value.id_diciplina,
      id_categoria: this.formHeaders.value.id_categoria,
    };
    if (params.id_periodo && params.id_diciplina) {
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
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti'
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
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti'
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
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti'
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
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti'
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
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti'
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
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti'
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
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti'
  //         },
  //       ]
  //     },
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
  //       categoria: 'VA', // VARONES
  //       equipeGrupo: [
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/HOREB.jpg',
  //           equipo: 'GP Horeb',
  //           iglesia: 'El Inti'
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
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/ElOlam.png',
  //           equipo: 'GP El Olam',
  //           iglesia: 'El Inti'
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
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/emaus.png',
  //           equipo: 'GP Emaús',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/orion.png',
  //           equipo: 'GP Los amigos del Inti',
  //           iglesia: 'El Inti'
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
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
  //           equipo: 'GP Jehová Jiréh',
  //           iglesia: 'El Inti'
  //         },
  //         {
  //           logo: 'assets/imgs/logo-grupo/Migdal.png',
  //           equipo: 'GP Migdal',
  //           iglesia: 'El Inti'
  //         },
  //       ]
  //     }
  //   ]
  // }
}
