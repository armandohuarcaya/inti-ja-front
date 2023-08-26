import { Component } from '@angular/core';

@Component({
  selector: 'app-intipaz-home',
  templateUrl: './intipaz-home.component.html',
  styleUrls: ['./intipaz-home.component.scss']
})
export class IntipazHomeComponent {
  views:any = 'equipos';
  selectOption(value:any) {
    this.views = value;
  }
}
