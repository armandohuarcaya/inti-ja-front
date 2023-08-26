import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-groups',
  templateUrl: './v-groups.component.html',
  styleUrls: ['./v-groups.component.scss']
})
export class VGroupsComponent implements OnInit {
  dataFut:any = [];
  dataBasq:any = [];
  dataVoley:any = [];
  constructor() {}
  ngOnInit() {
    this.listDataFutbol();
    this.listDataBasquet();
    this.listDataVoley();
  }
  selectCategoryFutsal(value:any) {
    this.listDataFutbol();
    if (value !== 'TODOS') {
      this.dataFut = this.dataFut.filter((re:any) => re.categoria === value);
    }
  }
  listDataFutbol() {
    this.dataFut = [
      {
        grupo: 'GRUPO A',
        categoria: 'VA', // VARONES
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti'
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'VA', // VARONES
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti'
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'MU', // MUJERES
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti'
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'MU', // MUJERES
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti'
          },
        ]
      }
    ]
  }

  /// basquetbol
  selectCategoryBasquet(value:any) {
    this.listDataBasquet();
    if (value !== 'TODOS') {
      this.dataBasq = this.dataBasq.filter((re:any) => re.categoria === value);
    }
  }
  listDataBasquet() {
    this.dataBasq = [
      {
        grupo: 'GRUPO A',
        categoria: 'VA', // VARONES
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti'
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'VA', // VARONES
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti'
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'MU', // MUJERES
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti'
          },
        ]
      },
    ]
  }

  // voleybol

  selectCategoryVoley(value:any) {
    this.listDataVoley();
    if (value !== 'TODOS') {
      this.dataVoley = this.dataVoley.filter((re:any) => re.categoria === value);
    }
  }
  listDataVoley() {
    this.dataVoley = [
      {
        grupo: 'GRUPO A',
        categoria: 'VA', // VARONES
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti'
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'VA', // VARONES
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti'
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'MU', // MUJERES
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti'
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'MU', // MUJERES
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti'
          },
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti'
          },
        ]
      }
    ]
  }
}
