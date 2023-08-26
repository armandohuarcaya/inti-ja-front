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
            logo: 'https://companieslogo.com/img/orig/VC2.SI-e8a8a136.png?t=1648748290',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://seeklogo.com/images/J/jireh-design-logo-133B965000-seeklogo.com.png',
            equipo: 'GP Jehová Jiréh',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://st2.depositphotos.com/1277743/5804/v/450/depositphotos_58044913-stock-illustration-friends-icon-design.jpg',
            equipo: 'GP Los amigos del Inti',
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
              {
                partido: '3',
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
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9CWpbXmLsWq6ZleV5lbmR0uH2gOxcL5NspnID7IRbk5J6xJu2sf4QcqDgK5qiYr6Avo&usqp=CAU',
            equipo: 'GP Horeb',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDl54dUPR_XFvoTeh5zNr5dLnaBxwJ9xz1tO3QWYmdIMudOX1obzp6DgXZuepDXg97Dk&usqp=CAU',
            equipo: 'GP Emaús',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://media.licdn.com/dms/image/C4E03AQE2r_sq9KX3Zg/profile-displayphoto-shrink_200_200/0/1516948664316?e=1697673600&v=beta&t=o8Lelu5psRbUz75yVsvpQoMXK5UzdMbAuq7APzvl9go',
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
              {
                partido: '3',
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
            logo: 'https://st2.depositphotos.com/1277743/5804/v/450/depositphotos_58044913-stock-illustration-friends-icon-design.jpg',
            equipo: 'GP Los amigos del Inti',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDl54dUPR_XFvoTeh5zNr5dLnaBxwJ9xz1tO3QWYmdIMudOX1obzp6DgXZuepDXg97Dk&usqp=CAU',
            equipo: 'GP Emaús',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://companieslogo.com/img/orig/VC2.SI-e8a8a136.png?t=1648748290',
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
              {
                partido: '3',
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
            logo: 'https://media.licdn.com/dms/image/C4E03AQE2r_sq9KX3Zg/profile-displayphoto-shrink_200_200/0/1516948664316?e=1697673600&v=beta&t=o8Lelu5psRbUz75yVsvpQoMXK5UzdMbAuq7APzvl9go',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://seeklogo.com/images/J/jireh-design-logo-133B965000-seeklogo.com.png',
            equipo: 'GP Jehová Jiréh',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9CWpbXmLsWq6ZleV5lbmR0uH2gOxcL5NspnID7IRbk5J6xJu2sf4QcqDgK5qiYr6Avo&usqp=CAU',
            equipo: 'GP Horeb',
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
              {
                partido: '3',
                estado: ''
              },
            ]
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
            logo: 'https://companieslogo.com/img/orig/VC2.SI-e8a8a136.png?t=1648748290',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://seeklogo.com/images/J/jireh-design-logo-133B965000-seeklogo.com.png',
            equipo: 'GP Jehová Jiréh',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://st2.depositphotos.com/1277743/5804/v/450/depositphotos_58044913-stock-illustration-friends-icon-design.jpg',
            equipo: 'GP Los amigos del Inti',
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
              {
                partido: '3',
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
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9CWpbXmLsWq6ZleV5lbmR0uH2gOxcL5NspnID7IRbk5J6xJu2sf4QcqDgK5qiYr6Avo&usqp=CAU',
            equipo: 'GP Horeb',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDl54dUPR_XFvoTeh5zNr5dLnaBxwJ9xz1tO3QWYmdIMudOX1obzp6DgXZuepDXg97Dk&usqp=CAU',
            equipo: 'GP Emaús',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://media.licdn.com/dms/image/C4E03AQE2r_sq9KX3Zg/profile-displayphoto-shrink_200_200/0/1516948664316?e=1697673600&v=beta&t=o8Lelu5psRbUz75yVsvpQoMXK5UzdMbAuq7APzvl9go',
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
              {
                partido: '3',
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
            logo: 'https://companieslogo.com/img/orig/VC2.SI-e8a8a136.png?t=1648748290',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9CWpbXmLsWq6ZleV5lbmR0uH2gOxcL5NspnID7IRbk5J6xJu2sf4QcqDgK5qiYr6Avo&usqp=CAU',
            equipo: 'GP Horeb',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDl54dUPR_XFvoTeh5zNr5dLnaBxwJ9xz1tO3QWYmdIMudOX1obzp6DgXZuepDXg97Dk&usqp=CAU',
            equipo: 'GP Emaús',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://st2.depositphotos.com/1277743/5804/v/450/depositphotos_58044913-stock-illustration-friends-icon-design.jpg',
            equipo: 'GP Los amigos del Inti',
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
              {
                partido: '3',
                estado: ''
              },
            ]
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
            logo: 'https://st2.depositphotos.com/1277743/5804/v/450/depositphotos_58044913-stock-illustration-friends-icon-design.jpg',
            equipo: 'GP Los amigos del Inti',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://seeklogo.com/images/J/jireh-design-logo-133B965000-seeklogo.com.png',
            equipo: 'GP Jehová Jiréh',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9CWpbXmLsWq6ZleV5lbmR0uH2gOxcL5NspnID7IRbk5J6xJu2sf4QcqDgK5qiYr6Avo&usqp=CAU',
            equipo: 'GP Horeb',
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
              {
                partido: '3',
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
            logo: 'https://media.licdn.com/dms/image/C4E03AQE2r_sq9KX3Zg/profile-displayphoto-shrink_200_200/0/1516948664316?e=1697673600&v=beta&t=o8Lelu5psRbUz75yVsvpQoMXK5UzdMbAuq7APzvl9go',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDl54dUPR_XFvoTeh5zNr5dLnaBxwJ9xz1tO3QWYmdIMudOX1obzp6DgXZuepDXg97Dk&usqp=CAU',
            equipo: 'GP Emaús',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://companieslogo.com/img/orig/VC2.SI-e8a8a136.png?t=1648748290',
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
              {
                partido: '3',
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
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9CWpbXmLsWq6ZleV5lbmR0uH2gOxcL5NspnID7IRbk5J6xJu2sf4QcqDgK5qiYr6Avo&usqp=CAU',
            equipo: 'GP Horeb',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDl54dUPR_XFvoTeh5zNr5dLnaBxwJ9xz1tO3QWYmdIMudOX1obzp6DgXZuepDXg97Dk&usqp=CAU',
            equipo: 'GP Emaús',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://st2.depositphotos.com/1277743/5804/v/450/depositphotos_58044913-stock-illustration-friends-icon-design.jpg',
            equipo: 'GP Los amigos del Inti',
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
              {
                partido: '3',
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
            logo: 'https://companieslogo.com/img/orig/VC2.SI-e8a8a136.png?t=1648748290',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://seeklogo.com/images/J/jireh-design-logo-133B965000-seeklogo.com.png',
            equipo: 'GP Jehová Jiréh',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
          {
            logo: 'https://media.licdn.com/dms/image/C4E03AQE2r_sq9KX3Zg/profile-displayphoto-shrink_200_200/0/1516948664316?e=1697673600&v=beta&t=o8Lelu5psRbUz75yVsvpQoMXK5UzdMbAuq7APzvl9go',
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
              {
                partido: '3',
                estado: ''
              },
            ]
          },
        ]
      }
    ]
  }
}
