import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';

@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent implements OnInit {
  loading: boolean = false;
  MENU_ITEMS: NbMenuItem[] = [
    {
      title: "Administrar",
      icon: "settings-outline",
      link: "/pages/settings",
      pathMatch: "prefix",
      children: [
        {
          title: "Aperturar evento",
          icon: "sync-outline",
          link: "/pages/settings/aperture-events",
          pathMatch: "prefix",
        },
        {
          title: "Usuarios",
          icon: "sync-outline",
          link: "/pages/settings/users",
          pathMatch: "prefix",
        },
        {
          title: "Diciplinas & Categoría",
          icon: "sync-outline",
          link: "/pages/settings/dicipline-category",
          pathMatch: "prefix",
        },
        {
          title: "Grupos",
          icon: "sync-outline",
          link: "/pages/settings/groups",
          pathMatch: "prefix",
        },
        {
          title: "Equipos",
          icon: "sync-outline",
          link: "/pages/settings/equares",
          pathMatch: "prefix",
        },
      ],
    },
    {
      title: "Relaciones",
      icon: "settings-outline",
      link: "/pages/relations",
      pathMatch: "prefix",
      children: [
        {
          title: "Unir",
          icon: "sync-outline",
          link: "/pages/relations/union",
          pathMatch: "prefix",
        },
      ],
    },
  ];
  constructor(private service: GeneralService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    // const serviceName = 'logout';
    // this.loading = true;
    // this.service.addName$(serviceName).subscribe((res:any) => {
    //   if (res.success) {
    //     localStorage.removeItem('user');
    //     setTimeout(() => {
          this.router.navigate(['/login']);
    //     }, 100);
    //   }
    // }, () => this.loading = false, () => this.loading = false);
  }
}
