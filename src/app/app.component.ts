import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [  /**   ESTO es lo que permite LA NAVEGACION en mi sitio WEB */
    { title: 'Home', url: '/home', icon: 'home' },  // agrego tres nuevas paginas en el menu principal
    { title: 'Customers', url: '/customers', icon: 'people' },  // con las rutas y los iconos
    { title: 'Contact', url: '/contact', icon: 'help-circle' },
  ];
  constructor() {}
}
