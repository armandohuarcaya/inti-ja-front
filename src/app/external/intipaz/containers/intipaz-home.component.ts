import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intipaz-home',
  templateUrl: './intipaz-home.component.html',
  styleUrls: ['./intipaz-home.component.scss']
})
export class IntipazHomeComponent {
  views:any = 'equipos';
  constructor(private router: Router) {}
  selectOption(value:any) {
    this.views = value;
  }
  login() {
    this.router.navigate(['/login']);
  }
}
