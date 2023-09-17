import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-table-position',
  templateUrl: './v-table-position.component.html',
  styleUrls: ['./v-table-position.component.scss']
})
export class VTablePositionComponent implements OnInit {
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
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            partido_jugado: '2',
            ganado: '2',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '6',
            partidos: [
              {
                partido: '1',
                estado: '1'
              },
              {
                partido: '2',
                estado: '1'
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
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
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '1',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '3',
            partidos: [
              {
                partido: '1',
                estado: '1'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            partido_jugado: '0',
            ganado: '0',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: ''
              },
              {
                partido: '2',
                estado: ''
              },
            ]
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
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            partido_jugado: '2',
            ganado: '2',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '6',
            partidos: [
              {
                partido: '1',
                estado: '1'
              },
              {
                partido: '2',
                estado: '1'
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
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
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '1',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '1',
            partidos: [
              {
                partido: '1',
                estado: '2'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            partido_jugado: '2',
            ganado: '0',
            empate: '2',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '2',
            partidos: [
              {
                partido: '1',
                estado: '2'
              },
              {
                partido: '2',
                estado: '2'
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '1',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '1',
            partidos: [
              {
                partido: '1',
                estado: '2'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
        ]
      }
    ];
    this.dataFut.map((res:any) => {
      res.equipeGrupo.sort((a:any, b:any) => (Number(b.puntos) - Number(a.puntos)) || (Number(a.partido_jugado) - Number(b.partido_jugado)));
    });
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
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '1',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '3',
            partidos: [
              {
                partido: '1',
                estado: '1'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            partido_jugado: '2',
            ganado: '1',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '3',
            partidos: [
              {
                partido: '1',
                estado: '1'
              },
              {
                partido: '2',
                estado: '3'
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
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
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '1',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '3',
            partidos: [
              {
                partido: '1',
                estado: '1'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            partido_jugado: '2',
            ganado: '0',
            empate: '0',
            perdido: '2',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: '3'
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '1',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '3',
            partidos: [
              {
                partido: '1',
                estado: '1'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
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
            iglesia: 'El Inti',
            partido_jugado: '2',
            ganado: '1',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '3',
            partidos: [
              {
                partido: '1',
                estado: '1'
              },
              {
                partido: '2',
                estado: '3'
              },
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '1',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '3',
            partidos: [
              {
                partido: '1',
                estado: '1'
              },
              {
                partido: '2',
                estado: ''
              },
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: ''
              },
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            partido_jugado: '2',
            ganado: '1',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '3',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: '1'
              },
              {
                partido: '3',
                estado: ''
              },
            ]
          },
        ]
      },
    ];
    this.dataBasq.map((res:any) => {
      res.equipeGrupo.sort((a:any, b:any) => (Number(b.puntos) - Number(a.puntos)) || (Number(a.partido_jugado) - Number(b.partido_jugado)));
    });
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
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            partido_jugado: '2',
            ganado: '2',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '6',
            partidos: [
              {
                partido: '1',
                estado: '1'
              },
              {
                partido: '2',
                estado: '1'
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/HOREB.jpg',
            equipo: 'GP Horeb',
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
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
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '1',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '3',
            partidos: [
              {
                partido: '1',
                estado: '1'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/ElOlam.png',
            equipo: 'GP El Olam',
            iglesia: 'El Inti',
            partido_jugado: '0',
            ganado: '0',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: ''
              },
              {
                partido: '2',
                estado: ''
              },
            ]
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
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '0',
            perdido: '2',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: '3'
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/emaus.png',
            equipo: 'GP Emaús',
            iglesia: 'El Inti',
            partido_jugado: '2',
            ganado: '2',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '6',
            partidos: [
              {
                partido: '1',
                estado: '1'
              },
              {
                partido: '2',
                estado: '1'
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/orion.png',
            equipo: 'GP Los amigos del Inti',
            iglesia: 'El Inti',
            partido_jugado: '2',
            ganado: '1',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '3',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: '1'
              },
            ]
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
            iglesia: 'El Inti',
            partido_jugado: '0',
            ganado: '0',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: ''
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/JehovaJireh.png',
            equipo: 'GP Jehová Jiréh',
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '1',
            empate: '0',
            perdido: '0',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '3',
            partidos: [
              {
                partido: '1',
                estado: '1'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
          {
            logo: 'assets/imgs/logo-grupo/Migdal.png',
            equipo: 'GP Migdal',
            iglesia: 'El Inti',
            partido_jugado: '1',
            ganado: '0',
            empate: '0',
            perdido: '1',
            goles_favor: '0',
            goles_contra: '0',
            diferencia_goles: '0',
            puntos: '0',
            partidos: [
              {
                partido: '1',
                estado: '3'
              },
              {
                partido: '2',
                estado: ''
              },
            ]
          },
        ]
      }
    ];
    this.dataVoley.map((res:any) => {
      res.equipeGrupo.sort((a:any, b:any) => (Number(b.puntos) - Number(a.puntos)) || (Number(a.partido_jugado) - Number(b.partido_jugado)));
    });
  }
}
