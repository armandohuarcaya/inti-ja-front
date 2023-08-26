import { Component, OnInit } from '@angular/core';
import Echo from 'laravel-echo';
import { GeneralService } from 'src/app/providers';

@Component({
  selector: 'app-users-home',
  template: `
    <nb-card accent="primary">
      <nb-card-header>
        Holas
      </nb-card-header>
      <nb-card-body>
        Email: {{user?.email}}
      </nb-card-body>
    </nb-card>
  `,
  styles: [
  ]
})
export class UsersHomeComponent implements OnInit {
  user:any;
  constructor(private service: GeneralService) { }

  ngOnInit(): void {
   this.getUsers();
   this.webSockets();
   this.getInfoUsers();
  }
  getUsers() {
    const serviceName = 'user'
    // {headers: headers}
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      // console.log(res);
      this.user = res.data;

    })
  }
  getInfoUsers() {
    const serviceName = 'info-user'
    // {headers: headers}
    this.service.nameAll$(serviceName).subscribe((res:any) => {
      // console.log(res);
      
    })
  }
  webSockets() {
    const echo = new Echo({
      broadcaster: 'pusher',
      cluster: 'mt1',
      key: 'ABCDEFGH',
      wsHost: window.location.hostname,
      wsPort: 6001,
      disableStats: true,
      enabledStats: ['ws'],
      // useTLS: false,
      forceTLS: false
    });
    echo.channel('channel-message').listen('MessageEvent', (res:any) => {
      if (res) {
        this.getUsers();
      }
      // console.log(res, '===============> Hola si funcionoooooo');
      
    })
  }

}
