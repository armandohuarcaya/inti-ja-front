import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-partities',
  templateUrl: './v-partities.component.html',
  styleUrls: ['./v-partities.component.scss']
})
export class VPartitiesComponent implements OnInit {
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
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            puntos: '0',
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
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      }
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
        categoria: 'MU',
        finalizo: 'F',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            puntos: '2',
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'VA',
        finalizo: 'F',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            puntos: '1',
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            puntos: '2',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'MU',
        finalizo: 'F',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            puntos: '2',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'VA',
        finalizo: 'F',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            puntos: '2',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'MU',
        finalizo: 'F',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            puntos: '2',
          },
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'VA',
        finalizo: 'F',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            puntos: '2',
          },
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO A',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'MU',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      },
      {
        grupo: 'GRUPO B',
        categoria: 'VA',
        finalizo: 'N',
        equipeGrupo: [
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            puntos: '0',
          },
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            puntos: '0',
          },
        ]
      }
    ]
  }
}
